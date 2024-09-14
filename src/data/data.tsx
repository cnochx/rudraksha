import {
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import newHealing01 from '../images/pictures/01-new-healing-2017.jpg';
import newHealing02 from '../images/pictures/02-new-healing-2017.jpg';
import newHealing03 from '../images/pictures/03-new-healing-2017.jpg';
import newHealing04 from '../images/pictures/04-new-healing-2017.jpg';
import kalidelic05 from '../images/pictures/05-kalidelic.jpg';
import vilaParaiso06 from '../images/pictures/06-vila-paraiso.jpg';
import vilaParaiso07 from '../images/pictures/07-vila-paraiso.jpg';
import vilaParaiso08 from '../images/pictures/08-vila-paraiso.jpg';
import vilaParaiso09 from '../images/pictures/09-vila-paraiso.jpg';
import vilaParaiso10 from '../images/pictures/10-vila-paraiso.jpg';
import vilaParaiso11 from '../images/pictures/11-vila-paraiso.jpg';
import vilaParaiso12 from '../images/pictures/12-vila-paraiso.jpg';
import vilaParaiso13 from '../images/pictures/13-vila-paraiso.jpg';
import vilaParaiso14 from '../images/pictures/14-vila-paraiso.jpg';
import danceDemostration15 from '../images/pictures/15-dance-demonstration.jpg';
import danceDemostration16 from '../images/pictures/16-dance-demonstration.jpg';
import danceDemostration17 from '../images/pictures/17-dance-demonstration.jpg';
import danceDemostration18 from '../images/pictures/18-dance-demonstration.jpg';
import gso19 from '../images/pictures/19-gso.jpg';
import gso20 from '../images/pictures/20-gso.jpg';
import ecstaticDance21 from '../images/pictures/21-ecstatic-dance.jpg';
import ecstaticDance22 from '../images/pictures/22-ecstatic-dance.jpg';
import ecstaticDance23 from '../images/pictures/23-ecstatic-dance.jpg';
import ecstaticDance24 from '../images/pictures/24-ecstatic-dance.jpg';
import ecstaticDance25 from '../images/pictures/25-ecstatic-dance.jpg';
import frequencyHealingDance26 from '../images/pictures/26-frequency-healing-dance-04.jpg';
import frequencyHealingDance27 from '../images/pictures/27-frequency-healing-dance-04.jpg';
import frequencyHealingDance28 from '../images/pictures/28-frequency-healing-dance-04.jpg';
import frequencyHealingDance29 from '../images/pictures/29-frequency-healing-dance-04.jpg';
import frequencyHealingDance30 from '../images/pictures/30-frequency-healing-dance-05.jpg';
import frequencyHealingDance31 from '../images/pictures/31-frequency-healing-dance-05.jpg';
import frequencyHealingDance32 from '../images/pictures/32-frequency-healing-dance-05.jpg';
import frequencyHealingDance33 from '../images/pictures/33-frequency-healing-dance-05.jpg';
import frequencyHealingDance34 from '../images/pictures/34-frequency-healing-dance-05.jpg';
import frequencyHealingDance35 from '../images/pictures/35-frequency-healing-dance-07.jpg';
import frequencyHealingDance36 from '../images/pictures/36-frequency-healing-dance-07.jpg';
import frequencyHealingDance37 from '../images/pictures/37-frequency-healing-dance-07.jpg';
import frequencyHealingDance38 from '../images/pictures/38-frequency-healing-dance-07.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Header,
  Hero,
  HomepageMeta,
  PictureItem,
  PicturesSection,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rudraksha - DJ, EDM-Music producer',
  description: "Experience DJ Rudra: 30 years in electronic music, blending trance, techno, house, ambient, and Medicine sounds. Transformative journeys await!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'Pictures',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Rudraksha.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Rudraksha, a seasoned <strong className="text-stone-100">maestro of the DJ scene</strong>, has an impressive
        <strong className="text-stone-100">30 years of expertise</strong> in the diverse landscape of
        electronic dance music. For almost three decades, he has dedicated himself to dance music, mastering genres such
        as <strong className="text-stone-100">Psy-Trance</strong>, Trance, Techno, <strong className="text-stone-100">
        Deep-House</strong>, Progressive-House, Progressive-Trance, House and Anden-Step and their subgenres. </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">Beyond dance music, he has spent <strong
        className="text-stone-100">21 years creating soundscapes</strong> that transport the listener to other
        worlds, specializing in ambient, chill-out and electronica. These sonic journeys are not just a listening
        experience, but a <strong className="text-stone-100">journey into the soul</strong>.</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">Over the past 9 years, Rudraksha’s artistic
        expression has <strong className="text-stone-100">evolved to incorporate the rich traditions of South
          American medicine music</strong>, culminating in the <strong className="text-stone-100"><a
          href="https://soundcloud.com/sounds-of-kali"
          target="_blank">Sounds of Kali</a></strong>&nbsp;
          <a href="https://sounds-of-kali.bandcamp.com" target="_blank">project</a>.
        This fusion creates a unique
        listening experience that <strong className="text-stone-100">combines ancient wisdom with modern soundscapes
        </strong>, inviting listeners to embark on a <strong className="text-stone-100">transformative musical journey
        </strong>.</p>
    </>
  ),
  actions: [
    {
      href: 'https://hearthis.at/rudra',
      text: 'Rudraksha @ Hearthis',
      primary: true,
      Icon: ArrowRightOnRectangleIcon,
    },
    {
      href: 'https://soundcloud.com/sounds-of-kali',
      text: 'Sounds of Kali @ Soundcloud',
      primary: true,
      Icon: ArrowRightOnRectangleIcon,
    },
    {
      href: 'https://sounds-of-kali.bandcamp.com',
      text: 'Sounds of Kali @ Bandcamp',
      primary: true,
      Icon: ArrowRightOnRectangleIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const pictureHeader: Header = {
  section: 'pictures',
  title: 'Pictures',
  subtitle: 'Pictures from DJ-Sets of the last years.',
  description: 'Pictures from DJ-Sets of the last years.',
  content: (
    <>
      <p className="text-white">When I started working professionally as a DJ, that was in the '90s in Berlin, it wasn't
        common to take photos. I often didn't appear in the flyers, I was always on the decks by chance, mostly in
        chill-out floors. Unfortunately, the flyers from that time have also been lost... I only started taking photos
        irregularly in 2017.</p>
    </>
  ),
  showSpacer: false,
};

export const pictureItems: PictureItem[] = [
  {
    title: 'New Healing 2017, Gerdshagen, Germany',
    description: 'Producing Kalidelic Mixtape.',
    url: 'https://www.youtube.com/watch?v=WwUvOp_igkc',
    showLink: true,
    showLinkDescr: true,
    linkDescr: 'Official Aftermovie',
    image: newHealing01,
  },
  {
    title: 'New Healing 2017, Gerdshagen, Germany',
    description: 'Producing Kalidelic Mixtape.',
    url: 'https://www.youtube.com/watch?v=WwUvOp_igkc',
    showLink: true,
    showLinkDescr: true,
    linkDescr: 'Official Aftermovie',
    image: newHealing02,
  },
  {
    title: 'New Healing 2017, Gerdshagen, Germany',
    description: 'Producing Kalidelic Mixtape.',
    url: 'https://www.youtube.com/watch?v=WwUvOp_igkc',
    showLink: true,
    showLinkDescr: true,
    linkDescr: 'Official Aftermovie',
    image: newHealing03,
  },
  {
    title: 'New Healing 2017, Gerdshagen, Germany',
    description: 'Producing Kalidelic Mixtape.',
    url: 'https://www.youtube.com/watch?v=WwUvOp_igkc',
    showLink: true,
    showLinkDescr: true,
    linkDescr: 'Official Aftermovie',
    image: newHealing04,
  },
  {
    title: 'Producing Mix Kalidelic, Brazil',
    description: 'Producing Kalidelic Mixtape.',
    url: 'Kalidelic - (Rudras Deephaux Mixtape)',
    showLink: true,
    showLinkDescr: true,
    linkDescr: 'Listen Kalidelic Mix',
    image: kalidelic05,
  },
  {
    title: 'Vila Paraíso, 2018/09/24, Alto Paraíso de Goiás, Brazil',
    description: 'Lua Magica e os >>>portais sensoriais de ostara<<<.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: vilaParaiso06,
  },
  {
    title: 'Vila Paraíso, 2018/09/24, Alto Paraíso de Goiás, Brazil',
    description: 'Lua Magica e os >>>portais sensoriais de ostara<<<.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: vilaParaiso07,
  },
  {
    title: 'Vila Paraíso, 2018/09/24, Alto Paraíso de Goiás, Brazil',
    description: 'Lua Magica e os >>>portais sensoriais de ostara<<<.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: vilaParaiso08,
  },
  {
    title: 'Vila Paraíso, 2018/09/24, Alto Paraíso de Goiás, Brazil',
    description: 'Lua Magica e os >>>portais sensoriais de ostara<<<.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: vilaParaiso09,
  },
  {
    title: 'Vila Paraíso, 2018/09/24, Alto Paraíso de Goiás, Brazil',
    description: 'Lua Magica e os >>>portais sensoriais de ostara<<<.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: vilaParaiso10,
  },
  {
    title: 'Vila Paraíso, 2018/09/24, Alto Paraíso de Goiás, Brazil',
    description: 'Lua Magica e os >>>portais sensoriais de ostara<<<.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: vilaParaiso11,
  },
  {
    title: 'Vila Paraíso, 2018/09/24, Alto Paraíso de Goiás, Brazil',
    description: 'Lua Magica e os >>>portais sensoriais de ostara<<<.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: vilaParaiso12,
  },
  {
    title: 'Vila Paraíso, 2018/09/24, Brazil',
    description: 'Lua Magica e os >>>portais sensoriais de ostara<<<.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: vilaParaiso13,
  },
  {
    title: 'Vila Paraíso, 2018/09/24, Brazil',
    description: 'Lua Magica e os >>>portais sensoriais de ostara<<<.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: vilaParaiso14,
  },
  {
    title: 'Dance demonstration, 2020/06/20, Leipzig, Germany',
    description: 'Dance demonstration against corona repression, Leipzig, Germany.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: danceDemostration15,
  },
  {
    title: 'Dance demonstration, 2020/06/20, Leipzig, Germany',
    description: 'Dance demonstration against corona repression, Leipzig, Germany.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: danceDemostration16,
  },
  {
    title: 'Dance demonstration, 2020/06/20, Leipzig, Germany',
    description: 'Dance demonstration against corona repression, Leipzig, Germany.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: danceDemostration17,
  },
  {
    title: 'Dance demonstration, 2020/06/20, Leipzig, Germany',
    description: 'Dance demonstration against corona repression, Leipzig, Germany.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: danceDemostration18,
  },
  {
    title: 'Global Space Odyssey, 2022/07/23, Leipzig, Germany',
    description: 'Global Space Odyssey – Dance for Future.',
    url: 'https://www.gso-le.de/2022',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: gso19,
  },
  {
    title: 'Global Space Odyssey, 2022/07/23, Leipzig, Germany',
    description: 'Global Space Odyssey – Dance for Future.',
    url: 'https://www.gso-le.de/2022',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: gso20,
  },
  {
    title: 'Ecstatic Dance Ixchel, 2024/01/28, Tulum, México',
    description: 'Ecstatic Dance Ixchel.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: ecstaticDance21,
  },
  {
    title: 'Ecstatic Dance Ixchel, 2024/01/28, Tulum, México',
    description: 'Ecstatic Dance Ixchel.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: ecstaticDance22,
  },
  {
    title: 'Ecstatic Dance Ixchel, 2024/01/28, Tulum, México',
    description: 'Ecstatic Dance Ixchel.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: ecstaticDance23,
  },
  {
    title: 'Ecstatic Dance Ixchel, 2024/01/28, Tulum, México',
    description: 'Ecstatic Dance Ixchel.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: ecstaticDance24,
  },
  {
    title: 'Ecstatic Dance Ixchel, 2024/01/28, Tulum, México',
    description: 'Ecstatic Dance Ixchel.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: ecstaticDance25,
  },
  {
    title: 'Frequency Healing Dance, 2024-04-13, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance26,
  },
  {
    title: 'Frequency Healing Dance, 2024-04-13, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image: frequencyHealingDance27,
  },
  {
    title: 'Frequency Healing Dance, 2024-04-13, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance28,
  },
  {
    title: 'Frequency Healing Dance, 2024-04-13, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance29,
  },

  {
    title: 'Frequency Healing Dance, 2024-05-11, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance30,
  },

  {
    title: 'Frequency Healing Dance, 2024-05-11, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance31,
  },
  {
    title: 'Frequency Healing Dance, 2024-05-11, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance32,
  },
  {
    title: 'Frequency Healing Dance, 2024-05-11, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance33,
  },
  {
    title: 'Frequency Healing Dance, 2024-05-11, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance34,
  },

  {
    title: 'Frequency Healing Dance, 2024-05-11, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance35,
  },
  {
    title: 'Frequency Healing Dance, 2024-05-11, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance36,
  },
  {
    title: 'Frequency Healing Dance, 2024-05-11, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance37,
  },
  {
    title: 'Frequency Healing Dance, 2024-05-11, Leipzig, Germany',
    description: 'Frequency Healing Dance.',
    url: '',
    showLink: false,
    showLinkDescr: false,
    linkDescr: '',
    image:  frequencyHealingDance38,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: PicturesSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: '',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: '',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
