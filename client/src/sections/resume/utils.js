import EducationIcon from "../../assets/Icons/education-icon.png";
import WorkIcon from "../../assets/Icons/work-icon.png";
import ProjectIcon from "../../assets/Icons/projects-icon.png";
import SkillIcon from "../../assets/Icons/skills-icon.png";
import InterestIcon from "../../assets/Icons/interests-icon.png";
import LinkedinLogo from "../../assets/Icons/LinkedinLogo";
import InstagramLogo from "../../assets/Icons/InstagramLogo";
import GithubLogo from "../../assets/Icons/GithubLogo";
import TwitterLogo from "../../assets/Icons/TwitterLogo";
import LocationIcon from "../../assets/Icons/location-icon.png";
import CreativeIcon from "../../assets/Icons/creative-icon.png";
import ProfessionIcon from "../../assets/Icons/profession-icon.png";
import SocialMediaIcon from "../../assets/Icons/socialMedia-icon.png";
import HobbiesIcon from "../../assets/Icons/hobbies-icon.png";

export const resumeData = {
  Education: [
    {
      nameOfInstitution: "B P Poddar Institute Of Management And Technology",
      course: "Computer Science And Engineering",
      duration: "2016-2020",
    },
    {
      nameOfInstitution: "Sri Rani Saraswati Vidya Mandir",
      course: "Intermediate",
      duration: "2013-2014",
    },
    {
      nameOfInstitution: "Sri Rani Saraswati Vidya Mandir",
      course: "Matriculation",
      duration: "2011-2012",
    },
  ],
  "Work History": [
    {
      nameOfCompany: "Piktorlabs",
      position: "Software Engineer",
      duration: "12/2020-",
      summary: [
        "Working on the company's flagship ERP product CANVAS having Micro Frontend Architecture.",
        "Leading one of the Micro-app and working closely with clients for requirements.",
        "Developed multiple reusable components using React, Material-UI and Redux.",
        "Contributed to Canvas-UI-Design-System (NPM package) which has varieties of pre-built customizable graphs and charts components built using D3.js and React.",
        "Worked on the enhancement of micro-apps. I enhanced around 30% while loading the micro-apps by fixing Sonar and linting issues across the project and making code modular and readable.",
      ],
    },
    {
      nameOfCompany: "Cognizant Technology Solutions",
      position: "Intern",
      duration: "01/2020-05/2020",
      summary: [
        "During this 4-month internship, I got to learn various technologies like HTML, CSS (Basic), and JavaScript as a front end tool and Core Java concepts and MySQL in the database. Besides this, I learned Spring, Maven, Spring boot in advanced Java, and a little overview of JUnit testing. There was regular hands-on on all the topics to practice and apply. Also, I got familiar with the MVC structure.",
        "In the end, using all these acquired knowledge I made an online tailoring application where a user can register and select material, color and size for a cloth from the all available options. Later he/she can add it to the cart and order it. There is also an admin page where an admin can check and control the order status.",
      ],
    },
  ],

  "Programming Skills": [
    { nameOfSkill: "Javascript", value: "80" },
    { nameOfSkill: "React", value: "80" },
    { nameOfSkill: "HTML", value: "80" },
    { nameOfSkill: "CSS", value: "75" },
    { nameOfSkill: "Core Java", value: "90" },
    { nameOfSkill: "Data Structure", value: "70" },
    { nameOfSkill: "Git", value: "80" },
  ],

  Projects: [
    {
      nameOfProject:
        "Restaurant Meal Finder web app using React.Js, using API to fetch the data and Redux to store data",
      duration: "12/2020-01/2021",
      technologyUsed: "React, Redux ",
      summary: [
        "In this, users can search the recipes by entering ingredients.",
        "once the user hits the search button it calls the API and fetch the result and store it into the redux.",
      ],
    },
    {
      nameOfProject:
        "Person Finder API using Node.js Express & MongoDB: CRUD Rest APIs",
      duration: "12/2020-01/2021",
      technologyUsed: "Node.js, Express.js , MongoDB",
      summary: [
        "Here users can do operations like create a new person, get all the persons, get specific person, edit and delete a specific person.",
      ],
    },
    {
      nameOfProject:
        "Employee management portal(MVC structure) using Jsp, Servlet ,MySql.",
      duration: "01/2020-04/2020",
      technologyUsed: "Java , Jsp , Servlet, MySql",
      summary: [
        "Here we are managing all the employee of any company.",
        "This project is built on MVC structure where front end is made using JSP.",
      ],
    },
    {
      nameOfProject:
        "Online Tailoring portal where customer can order their choice of clothes and design and fitting.",
      duration: "06/2020-07/2020",
      technologyUsed: "Java , Jsp , SpringBoot, MySql",
      summary: [
        "This project is made from spring boot .Here the front end is JSP page and Back end is MYSQl.",
        "The project Structure is pure MVC structure.",
      ],
    },
  ],

  Interests: [
    {
      nameOfInterest: "Travelling",
      briefIntro: "Love to explore new places and learn their cultures.",
    },
    {
      nameOfInterest: "Computer Gaming",
      briefIntro: "In free time I used to play GTA V, Super Mario,CS:GO.",
    },
    {
      nameOfInterest: "Mobile Gaming",
      briefIntro: "In free time I used to play BGMI, Clash of clans.",
    },
    {
      nameOfInterest: "Chess",
      briefIntro:
        "This can improve our thinking skills and which is good for mental health.",
    },
    {
      nameOfInterest: "Cricket",
      briefIntro: "I am a die hard cricket fan.Specially MS Dhoni fan.",
    },
  ],
};

export const resumeOptions = [
  { label: "Education", icon: EducationIcon },
  { label: "Work History", icon: WorkIcon },
  { label: "Programming Skills", icon: SkillIcon },
  { label: "Projects", icon: ProjectIcon },
  { label: "Interests", icon: InterestIcon },
];

export const socialLogos = [
  { icon: <TwitterLogo />, href: "https://twitter.com/amitfbg" },
  { icon: <LinkedinLogo />, href: "https://www.linkedin.com/in/amitfbg" },
  { icon: <InstagramLogo />, href: "https://www.instagram.com/amit_._._._" },
  { icon: <GithubLogo />, href: "https://github.com/amitfbg" },
];

export const keyDetails = [
  { label: "living in Bangalore", icon: LocationIcon },
  { label: "Part time nerd / Part time creative", icon: CreativeIcon },
  { label: "Passion for the profession", icon: ProfessionIcon },
  { label: "Addicted to social media", icon: SocialMediaIcon },
  { label: "Cricket / Chess", icon: HobbiesIcon },
];
