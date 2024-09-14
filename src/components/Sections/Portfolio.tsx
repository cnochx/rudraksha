import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {pictureHeader,pictureItems, SectionId} from '../../data/data';
import {PictureItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 flex flex-col" sectionId={SectionId.Portfolio}>
      <header className="header w-full grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4" id={pictureHeader.section}>
        <div className="col-span-1 flex justify-center md:justify-start text-neutral-800">
          <div className="relative h-max text-neutral-800">
            <h2 className="text-xl font-bold uppercase text-white">{pictureHeader.title}</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </div>
        </div>
        <aside className="col-span-1 flex flex-col md:col-span-3 text-white">
          <h4 className="text-xl font-bold text-white">{pictureHeader.subtitle}</h4>
          {pictureHeader.content}


        </aside>
      </header>
      <article className="w-full columns-2 md:columns-3 lg:columns-4">
        {pictureItems.map((item, index) => {
          const {title, image} = item;
          return (
            <div className="pb-6" key={`${title}-${index}`}>
              <div
                className={classNames(
                  'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                )}>
                <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                <ItemOverlay item={item} />
              </div>
            </div>
          );
        })}
      </article>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PictureItem}> = memo(({
                                                     item: {
                                                       showLink,
                                                       url,
                                                       showLinkDescr,
                                                       linkDescr,
                                                       title,
                                                       description
                                                     },
                                                   }) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  const ItemContent = (
    <div className="relative h-full w-full p-4">
      <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
        <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
        <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
      </div>
      {showLink && (
        <>
          {showLinkDescr && <p className="text-xs text-white opacity-100 sm:text-sm">{linkDescr}</p>}
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        </>
      )}
    </div>
  );

  return showLink ? (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank"
    >
      {ItemContent}
    </a>
  ) : (
    <div
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      onClick={handleItemClick}
    >
      {ItemContent}
    </div>
  );
});
