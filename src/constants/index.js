import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  csharp,
  reactjs,
  bootstrap,
  nodejs,
  mongodb,
  git,
  express,
  spring,
  meta,
  starbucks,
  tesla,
  shopify,
  chatApp,
  pos,
  bookApp,
  mysql,
  easy,
  blog,
  commerce,
  lms,
  shopping,
  sms
} from "../assets";

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Associate Software Engineer",
    company_name: "Hasthiya IT",
    icon: meta,
    iconBg: "#ffffff",
    date: "Dec 2025 – Present",
    points: [
      "Designed and developed full-stack web applications using Node.js, Express, Nest.js, Spring Boot, React, MySQL, and MongoDB.",
      "Built scalable and user-friendly solutions with seamless frontend and backend integration.",
      "Developed RESTful APIs and managed databases to ensure reliable data flow and high performance.",
      "Handled DevOps tasks including CI/CD pipeline setup, containerization, and cloud deployment using AWS, cPanel, and Cloudflare.",
      "Provided leadership and mentorship to junior developers, fostering a collaborative and growth-oriented team environment.",
    ],
  },
  {
    title: "Full-Stack Intern Developer",
    company_name: "Hasthiya IT",
    icon: meta,
    iconBg: "#ffffff",
    date: "Jun 2025 – Dec 2025",
    points: [
      "Designed and developed full-stack web applications using Node.js, Express, Nest.js, Spring Boot, React, MySQL, and MongoDB.",
      "Built scalable and user-friendly solutions with seamless frontend and backend integration.",
      "Developed RESTful APIs and managed databases to ensure reliable data flow and performance.",
      "Handled DevOps tasks including CI/CD pipeline setup, containerization, and cloud deployment using AWS, cPanel, and Cloudflare.",
    ],
  },
  {
    title: "Backend Intern Developer",
    company_name: "Hasthiya IT",
    icon: meta,
    iconBg: "#ffffff",
    date: "Sep 2024 – Mar 2025",
    points: [
      "Developed backend services using Node.js, Express, Nest.js, MySQL, and MongoDB.",
      "Built scalable backend solutions with clean architecture and efficient data handling.",
      "Created RESTful APIs and managed databases for smooth and secure data flow.",
      "Optimized backend performance and improved application reliability.",
    ],
  },

];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Chat App",
    description:
      "Built a real-time chat app using MongoDB, Express, React, Node.js, and Socket.IO. Features include JWT authentication, instant messaging, responsive design with TailwindCSS, and real-time notifications with React Hot Toast. Demonstrates full-stack development and real-time communication skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Chat-App-MERN",
  },
  {
    name: "POS System",
    description:
      "Developed a robust Point of Sale system using React for the frontend and Spring Boot for the backend. Key features include JWT authentication, Hibernate for data persistence, and Cloudinary for image management. The system is designed with Bootstrap for responsive UI styling, ensuring a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
    ],
    image: pos,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Point_Of_Sale_System-SpringBoot-React",
  },
  {
    name: "Book Store App",
    description:
      "Developed a full-stack web app using the MERN stack. The frontend features React, Tailwind CSS, and Firebase for authentication, while the backend uses Express.js, MongoDB, and Node.js. Key functionalities include routing with React Router, local storage with LocalForage, and dynamic components with Swiper and React Icons.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: bookApp,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Book-Store-App-MERN",
  },
   {
    name: "Easy Booking App",
    description:
      "Built a booking web application with admin panel using React, Angular, TypeScript, Spring Boot, MySQL, and Tailwind CSS. Integrated a dynamic hotel blog for content management and implemented secure authentication with Keycloak, JWT, OAuth 2.0, and Bcrypt, and deployed on AWS/Hostinger with SendGrid email notifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
      {
        name: "angular",
        color: "orange-text-gradient",
      },
    ],
    image: easy,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha?tab=repositories",
  },
  {
    name: "Blog Application",
    description:
      "Designed and developed a fully responsive Blog Application with a dynamic frontend, robust backend, and an intuitive admin panel. Implemented key features such as user authentication, role-based access, and full CRUD operations. Utilized MongoDB for efficient data management and Tailwind CSS for modern, mobile-friendly UI design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "next.js",
        color: "orange-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Blog_App",
  },
  {
    name: "E-Commerce Web App",
    description:
      "Developed a full-stack e-commerce website using Next.js, React, Node.js, and MongoDB, featuring user authentication with Clerk, admin panel for product and order management, and cart functionality. Integrated Inngest for background jobs, Cloudinary for image storage, styled with Tailwind CSS, and deployed on Vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "next.js",
        color: "orange-text-gradient",
      },
    ],
    image: commerce,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/E-Commerce",
  },
  {
    name: "LMS",
    description:
      "Developed a full-stack Learning Management System using React, Node.js, Express, and MongoDB. Implemented user authentication with Clerk, payments with Stripe, and file uploads via Cloudinary. The platform features course creation, progress tracking, and a responsive UI built with Tailwind CSS and Vite.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: lms,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/LMS",
  },
  {
    name: "Shopping App",
    description:
      "Developed a full-stack online shopping platform for Dressbay, a leading Sri Lankan clothing brand. Key features include user authentication, product browsing, cart, secure Stripe payments, and an admin panel for inventory and order management. Built with MERN stack, JWT, MongoDB Atlas, and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: shopping,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Shopping_App",
  },
  {
    name: "SMS",
    description:
      "Developed a full-featured Supermarket Mgt System using Java with MVC architecture. Key features include inventory control, billing, user management, exception handling, and transaction safety. Implemented design patterns for efficient service management. Built with Java Swing for the UI and MySQL for data storage using JDBC.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: sms,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Supermarket_MVC_CRUD",
  },
];

export { services, technologies, experiences, projects };
