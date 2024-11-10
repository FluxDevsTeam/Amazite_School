import { nanoid } from 'nanoid';
import { SiWhatsapp } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
const navbarLink = [
  {
    id: nanoid(),
    url: '/',
    text: 'Home',
  },
  {
    id: nanoid(),
    url: '/about-us',
    text: 'About us',
  },
  {
    id: nanoid(),
    url: '/curriculum',
    text: 'Curriculum',
  },
  {
    id: nanoid(),
    url: '/apply-now',
    text: 'Apply Now',
  },
  {
    id: nanoid(),
    url: '/blog',
    text: 'Blog',
  },
];

export const footerLinks = [
  {
    id: nanoid(),
    header: 'links',
    subLinks: [
      { id: nanoid(), text: 'Home', url: '/' },
      {
        id: nanoid(),
        text: 'About us',
        url: '/about-us',
      },
      {
        id: nanoid(),
        text: 'Our Curriculum',
        url: '/curriculum',
      },
      {
        id: nanoid(),
        text: 'Blog',
        url: '/blog',
      },
    ],
  },
  {
    id: nanoid(),
    header: 'reach us',
    subLinks: [
      { id: nanoid(), text: 'Contact', url: '/contact-us' },
      {
        id: nanoid(),
        text: 'Whatsapp',
        url: '*',
      },
      {
        id: nanoid(),
        text: 'Application',
        url: '*',
      },
      {
        id: nanoid(),
        text: 'Email us',
        url: '*',
      },
    ],
  },
  {
    id: nanoid(),
    header: 'reviews',
    subLinks: [
      { id: nanoid(), text: 'Comments', url: '*' },
      {
        id: nanoid(),
        text: 'Awards/Merits',
        url: '*',
      },
      {
        id: nanoid(),
        text: 'Posts',
        url: '*',
      },
    ],
  },
];
export const footerLinksMobile = [
  {
    id: nanoid(),
    header: 'social links',
    subLinks: [
      {
        id: nanoid(),
        text: 'whatsapp',
        url: '*',
        icon: <SiWhatsapp className="font-normal text-[10px]" />,
      },
      {
        id: nanoid(),
        text: 'faceboook',
        url: '*',
        icon: <FaFacebookF className="font-normal text-[10px]" />,
      },
      {
        id: nanoid(),
        text: 'linkedin',
        url: '*',
        icon: <FaLinkedinIn className="font-normal text-[10px]" />,
      },
      {
        id: nanoid(),
        text: 'twitter',
        url: '*',
        icon: <FaXTwitter className="font-normal text-[10px]" />,
      },
    ],
  },
  {
    id: nanoid(),
    header: 'reach us',
    subLinks: [
      { id: nanoid(), text: 'Contact', url: '/contact-us' },
      {
        id: nanoid(),
        text: 'Whatsapp',
        url: '*',
      },
      {
        id: nanoid(),
        text: 'Application',
        url: '*',
      },
      {
        id: nanoid(),
        text: 'Email us',
        url: '*',
      },
    ],
  },
  {
    id: nanoid(),
    header: 'social media',
    subLinks: [
      { id: nanoid(), text: 'Whatsapp', url: '*' },
      {
        id: nanoid(),
        text: 'Facebook',
        url: '*',
      },
      {
        id: nanoid(),
        text: 'LinkedIn',
        url: '*',
      },
      {
        id: nanoid(),
        text: 'Twitter',
        url: '*',
      },
    ],
  },
  {
    id: nanoid(),
    header: 'reviews',
    subLinks: [
      { id: nanoid(), text: 'Comments', url: '*' },
      {
        id: nanoid(),
        text: 'Awards/Merits',
        url: '*',
      },
      {
        id: nanoid(),
        text: 'Posts',
        url: '*',
      },
    ],
  },
];

export const footerLastPart = [
  {
    id: nanoid(),
    header: 'AIA. All rights reserved.',
    subLinks: [
      'Terms of Use',
      'Privacy',
      'Trademarks and Copyrights',
      'Accessibility',
    ],
  },
];

export default navbarLink;
