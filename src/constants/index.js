
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  aura7Img,
  fashionHeistImg,  
  zorkoImg,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Content Writer",
    icon: web,
  },
  {
    title: "Marketing",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Co-Founder",
    company_name: "Next Media Co",
    icon: tekisky,
    iconBg: "#383E56",
    date: "June 2024 - present",
    points: [
      "Conducting in-depth research on market trends and consumer behavior to create content that aligns with current digital landscapes.",
      "Developing and scripting engaging videos to explain concepts and boost organic reach across platforms.",
      "Planning and executing digital ad strategies and branding campaigns to maximize visibility and impact for clients.",
      "Collaborating with designers, editors, and clients to create cohesive marketing visuals and messaging that drive business results.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Aura 7",
    description:
      "Aura 7 Salon offers premium beauty and wellness services, blending expert care with a tranquil atmosphere to enhance your natural beauty.",
    tags: [
      {
        name: "marketing",
        color: "blue-text-gradient",
      },
      {
        name: "graphic design",
        color: "white-text-gradient",
      },
      {
        name: "branding",
        color: "pink-text-gradient",
      },
    ],
    image: aura7Img,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fashion Hiest",
    description:
      "Fashion Heist brings bold, oversized t-shirts that redefine comfort and style with edgy designs for the fashion-forward.",
    tags: [
      {
        name: "content research",
        color: "blue-text-gradient",
      },
      {
        name: "marketing",
        color: "green-text-gradient",
      },
    ],
    image: fashionHeistImg,
    source_code_link: "https://github.com/",
  },
  {
    name: "Zorko",
    description:
      "Zorko offers a unique blend of delicious flavors with its tempting range of burgers, fries, and drinks, perfect for every craving.",
    tags: [
      {
        name: "graphic design",
        color: "blue-text-gradient",
      },
    ],
    image: zorkoImg,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
