import firstImg from '../../../assets/landing-1.jpeg';
import secImg from '../../../assets/landing-2.jpeg';
import thirdImg from '../../../assets/landing-4.jpeg';
import fourthImg from '../../../assets/teacher2.jpg';
import firstCur from '../../../assets/cur-1.png';
import secCur from '../../../assets/cur-2.png';
import thirdCur from '../../../assets/cur-4.png';
import firstEv from '../../../assets/ev-1.jpeg';
import secEv from '../../../assets/ev-2.jpeg';
import thirdEv from '../../../assets/ev-4.jpeg';
import person from '../../../assets/person.jpeg';

const imgAnim = [firstImg, secImg, thirdImg, fourthImg];

export const curriculumHome = [
  {
    img: firstCur,
    title: 'Basic Mathematics',
  },
  {
    img: secCur,
    title: 'Identification of Shapes and Objects',
  },
  {
    img: thirdCur,
    title: 'English: Phonics and word recognition',
  },
];

export const eventAndAward = [
  {
    img: firstEv,
    title: 'Prize and speech day',
    desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
  {
    img: secEv,
    title: 'Sports day',
    desc: 'Students participate in various athletic events such as races, relays, and field activities.',
  },
  {
    img: thirdEv,
    title: 'Upcoming science fair',
    desc: ' This event fosters critical thinking, creativity, and public speaking skills, and it encourages students to develop a passion for science and inquiry-based learning.',
  },
];

export const testimony = [
  {
    img: person,
    name: 'Mrs. Onuoha chidinma',
    word: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
  {
    img: person,
    name: 'Mrs. Onuoha chidinma',
    word: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
];

export default imgAnim;
