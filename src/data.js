export const tech = [
  { name: "html", text: "HTML", logo: "/src/assets/html.png", id: "1" },
  { name: "css", text: "CSS", logo: "../assets/css.png", id: "2" },
  {
    name: "javascript",
    text: "JavaScript",
    logo: "../assets/javascript.png",
    id: "3",
  },
  { name: "react", text: "React JS", logo: "../assets/react.png", id: "4" },
  { name: "sass", text: "SASS", logo: "../assets/sass.png", id: "5" },
  {
    name: "vite",
    text: "Vite",
    logo: "../assets/vite.png",
    id: "6",
  },
  {
    name: "typescript",
    text: "Typescript",
    logo: "../assets/typescript.png",
    id: "7",
  },
  { name: "git", text: "GIT", logo: "../assets/git.png", id: "8" },
  {
    name: "router",
    text: "React Router",
    logo: "../assets/router.png",
    id: "9",
  },
  {
    name: "material",
    text: "Material UI",
    logo: "../assets/material.png",
    id: "10",
  },
  {
    name: "solidity",
    text: "Solidity",
    logo: "../assets/solidity.png",
    id: "11",
  },
  {
    name: "node",
    text: "Node",
    logo: "../assets/node.png",
    id: "12",
  },
  {
    name: "tailwind",
    text: "Tailwind",
    logo: "../assets/tailwind.png",
    id: "13",
  },
];

export const projects = [
  {
    name: "chart",
    text: "Charts",
    tags: ["", "React JS"],
    web: "https://crypto-graphics-98bcb.firebaseapp.com/",
    code: "https://github.com/AlbertoLanchas/cryptoGraphics",
    id: "1",
    description:
      "It is a Cryptocurrency Tracker App with React JS. App full responsive functionality. I use React Hooks as useState, useEffect and useContext. Besides, I included Firebase to add features like Google Authentication and Firestore with CRUD operations.",
    details: [
      "Deploy a React App with Firebase Hosting",
      "Create Charts using Charts JS",
      "Make a User Interface with Material UI",
    ],
    logo: ["react", "firebase", "chartjs", "router", "material"],
  },
  {
    name: "rick",
    text: "Rick & Morty API",
    tags: ["", "React JS"],
    web: "https://rick-and-mortyl.web.app/",
    code: "https://github.com/AlbertoLanchas/RickMorty",
    id: "2",
    description:
      "It's an API REST App base on the television show Rick & Morty. Includes React pagination to display the data, filters to clarify the characters, and React Router Dom to navigate into different specific details of each character.",
    details: [
      "Make beautiful components with Bootstrap.",
      "Data fetching from API REST & Pagination.",
      "Filter data from a real-time database.",
    ],
    logo: ["react", "bootstrap", "router"],
  },
  {
    name: "todo",
    text: "To Do  List",
    tags: ["", "React JS"],
    web: "https://to-do-list-alberto.web.app/",
    code: "https://github.com/AlbertoLanchas/to_do_list",
    id: "3",
    description:
      "Learned Typescript from scratch and used it with React hooks such as useState, useRef and useReducer. Understood PropTypes, DefaultProps building a todo list app project. ",
    details: [
      "Setup React Typescript Project.",
      "Generics interfaces and functions in Typescript.",
      "Functional Component type.",
    ],
    logo: ["react", "typescript"],
  },
  {
    name: "tetris",
    text: "Tetris Game",
    tags: ["", "React JS"],
    web: "https://tetris-clon.web.app/",
    code: "https://github.com/AlbertoLanchas/tetris",
    id: "4",
    description:
      "This was an excellent way to learn the principles of React as well as how to arrange code. I utilized functional components, useState, useEffect, useCallback, memo, custom hooks, and keyboard input to create this app.",
    details: [
      "Custom Hooks",
      "Input with player drop with speed by level, pause and interval resets.",
      "Improve User Interface and User Experience.",
    ],
    logo: ["react"],
  },
  {
    name: "disney+",
    text: "Disney+ Clone",
    tags: ["", "React JS"],
    web: "",
    code: "https://github.com/AlbertoLanchas/disney-clone",
    id: "5",
    description:
      "It's a Disney+ Clone App created with React JS and has Google Authentication to provide protected routes. The data is from Cloud Storage using Firebase to store and serve user-generated content, such as photos or videos.",
    details: [
      "Handle authentication with Firebase.",
      "Data fetching from API REST & Pagination.",
      "Filter data from a real-time database.",
    ],
    logo: ["react", "redux", "vite", "firebase", "styled"],
  },
  {
    name: "javascript30",
    photo: "js30",
    text: "Javascript 30",
    tags: ["", "Javascript"],
    web: "",
    code: "https://github.com/AlbertoLanchas/JavaScript-30",
    id: "6",
    description:
      "Javascript 30 is 30 differents challenges with Vanilla Javascript where I could learn all the fundamentals of Javascript. ",
    details: [
      "Working with the DOM without a library",
      "Resolve differents situations problems",
      "Fundamentals of the Browser API",
    ],
    logo: ["javascript"],
  },
];

export const objetives = [
  {
    name: "node",
    url: "node.png",
    text: "Node JS",
    description:
      '"Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications."',
    details:
      "In addition to my experience as a fullstack developer, I believe that Node JS will provide me with a thorough understanding of how an entire development team operates.",
    id: "0",
  },
  {
    name: "databases",
    url: "sql.png",
    text: "SQL Databases",
    description:
      '"Structured Query Languageis the standard language for Relational Database System. It is a computer language for storing, manipulating and retrieving data stored in a relational database."',
    details:
      "In the same way as Node JS with databases, I can get a full stack perspective to understand how data is stored and the most efficient method to access it.",
    id: "1",
  },
  {
    name: "solidity",
    url: "solidity.png",
    text: "Solidity",
    description:
      '"Solidity is an object-oriented programming language for writing smart contracts on blockchains like, most famously, Ethereum. With Solidity you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets."',
    details:
      "Blockchain is one of my recent hobbies. With blockchain programming, it gives an opportunity to improve the old, inefficient system programs.",
    id: "2",
  },
  {
    name: "nextjs",
    url: "nextjs.png",
    text: "Next JS",
    description:
      '"Next.js is a javascript framework built with react js, webpack, and babel. Next.js helps developers quickly create static generation and server-side rendering websites."',
    details:
      "It is a more efficient way to create apps similar as React, also provides to web pages could be boost with SEO.",
    id: "3",
  },
];
