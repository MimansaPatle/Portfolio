export const personalInfo = {
  name: "Mimansa Patle",
  title: "Full-Stack Developer",
  subtitle: "B.Tech CSE Student @ Raipur Institute of Technology",
  email: "mimansapatle@gmail.com",
  location: "Nagpur, Maharashtra, India",
  github: "https://github.com/MimansaPatle",
  linkedin: "https://www.linkedin.com/in/mimansa-patle-b489a6309",
  resumeUrl: "/Mimansa_Patle_Resume.pdf",
  summary:
    "Computer Science Engineering undergraduate and full-stack developer skilled in React, Next.js, Node.js, and MongoDB, with hands-on experience from multiple internships and self-driven projects. Comfortable across the stack from database design to API development to UI and seeking a full-stack developer role to contribute to impactful, real-world software products.",
};

export const skills = {
  Databases: ["MongoDB", "MySQL (SQL)", "DBMS Fundamentals"],
  "Programming Languages": ["C", "Java", "Python", "JavaScript", "TypeScript"],
  Frontend: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  "Software & Tools": ["Git", "GitHub", "VS Code", "Postman"],
};

export const experience = [
  {
    company: "Rays IT & Design World Pvt. Ltd.",
    role: "Web Development Vocational Training — Node.js/Backend",
    type: "Training",
    period: "Jun – Jul 2026",
    points: [
      "Completed a one-month Node.js/backend vocational training covering Express.js, RESTful APIs, and MongoDB.",
      "Delivered CivicWatch India, a full-stack civic issue reporting platform, as the capstone project.",
      "Built REST APIs and structured MongoDB schemas for real-world data persistence.",
    ],
  },
  {
    company: "Prodigy InfoTech",
    role: "Full-Stack Web Development Intern",
    type: "Remote",
    period: "Feb 2026",
    points: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
      "Assisted in backend development and API integration for dynamic web applications.",
      "Implemented authentication workflows and improved application functionality.",
      "Gained experience using Git and collaborative development practices.",
    ],
  },
  {
    company: "Infynas Learning Solutions",
    role: "Web Development Vocational Training",
    type: "Training",
    period: "Aug 2025",
    points: [
      "Completed comprehensive vocational training focused on modern web development.",
      "Developed a full-stack URL Shortener project using Next.js, Node.js, and MongoDB.",
      "Strengthened practical knowledge of front-end and back-end technologies.",
      "Learned industry best practices and modern development workflows.",
    ],
  },
  {
    company: "Codec Technologies",
    role: "Web Developer Intern",
    type: "Internship",
    period: "Apr 2025",
    points: [
      "Worked on web development fundamentals and gained exposure to industry practices.",
      "Learned software development workflow and teamwork in a professional environment.",
      "Developed understanding of project management and client requirements.",
      "Built foundational skills in HTML, CSS, JavaScript, and responsive design.",
    ],
  },
];

export const education = [
  {
    institution: "Raipur Institute of Technology",
    degree: "Bachelor of Technology in Computer Science Engineering (B.Tech CSE)",
    period: "2023 – 2027",
    cgpa: "8.34",
    note: "Expected Graduation: 2027",
  },
];

export const certifications = [
  {
    title: "Gold Certificate – Digital Application Fundamentals",
    issuer: "STEM Certification",
    score: "Score: 88.25%",
  },
  {
    title: "Web Development Vocational Training",
    issuer: "Infynas Learning Solutions",
    score: "August 2025",
  },
  {
    title: "Web Developer Internship Certificate",
    issuer: "Codec Technologies",
    score: "April 2025",
  },
  {
    title: "IBM Full Stack Web Development",
    issuer: "Coursera",
    score: "Jun 2025 ",
  },
];

export const additionalInfo = {
  softSkills: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Time Management"],
  languages: ["English", "Hindi", "Marathi"],
};

export const projects = [
  {
    id: 1,
    title: "URL Shortener",
    subtitle: "Full-Stack Web Application",
    tech: ["Next.js", "Node.js", "MongoDB"],
    description:
      "A full-stack URL shortener that converts long URLs into short, shareable links, built independently end-to-end — from database schema to link-generation logic to UI.",
    points: [
      "Built a full-stack URL shortener converting long URLs into short, shareable links.",
      "Implemented custom short-URL generation with collision-free slug logic.",
      "Designed the MongoDB schema for persistent link storage and redirection.",
      "Built and shipped the entire application independently, end to end.",
    ],
    category: "Full-Stack",
    color: "#c1615a",
    github: "https://github.com/MimansaPatle/UrlShortner",
  },
  {
    id: 2,
    title: "CivicWatch India",
    subtitle: "Civic Issue Reporting Platform",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A civic engagement platform for reporting local issues — potholes, garbage, water leakage — with image and location details, plus an admin dashboard for tracking resolution.",
    points: [
      "Built a platform for citizens to report civic issues with images and precise location details.",
      "Designed the reporting APIs and MongoDB data models behind issue submissions.",
      "Built an admin dashboard for tracking, managing, and resolving reported issues.",
      "Delivered as the capstone project for a Node.js/backend vocational training.",
    ],
    category: "Full-Stack",
    color: "#d9a35c",
    github: "https://github.com/MimansaPatle/CivicWatch_India",
  },
  {
    id: 3,
    title: "PrepAI",
    subtitle: "AI Interview Preparation Platform",
    tech: ["React / Next.js", "Node.js", "MongoDB", "AI APIs"],
    description:
      "An AI-powered interview preparation platform, currently in development. Full feature breakdown and live demo coming soon.",
    points: [],
    category: "Full-Stack",
    color: "#c1615a",
    inProgress: true,
  },
  {
    id: 4,
    title: "Personal Developer Portfolio",
    subtitle: "This Very Site",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "A personal developer portfolio built from scratch to showcase projects, skills, and experience with a clean, responsive, animated design.",
    points: [
      "Designed and built a fully responsive personal portfolio from scratch.",
      "Implemented smooth scroll reveals and interactive UI details with Framer Motion.",
      "Structured all content through a single typed data source for easy updates.",
      "Optimized for performance, accessibility, and cross-browser compatibility.",
    ],
    category: "Web",
    color: "#d9a35c",
    github: "https://github.com/MimansaPatle",
  },
];
