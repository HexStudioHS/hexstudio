/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import Recruiting from '../assets/images/Portfolio/ssss.png';
import Stream from '../assets/images/Portfolio/head.jpg';
import Freelance from '../assets/images/Portfolio/sss.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/mithu.jpg';
import Reiner from '../assets/images/Testimonials/toml.jpg';
import Kruger from '../assets/images/Testimonials/appa.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/Backend1.jpg';
import HRD from '../assets/images/TeamMembers/123.jpg';
import Frontend1 from '../assets/images/TeamMembers/23.jpg';
import Finance from '../assets/images/TeamMembers/dharsh.jpg';
import ProjectManager from '../assets/images/TeamMembers/qwer.jpg';
import Frontend2 from '../assets/images/TeamMembers/anas.jpg';

export const Services = [
  {
    title: 'Web Development',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'UI/UX Design',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'AI/ML',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'ChitFund Website',
    imageUrl: Recruiting,
    type: 'Website',
    description: 'A secure, transparent platform built to manage chit fund operations, track auctions, and streamline communication between members and administrators.',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    // credit: 'https://dribbble.com/shots/15164950-Recruiting-app',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: 'HeadPhones Website',
    imageUrl: Stream,
    type: 'Website',
    description: 'An e-commerce platform focused on delivering an immersive audio shopping experience with product filtering, smooth checkout, and sleek design.',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    // credit: 'https://dribbble.com/shots/15276430-Stream',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'Freelance',
    imageUrl: Freelance,
    type: 'Website',
    description: 'A professional portfolio site designed for freelancers to showcase their skills, connect with clients, and manage project inquiries.',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    // credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  },
];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'From ideas to updates, we make sure you"re always part of the journey.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We handle our projects with care to make sure everything turns out great.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'We believe in teamwork to get things done the right way.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "From start to finish, our projects leave clients impressed.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Mithuna V',
    company: 'SEO',
    testimoni: 'Thanks for Hexstudio, you guys are the best! Keep up the good work!',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Nagarajan M',
    company: 'Founder, Vinayaga Chitfund',
    testimoni: 'I just wanted to let you know that it’s been great working with Hexstudio.',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Venkatachalam R',
    company: 'CEO, Lotus Embroidery',
    testimoni: 'Hexstudio is so good. Thank you so much for a work.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Adithya K',
    position: 'CEO & Founder',
    imageUrl: CEO,
  },
  {
    name: 'Ashvin Prasad N',
    position: 'COO & Co-Founder',
    imageUrl: HRD,
  },
  {
    name: 'Thamarai Selvam V',
    position: 'CTO & TeamLead',
    imageUrl: ProjectManager,
  },
  {
    name: 'Dharshan R',
    position: 'CMO & Managing Trustee',
    imageUrl: Finance,
  },
  {
    name: 'Abhidha Dhanabal',
    position: 'Design Engineer',
    imageUrl: Frontend1,
  },
  {
    name: 'Mohammed Anas S',
    position: 'Developer & Technical HR',
    imageUrl: Frontend2,
  },
];
