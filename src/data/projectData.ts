import linkImg from "../assets/linkedinProject/linkedin (2).png";
import linkImg2 from "../assets/linkedinProject/linkedin (1).png";
import linkImg3 from "../assets/linkedinProject/linkedin (3).png";
import linkImg4 from "../assets/linkedinProject/linkedin (4).png";
import linkImg5 from "../assets/linkedinProject/linkedin (5).png";
import linkImg6 from "../assets/linkedinProject/linkedin (6).png";

import codeShare from "../assets/codeShare/codeShare (2).png";
import codeShare2 from "../assets/codeShare/codeShare (1).png";
import codeShare3 from "../assets/codeShare/codeShare (3).png";

import meetHub4 from "../assets/meetHub/meetHub (1).png";
import meetHub2 from "../assets/meetHub/meetHub (2).png";
import meetHub3 from "../assets/meetHub/meetHub (3).png";
import meetHub1 from "../assets/meetHub/meetHub (4).png";


export const projects = [
  {
    id: 101,
    name: "LinkHub (LinkedIn replica)",
    description: "Linkedin replica with authentication and private profile",
    extendedDescription: "LinkHub is a platform inspired by LinkedIn, designed for professionals to create profiles, connect with peers, and showcase their skills. The project emphasizes user authentication and privacy, ensuring secure access and personalized experiences. Users can manage their profiles, share updates, and explore professional opportunities, all within a streamlined and intuitive interface.",
    technologies: ["React", "Express.js", "Tailwind CSS", "MongoDB", "Mongoose", "Node.js", "Mailtrap", "Cloudinary", "JWT", "React Router", "Axios"],
    images: [linkImg, linkImg2, linkImg3, linkImg4, linkImg5, linkImg6],
    github: "https://github.com/MBustamante05/linkedin_replica",
    live: "https://linkedin-replica-backend.onrender.com/"
  },
  {
    id:102,
    name: "MeetHub (Collab)",
    description: "Web app for scheduling spaces for meetings and events",
    extendedDescription: "MeetHub is a platform developed for a final project that allows users to schedule meeting spaces for meetings and events. This project emphasizes user authentication and privacy, ensuring secure access and personalized experiences. Also, this not a solo project, it was created in a team of 6 people (Mayra, Betsy, Yadira, Daniela, Manuela and me).",
    technologies: ["React", "Express.js", "CSS" , "MongoDB", "Mongoose", "NodeMailer", "Node.js", "JWT", "React Router Dom", "Cookie Parser", "Sweetalert2", "Moment", "Axios"],
    images: [meetHub1, meetHub2, meetHub3, meetHub4],
    github: "https://github.com/betsyastudillo/meetHub-front",
  },
  {
    id:103,
    name: "Code Sharing",
    description: "Platform where developers can create and share their codes",
    extendedDescription: "CodeShare is a web-based platform that empowers developers to write, save, and share their code snippets effortlessly. Users can create projects in a fully functional code editor, save their work, and generate a unique sharing code. This code allows others to view and collaborate on the shared project through a dedicated link. Ideal for sharing ideas, or educational purposes.",
    technologies: ["React", "Express.js", "CSS", "MongoDB", "Mongoose", "Node.js", "React Router", "Axios"],
    images: [codeShare, codeShare2, codeShare3],
    github: "https://github.com/MBustamante05/code-sharing-challenge",
    live: "https://code-sharing-dmwx.onrender.com/"
  }
]