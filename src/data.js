
import {SiOpenaigym} from 'react-icons/si';

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
      name: "Members",
      path: '/members'
    },
    {
        name: "Portifolio",
        path: '/portifolio'
    },
    {
        name: "Contact",
        path: '/contact'
    },
]



const office = require('./images/gallery3.jpg')
const supplies = require('./images/generalsupplies.jpg')
const food = require('./images/gallery6.jpg')
const moringa = require('./images/gallery2.jpg')
const janitorial = require('./images/cleaning.jpg')
const pest = require('./images/pest.jpg')


export const services = [
  {
    id: 1,
    title: "Office Services",
    image: office,
    info: "We provide variety office services for your businesses such as cleaning, organization and more.",
    path: "/services/111",
  },
  {
    id: 2,
    title: "Office Equipments & Stationary Supplies",
    image: supplies,
    info: "Our team provides a wide range of Office Equipment and Stationery Supplies to fit any need you may have.",
    path: "/services/222",
  },
  {
    id: 3,
    title: "Food & cereals supply",
    image: food,
    info: "Our chefs can prepare a wide variety of dishes to suit any office needs",
    path: "/services/333",
  },
  {
    id: 4,

    title: "Moringa Products",
    image: moringa,
    info: "Enjoy the health benefits of Moringa leaves in our organic and non-GMO blend.",
    path: "/services/444",
  },
  {
    id: 5,
    title: "Janitorial",
    image: janitorial,
    info: "Our professional Janitorial service includes regular cleaning of offices, kitchens, bathrooms and restrooms.",
    path: "/services/111",
  },
  {
    id: 5,
    title: "Fumigation & Pest Control",
    image: pest,
    info: "Get rid of unwanted pests with our professional fumigation service.",
    path: "/services/111",
  },
]

export const about = [
  {
    id: 1,
    icon: <SiOpenaigym/>,
    title: "Mission",
    desc: "To provide quality services that are tailored to meet your specific requirements. Our team is committed to delivering exceptional customer satisfaction through providing reliable and efficient solutions."
    
  },
  {
    id: 2,
    icon: <SiOpenaigym/>,
    title: "Vision",
    desc: "Vision is the future. We aim to be at the forefront of innovative solutions for businesses."
  },
  {
    id: 3,
    icon: <SiOpenaigym/>,
    title: "Why Us",
    desc: "We are passionate about providing quality services that exceed your expectations."
  },
  {
    id: 4,
    icon: <SiOpenaigym/>,
    title: "Values",
    desc: `We are committed to delivering exceptional customer service and maintaining a high standard in all aspects of our operations
            We value and uphold the following principles:
          - Professionalism
          - Reliability
          - Customer Satisfaction
          - Communication`
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote: "Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website",
    job: "Student",
    avatar: require("./images/man.png")
  },
  {
    id: 2,
    name: "Simon Ayi",
    quote: "Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website",
    job: "Student",
    avatar: require("./images/dama.png")
  },
  {
    id: 3,
    name: "Kip Ayi",
    quote: "Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website",
    job: "Student",
    avatar: require("./images/man.png")
  },
  {
    id: 4,
    name: "Diana Ayi",
    quote: "Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website",
    job: "Student",
    avatar: require("./images/man.png")
  },
  {
    id: 5,
    name: "Diana Ayi",
    quote: "Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website",
    job: "Student",
    avatar: require("./images/man.png")
  },

]

const Member1 = require('./images/member1.png')
const Member2 = require('./images/member2.jpg')
const Member3 = require('./images/member3.jpg')
const Member4 = require('./images/member4.jpg')
const Member5 = require('./images/member5.jpg')
const Member6 = require('./images/member6.jpg')

export const members = [
  {
    id:"1",
    image:Member1,
    name:'Christine Dama Mukare',
    title: 'Founder',
    socials: ['https://instagram.com/', 'https://twitter.com', 'https://facebook.com', 'https://linkedin.com/']
  },
  {
    id:"2",
  image:Member2,
  name:'Hillary Oluoch',
  title: 'Co-Founder',
  socials: ['https://instagram.com/', 'https://twitter.com', 'https://facebook.com', 'https://linkedin.com/']
  },
  {
    id:"3",
  image:Member3,
  name:'Michael Musawa',
  title: 'Technical Officer',
  socials: ['https://instagram.com/', 'https://twitter.com', 'https://facebook.com', 'https://linkedin.com/']
  },
  {
    id:"4",
  image:Member4,
  name:'John Doe',
  title: 'Founder',
  socials: ['https://instagram.com/', 'https://twitter.com', 'https://facebook.com', 'https://linkedin.com/']
  },
  {
    id:"5",
  image:Member5,
  name:'Mirriam Mokeira',
  title: 'Cleaner',
  socials: ['https://instagram.com/', 'https://twitter.com', 'https://facebook.com', 'https://linkedin.com/']
  },
  {
    id:"6",
  image:Member6,
  name:'John Doe',
  title: 'Founder',
  socials: ['https://instagram.com/', 'https://twitter.com', 'https://facebook.com', 'https://linkedin.com/']
  },
]

export const categories = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Office Services",
    info: "We deal with moringa oil manufactory",
    image: require('./images/janitorial.jpg'),
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Supplies",
    info: "We deal with moringa oil manufactory",
    image: require('./images/janitorial.jpg'),
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Food",
    info: "We deal with moringa oil manufactory",
    image: require('./images/janitorial.jpg'),
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Moringa",
    info: "We deal with moringa oil manufactory",
    image: require('./images/janitorial.jpg'),
  },
]