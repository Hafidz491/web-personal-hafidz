import linkedinIcon from "../assets/image/linkedin.png";
import instagramIcon from "../assets/image/instagram.png";
import githubIcon from "../assets/image/github.png";
import emailIcon from "../assets/image/email.png";

import figmaIcon from "../assets/image/figma.svg";
import vsCode from "../assets/image/vscode.svg";
import reactIcon from "../assets/image/react.svg";
import htmlIcon from "../assets/image/html.svg";
import cssIcon from "../assets/image/css.svg";
import jsIcon from "../assets/image/js.svg";
import tailwindIcon from "../assets/image/tailwind.svg";
import bootstrapIcon from "../assets/image/bootstrap.svg";
import wordpressIcon from "../assets/image/wordpress.png";
import framerMotion from "../assets/image/framer.png";
import viteIcon from "../assets/image/vite.png";

import personalHafidz from "../assets/image/personal.png";
import movieApp from "../assets/image/movie.png";
import umrohApp from "../assets/image/umroh.png";

import labiruImage from "../assets/image/labiru.png";
import bangkitImage from "../assets/image/bangkit.png";
import dicodingImage from "../assets/image/dicoding.png";

const Navbar = [
  {
    id: "1",
    name: "Profile",
    url: "profile",
  },
  {
    id: "2",
    name: "Skills",
    url: "skills",
  },
  {
    id: "3",
    name: "Project",
    url: "project",
  },
  {
    id: "4",
    name: "Experience",
    url: "experience",
  },
  {
    id: "5",
    name: "Contact",
    url: "contact",
  },
];

const iconSosmed = [
  {
    id: "1",
    img: linkedinIcon,
    url: "https://www.linkedin.com/in/hafidz-h",
  },
  {
    id: "2",
    img: instagramIcon,
    url: "https://www.instagram.com/hafidzhidayatulloh_/",
  },
  {
    id: "3",
    img: githubIcon,
    url: "https://github.com/hafidz491",
  },
  {
    id: "4",
    img: emailIcon,
    url: "mailto:hafidzhidayatulloh491@gmail.com",
  },
];

const iconSkill = [
  {
    id: "1",
    img: htmlIcon,
  },
  {
    id: "2",
    img: cssIcon,
  },
  {
    id: "3",
    img: jsIcon,
  },
  {
    id: "4",
    img: reactIcon,
  },
  {
    id: "5",
    img: tailwindIcon,
  },
  {
    id: "6",
    img: bootstrapIcon,
  },
];

const iconTools = [
  {
    id: "1",
    img: figmaIcon,
  },
  {
    id: "2",
    img: vsCode,
  },
  {
    id: "3",
    img: githubIcon,
  },
];

const projectHafidz = [
  {
    id: "1",
    img: umrohApp,
    type: "Web App •",
    icon: [wordpressIcon],
  },
  {
    id: "2",
    img: personalHafidz,
    type: "Landing Page •",
    icon: [viteIcon, reactIcon, tailwindIcon, framerMotion],
  },
  {
    id: "3",
    img: movieApp,
    type: "Web App •",
    icon: [viteIcon, reactIcon, tailwindIcon],
  },
];

const experienceHafidz = [
  {
    id: "1",
    img: labiruImage,
    title: "Labiru Raudhah Indonesia",
    position: "Web Developer",
    date: "Oct 2023 - Jan 2024",
    description: [
      "Manage and optimize websites using the WordPress platform to ensure optimal performance and satisfying user experience",
      "Develop and customize custom themes using the PHP programming language in WordPress, as well as adding features to suit company needs",
      "Responsible for managing website content, including the process of uploading articles and implementation of SEO strategies aimed at increasing visibility and ranking in results search",
    ],
  },
  {
    id: "2",
    img: dicodingImage,
    title: "Dicoding Academy X Kampus Merdeka",
    position: "Front-End & Back End Web Development",
    date: "Aug 2022 - Dec 2022",
    description: [
      "Learn the JavaScript programming language from basic to expert",
      "Create a website that implements PWA and SPA and uses the REST API in data call",
      "Learn Back-End knowledge such as consuming RESTful API and amazon EC2 using NodeJS",
    ],
  },
  {
    id: "3",
    img: bangkitImage,
    title: "Bangkit Academy",
    position: "Mobile Development Learning Path",
    date: "Feb 2022 - Jul 2022",
    description: [
      "Learn the Kotlin programming language such as basic functions, functions and OOP",
      "Create mobile applications from the Kotlin language that you have learned",
      "Creating a mobile application operating in the culinary sector for the Capstone Project",
    ],
  },
];

export {
  Navbar,
  iconSosmed,
  iconSkill,
  iconTools,
  projectHafidz,
  experienceHafidz,
};
