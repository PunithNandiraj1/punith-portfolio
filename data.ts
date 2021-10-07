import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "I have basic knowledge on <b>Node</b> , <b>Deno</b> , <b>Express</b> , <b>Graphql</b> & other popular frameworks",
  },
  {
    Icon: MdDeveloperMode,
    title: "Blockchain Researcher and Developer",
    about: " I have researched on various cryptocurrencies , NFT and Blockchain Frameworks like Ethereum and its sidechains ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "I can create stunning user interface designer using <b>Figma</b> ",
  },
  {
    Icon: RiComputerLine,
    title: " Content Writing",
    about:
      " I can write detailed articles and documentation on Emerging Technologies",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "React",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Next",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Sass",
    level: "20",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "25",
  },
];

export const projects: IProject[] = [
  // {
  //   id: 0,
  //   name: "COVID Tracker",
  //   description:
  //     "This app shows a statistical view about corona virus over the world",
  //   image_path: "/images/covid.jpg",
  //   deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
  //   category: ["react"],
  //   key_techs: ["React", "Chart.js", "Material UI"],
  // },
  {
    id: 7,
    name: "MERN App",
    //TODO add data
    image_path: "/images/mern.jpg",
    deployed_url: "https://memories-app-puni.netlify.app/",
    github_url: "https://github.com/PunithNandiraj1/memories-mern",
    category: ["react","node"],
    description:
      "An web app where you can share your memories",
    key_techs: ["React", "MongoDB", "Nodejs" , "Express" , "Material UI" , "Redux"],
  },

  {
    id: 1,
    name: "Basic Threejs Portfolio",
    image_path: "/images/three.png",
    deployed_url: "https://threejs-basic.vercel.app/",
    github_url: "https://github.com/PunithNandiraj1/threejs_basic",
    category: ["node", "mongo", "react"],
    description:
      "A basic portfolio created using threejs",
    key_techs: [
      "Vite" ,
      "Threejs"
    ],
  },

  {
    id: 2,
    name: "SpeedChain Project",
    image_path: "/images/speedchain.jpg",
    deployed_url: "https://drive.google.com/file/d/1dLXK3-cfqz-s3ejdXbM3FbGrVHBPAQll/view?usp=sharing",
    github_url: "https://drive.google.com/file/d/1dLXK3-cfqz-s3ejdXbM3FbGrVHBPAQll/view?usp=sharing",
    //TODO type on category
    category: ["node", "react" , "mongo"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },


  {
    id: 3,
    name: "Twitter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "https://twitter-clone-d2bfb.web.app/",
    github_url: "https://github.com/PunithNandiraj1/twitter-clone",
    category: ["node", "react"],
    description:
      " HomePage of Twitter Cloned ",
    key_techs: ["React", "Node", "Javascript"],
  },
  {
    id: 4,
    name: "Security Token Platform Analysis",
    image_path: "/images/token.jpg",
    deployed_url: "https://drive.google.com/file/d/1KTS6nSQrw5y6foysOVH5qTEfEvx7_zF8/view?usp=sharing",
    category: ["react"],
    github_url: "",
    description: "Researched on various Security Token Platforms",
    key_techs: ["Research"],
  },

  {
    id: 5,
    name: "React Tailwind",
    image_path: "/images/tailwind.jpg",
    deployed_url: "https://react-tailwind-punith.netlify.app/",
    category: ["react"],
    github_url: "https://github.com/PunithNandiraj1/react-tailwind",
    description: "Basic react tailwind website",
    key_techs: [ "React", "TypeScript", "Tailwind"],
  },



  
];