import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Maciej Ostrowski | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A showcase of my work.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm",
  name: 'Maciej Ostrowski',
  subtitle: "I'm a web developer",
  cta: 'Check out my GitHub!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profil.png',
  paragraphOne: "Hi! I'm Maciej, an Oslo-based front end developer!",
  paragraphTwo: "I've been a tech-head for all my life, dissecting any electronic device I could land my hands on, to see how it worked. This passion transfered over to software, and I started coding at 11, trying to deconstruct webpages to see how they worked.",
  paragraphThree: "I specialize in HTML, CSS and JavaScript, React and Redux, and I pick up any new libraries easily.",
  resume: 'https://www.dropbox.com/s/7nblds9gxuuhr03/MaciejOstrowskiResume.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ecommerce.png',
    title: 'Ecommerce Showcase',
    info: "An online store made using react. Users are able to log in, add items to the cart, browse different sections and check out with stripe.",
    info2: 'I used redux for state management, firebase for google sign-in and storing users. "Payments" are processed with the stripe api',
    url: 'http://maciejclothing.herokuapp.com',
    repo: 'https://github.com/maaaaciej/ecommerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dadjoke.png',
    title: 'Dad Joke API',
    info: 'A dad joke website, that returns a random dad joke each time you access it. I have also made an API to go with it, so that anyone can make their own version of it.',
    info2: 'Made in python with flask.',
    url: 'https://dadjokeapi.herokuapp.com',
    repo: 'https://github.com/maaaaciej/dadjokeapi', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cats.png',
    title: 'Cat Facts',
    info: 'A React app made using the Cat Facts Api. The app displays the fact from the JSON response from the api. A new response happens on every button click, and the fact is passed down to the text component with state.',
    info2: '',
    url: 'https://maaaaciej.github.io/catfacts/',
    repo: 'https://github.com/maaaaciej/catfacts', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pics.png',
    title: 'Unsplash API Search Engine',
    info: 'An image search engine made using React and the unsplash API. The API requests are made using Axios.',
    info2: 'The images are placed in a responsive CSS grid, where each image takes up a number of rows relative to the image height.',
    url: 'https://maaaaciej.github.io/pics/',
    repo: 'https://github.com/maaaaciej/pics', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mimeleken.png',
    title: 'Mimeleken',
    info: 'Mimeleken, the norwegian version of charades, is a fun game for pretty much anyone. I made this app using vanilla JS.',
    info2: 'It was developed with mobile users in mind, as a game like this is best suited on a phone.',
    url: 'https://maaaaciej.github.io/mimeleken/',
    repo: 'https://github.com/maaaaciej/mimeleken', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'color.png',
    title: 'RGB Value Guessing Game',
    info: 'A vanilla JS color guessing game. You get a RGB value on top, and have to click the correctly colored div to win.',
    info2: 'I use this website often when working with projects, to get some inspiration on new colors, as well as getting some training in guessing RGB values.',
    url: 'https://maaaaciej.github.io/color-picker/',
    repo: 'https://github.com/maaaaciej/color-picker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you want to get in touch, talk to me about a project collaboration or just say hi, click the button down below, or send an email to ostromaciej@gmail.com!',
  btn: "Let's talk!",
  email: 'ostromaciej@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maciej-ostrowski-038b53138/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/maaaaciej',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
