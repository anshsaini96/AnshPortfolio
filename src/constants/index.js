import {
  html,
  css,
  javascript,
  react,
  tailwindcss,
  nodejs,
  mongodb,
  microsoftword,
  microsoftexcel,
  microsoftpowerpoint,
  powerbi,
  mysql,
  motion,
  github,
  linkedin,
  contact,
} from "../assets/icons";

/* =========================
   SKILLS
========================= */
export const skills = [
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: react, name: "React", type: "Frontend" },
  { imageUrl: tailwindcss, name:"Tailwind CSS", type: "Frontend" },
  { imageUrl: nodejs, name: "Node.js", type: "Backend" },
  { imageUrl: mongodb, name: "MongoDB", type: "Database" },
  { imageUrl: motion, name: "Three.js", type: "3D / Animation" },
  {imageUrl: microsoftword, name: "Microsoft Word", type: "Other" },
  {imageUrl: microsoftexcel, name: "Microsoft Excel", type: "Other" },
  {imageUrl: microsoftpowerpoint, name: "Microsoft PowerPoint", type: "Other" },
  {imageUrl: powerbi, name: "Power BI", type: "Other" },
  { imageUrl: mysql, name: "MySQL", type: "Database" },
  
];

/* =========================
   EXPERIENCE
========================= */
/* =========================
   EDUCATION (USING experiences)
========================= */

export const achievements = [
  {
    title: "Management Trainee Offer",
    organization: "DropDash",
    date: "May 2025",
    description:
      "Selected for the Management Trainee role, demonstrating strong communication, analytical, and problem-solving abilities during the selection process.",
  },
];


export const experiences = [

{
  title: "Deputy Delivery Hub Manager (DDHM)",
  company_name: "Zepto",
  icon: react,
  iconBg: "#e0f2fe",
  date: "June 2025",
  points: [
    "Completed a short-term internship at Zepto's delivery hub operations.",
    "Supported daily hub operations and delivery workflow management.",
    "Observed team coordination, inventory movement, and operational processes.",
    "Received Internship Completion Certificate upon successful completion."
  ],
},

  {
  
  title: "Co-Founder & Full Stack Developer",
    company_name: "Auraa",
    icon: react, // replace with MDU logo if available
    iconBg: "#e0f2fe",
    date: "2024 - Present",
    points: [
      "Auraa is a premium jewellery brand dedicated to creating elegant, timeless pieces that resist tarnishing and maintain their shine. Our collections combine quality craftsmanship with modern design, ensuring each piece is both beautiful and durable. Auraa aims to offer customers jewellery that lasts, helping them celebrate special moments with confidence and style."
    ],
  },

  {
    title: "Bachelor of Computer Applications (BCA)",
    company_name: "Maharshi Dayanand University (MDU)",
    icon: react, // replace with MDU logo if available
    iconBg: "#e0f2fe",
    date: "2023 – 2026",
    points: [
      "Currently pursuing Bachelor of Computer Applications (BCA) with a strong academic focus on software development and modern web technologies.",
      "Actively learning and applying concepts of full stack development including React, Node.js, MongoDB, Tailwind CSS, and Three.js.",
      "Built multiple real-world projects such as a healthcare management platform, virtual assistant, quiz application, and a full stack business website.",
      "Gained practical experience in UI/UX design, responsive layouts, API integration, and deployment of live web applications.",
      "Continuously improving problem-solving skills, coding practices, and understanding of scalable application architecture.",
    ],
  },
  {
    title: "Senior Secondary Education (12th – Humanities)",
    company_name: "Central Board of Secondary Education (CBSE)",
    icon: tailwindcss, // replace with school logo if available
    iconBg: "#fef3c7",
    date: "2022",
    points: [
      "Completed Senior Secondary Education under the CBSE board with Humanities stream.",
      "Studied subjects including History, Political Science, Geography, and English, building a strong foundation in analytical and critical thinking.",
      "Achieved an overall score of 65%, demonstrating consistency and academic discipline.",
      "Developed effective communication skills, research abilities, and structured writing through humanities-based coursework.",
      "The humanities background contributed to strong problem-analysis, creativity, and user-centric thinking in technology projects.",
    ],
  },
  {
    title: "Secondary Education (10th)",
    company_name: "Central Board of Secondary Education (CBSE)",
    icon: javascript, // replace with school logo if available
    iconBg: "#ecfeff",
    date: "2020",
    points: [
      "Completed Secondary Education (Class 10th) under the CBSE board.",
      "Secured 59% overall, maintaining a balanced academic performance across subjects.",
      "Developed foundational knowledge in mathematics, science, and computer basics.",
      "Built early interest in technology and logical thinking, which later evolved into pursuing computer applications.",
      "Strengthened discipline, time management, and learning consistency during this academic phase.",
    ],
  },
];


/* =========================
   SOCIAL LINKS
========================= */
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/anshsaini96",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ansh-saini-/",
  },
];

/* =========================
   PROJECTS
========================= */
export const projects = [
  {
    iconUrl: mongodb,
    theme: "btn-back-blue",
    name: "Auraa – Full Stack Website",
    description:
      "A production-ready full stack website for Auraa featuring a modern UI, responsive layout, and scalable architecture.",
    link: "https://auraa-frontend.vercel.app/",
  },
  {
    iconUrl: html,
    theme: "btn-back-green",
    name: "Virtual Assistant",
    description:
      "A virtual assistant web application that provides real-time interaction with a clean and intuitive user interface.",
    link: "https://auraa-rho.vercel.app/",
  },
  {
    iconUrl: javascript, react,
    theme: "btn-back-yellow",
    name: "Healthcare Application",
    description:
      "A healthcare web app that allows users to generate, view, and download blood pressure (BP) reports securely.",
    link: "https://auraa-health-care.vercel.app/",
  },
  {
    iconUrl: react,
    theme: "btn-back-red",
    name: "Quiz Application",
    description:
      "An interactive quiz application with dynamic questions, real-time scoring, and a smooth user experience.",
    link: "https://ansh-quiz.vercel.app/",
  },
{
  iconUrl: powerbi,
  theme: "btn-back-purple",
  name: "PhonePe Power BI Dashboard",
  description:
    "An interactive Power BI dashboard built using PhonePe transaction data. The dashboard provides insights into transaction volumes, transaction values, user growth, geographic trends, and digital payment adoption across India through dynamic visualizations and data-driven analytics.",
  link: "https://github.com/anshsaini96/PhonePe-PowerBI-Dashboard",
},
];

/* =========================
   CONTACT INFO
========================= */
export const contactInfo = {
  email: "workansh.saini@gmail.com",
};
