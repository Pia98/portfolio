// use this file to devine all strings and content such as img paths

export const heading_texts = [
  "Hi, I'm Pia.",
  "Nice to meet you!",
  "Please, let me introduce myself.",
  "I am a frontend web developer.",
  "I love to create innovative projects.",
  "Maybe, I am your next team member?",
];

export const intro_text =
  "I am a frontend web developer based in Augsburg, Germany. I am always eager to learn new technologies and improve my skills. I am looking for a team where I can contribute my knowledge and grow as a developer.";

export const navLinks = [
  { name: "Education", targetId: "education" },
  { name: "Projects", targetId: "showcase" },
  { name: "Experience", targetId: "experience" },
  { name: "Skills", targetId: "skills" },
];

export const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
];

export const schools = [
  {
    imgPath: "/logos/tha.png",
    title: "University of Applied Sciences Augsburg",
    desc: "Master Interactive Media Systems with focus on Animation and Interaction Research",
    duration: "2021 - 2024",
    thesis: "Hero.Net - A Mixed Reality Game Show with Audience Interaction",
    grade: "1.10",
  },
  {
    imgPath: "/logos/lmu.png",
    title: "Ludwig Maximilian University of Munich",
    desc: "Bachelor Media Informatics with focus on Human-Computer Interaction",
    duration: "2016 - 2020",
    thesis: "Distances in Cinematic Virtual Reality",
    grade: "1.85",
  },
  {
    imgPath: "/logos/bbg.png",
    title: "Städt. Bertolt-Brecht-Gymnasium Munich",
    desc: "Science Track",
    duration: "2009 - 2016",
    thesis: "",
    grade: "2.10",
  },
];

export const expCards = [
  {
    review: "Ms. Probst possesses extremely comprehensive and outstanding professional knowledge, which she has consistently applied confidently and successfully to her tasks. Ms. Probst has quickly become acquainted with the responsibilities assigned to her.",
    imgPath: "/logos/flowsight.svg",
    logoPath: "/logos/flowsight_mini.png",
    title: "Working Student Frontend Developer",
    date: "October 2023 - May 2024",
    responsibilities: [
      "Conception and development of front-end features for the Brewcast web platform",
      "Definition of data structures and implementation of program components in the Blazor web framework",
      "Agile working in the Scrum framework",
      "Conducting error analysis and troubleshooting of custom-developed or existing solutions"
    ],
    url:"https://www.flowsight.de"
  },
  {
    review: "Ms. Probst always performed the tasks assigned to her to our complete satisfaction. She demonstrated great commitment and initiative and consistently applied her extensive and sound professional knowledge successfully.",
    imgPath: "/logos/iam.svg",
    logoPath: "/logos/iam_mini.png",
    title: "Working Student Web Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Programming of special plug-ins for Kirby CMS",
      "Various tasks in Kirby frontend development",
      "Contributed in updating a Directus database: Adjustments in the frontend (vuejs) and backend",
      "Development of AplineJS components",
      "Creation of static product pages"
    ],
    url: "https://www.i-am.agency"
  },
  {
    review:
      "Ms. Probst worked quickly, independently, and in a solution-oriented manner, and impressed with her high resilience and flexibility. She completed the tasks assigned to her to our fullest satisfaction.",
    imgPath: "/logos/monks.png",
    logoPath: "/logos/monks_mini.png",
    title: "Working Student Frontend Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Further development of the award-winning teleconsultation service PädExpert",
      "Integration of the PraxisApp “Mein Kinder- und Jugendarzt” into the teleconsultation service PädExpert (PädAssist)",
      "Development of the video consultation feature in the PraxisApp (PädHome)",
      "Integration of the research project “MOMA” into PädExpert",
      "Development of the digital cycle calendar in the PraxisApp “Meine Gyn-Praxis” as part of the telemedicine fertility consultation",
      "Frontend development of the native app for children of separated parents “Getrennt – Gemeinsam”"
    ],
    url: "https://www.monks.de"
  },
];

export const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/techIcons/react.glb",
    scale: 1,
    rotation: [0, 0.5, 0],
    imgPath: "/logos/react.svg",
  },
  {
    name: "VueJS",
    modelPath: "/models/techIcons/vue.glb",
    scale: 3,
    rotation: [0, -0.3, 0],
    imgPath: "/logos/vue.svg",
  },
  {
    name: "EmberJS",
    modelPath: "/models/techIcons/ember.glb",
    scale: 3,
    rotation: [0, 0.1, 0],
    imgPath: "/logos/ember.svg",
  },
  {
    name: "Java",
    modelPath: "/models/techIcons/java.glb",
    scale: 3,
    rotation: [0, 0, 0],
    imgPath: "/logos/java_oc.svg",
  },
  {
    name: "NodeJS",
    modelPath: "/models/techIcons/node.glb",
    scale: 3,
    rotation: [0, -Math.PI * 0.5, 0],
    imgPath: "/logos/node.svg",
  },
  {
    name: "ThreeJS",
    modelPath: "/models/techIcons/three.glb",
    scale: 0.04,
    rotation: [0, 0, 0],
    imgPath: "/logos/threejs.svg",
  },
  {
    name: "C#",
    modelPath: "/models/techIcons/csharp.glb",
    scale: 3,
    rotation: [0, 0.6, 0],
    imgPath: "/logos/csharp_oc.svg",
  },
  {
    name: "Figma",
    modelPath: "/models/techIcons/figma.glb",
    scale: 3,
    rotation: [0, -0.6, 0],
    imgPath: "/logos/figma.svg",
  },
  {
    name: "Adobe CC",
    modelPath: "/models/techIcons/adobe.glb",
    scale: 1,
    rotation: [0, 0, 0],
    imgPath: "/logos/adobe_oc.svg",
  },
  {
    name: "Git",
    modelPath: "/models/techIcons/git.glb",
    scale: 0.045,
    rotation: [0, 0, 0],
    imgPath: "/logos/git.svg",
  },
  {
    name: "GitHub",
    modelPath: "/models/techIcons/github.glb",
    scale: 3,
    rotation: [0, 0, 0],
    imgPath: "/logos/github.svg",
  },
  {
    name: "Unreal Engine",
    modelPath: "/models/techIcons/unreal.glb",
    scale: 3,
    rotation: [0, 0, 0],
    imgPath: "/logos/unreal_oc.svg",
  },
];


export const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/logos/linkedin.png",
    url: "https://www.linkedin.com/in/pia-probst-1b968a187"
  },{
    name: "gihub",
    imgPath: "/logos/github.svg",
    url: "https://github.com/Pia98"
  },{
    name: "shadertoy",
    imgPath: "/logos/shadertoy.png",
    url: "https://www.shadertoy.com/user/TalkToTheDuck"
  },
];
