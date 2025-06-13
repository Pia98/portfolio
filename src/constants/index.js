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
  { name: "Education", target: "/#education" },
  { name: "Projects", target: "/projects" },
  { name: "Experience", target: "/#experience" },
  { name: "Skills", target: "/#skills" },
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

export const showcaseProjects = [
  {
    name: "Hero.Net",
    title: "Hero.Net: An interactive TV-Gameshow with Mixed Reality",
    short_desc: "hero.net is an interactive TV game show, in which two teams are challenged to a quest for the core codes of the internet. By finding those, they rescue the internet from the antagonist. The contestants are sent to a virtual environment. In order to win, they must complete tasks and challenges, as well as escape the traps the antagonist has laid out for them.",
    long_desc: "",
    imgPath: "/projects/heroNet/opener.png",
    pathLink: "/projects/hero-net",
    published: true
  }, {
    name: "Rarity",
    title: "Rarity: A website to showcase endangered species",
    short_desc: "",
    long_desc: "",
    imgPath: "/projects/rarity/opener.png",
    pathLink: "/projects/rarity",
    published: true
  }, {
    name: "The virtual art gallery",
    title: "The virtual art gallery",
    short_desc: "",
    long_desc: "",
    imgPath: "/projects/vag/opener.png",
    pathLink: "/projects/virtual-art-gallery",
    published: true
  }, {
    name: "Artificial Bees?",
    title: "Artificial Bees: A 3D-Blender Scene",
    short_desc: "",
    long_desc: "",
    imgPath: "/projects/vag/opener.png",
    pathLink: "/projects/artificial-bees",
    published: false
  }, {
    name: "Lilo",
    title: "Lilo-App: Your digital best friend",
    short_desc: "",
    long_desc: "",
    imgPath: "/projects/vag/opener.png",
    pathLink: "/projects/lilo",
    published: false
  }, {
    name: "Distances and Shot Sizes in Cinematic Virtual Reality",
    title: "Distances and Shot Sizes in Cinematic Virtual Reality",
    short_desc: "",
    long_desc: "",
    imgPath: "/projects/vag/opener.png",
    pathLink: "/projects/distances-in-cvr",
    published: false
  }, {
    name: "Eat What You Catch",
    title: "Eat What You Catch: A Mixed Reality Pizza Game",
    short_desc: "",
    long_desc: "",
    imgPath: "/projects/vag/opener.png",
    pathLink: "/projects/eat-what-you-catch",
    published: false
  }, {
    name: "Rats Vs Science",
    title: "Rats Vs Science: A Sidescroller Jump 'n Run",
    short_desc: "",
    long_desc: "",
    imgPath: "/projects/vag/opener.png",
    pathLink: "/projects/rats-vs-science",
    published: false
  }
]

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
    name: "C# Blazor",
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

export const heroNetData = {
  title: "Hero.Net",
  subtitle: "An interactive TV-Gameshow with Mixed Reality",
  imgPath: "/projects/heroNet/opener.png",
  description: "Hero.Net is an interactive TV game show, in which two teams are challenged to a quest for the core codes of the internet. By finding those, they rescue the internet from the antagonist. The contestants are sent to a virtual enviroment. In order to win, they must complete taskes and challenges, als well as escape the traps the antagonist has laid out for them. However, the teams can only succeed with the help of the audience. Viewers can interact with the show via the website „Hero.net“ and influence the course of the games. There are two hero teams, each consisting of two team members: a runner and a guide. The goal of the game is to collect the codes in the labyrinth before the time runs out and to be faster than the opposing team. The runner enters the virtual world of the game, navigating the corridors of VAONS with a HoloLens. The guide on the other hand is stationed in the control room, hence beeing physically separated from their team member. The guide can communicate with their partner via mobile phone. The guide‘s task is to assist their teammate by describing the correct path through the labyrinth. In most cases, the guide receives a clue, such as a floor plan, passwords for locked doors, etc. This master‘s thesis explores wether viewer interactions can be innovatively designed and if the medium of Mixed Reality can assist in the process. Additionally, it seeks to explore how a website can contribute to the design of the viewer-side interaction component as an input medium.",
  date: "2022 - 2024"
};

export const rarityData = {
  title: "Rarity",
  subtitle: "Rarity: A website to showcase endangered species",
  imgPath: "/projects/rarity/opener.png",
  description:"RARITY is a project focusing on a topic that concerns us all: The soon demise of many species we have taken for granted for the past decades. While numbers of the most endangered species on this planet quickly decline, we have decided it is time to take action and help saving the wonderful diversity of the animal world. This project by students of the Hochschule Augsburg aims to reach this goal by letting users playfully interact with endangered species and hence raise awareness and empathy. We hope that through joyful interaction like this, we can protect what makes this planet so beautiful.",
  date: "2023"
};