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
    { nameOfInstitution: "Abc", course: "Abc", duration: "2010-2012" },
    { nameOfInstitution: "Abcd", course: "Abc", duration: "2010-2012" },
    { nameOfInstitution: "Abcde", course: "Abc", duration: "2010-2012" },
  ],
  "Work History": [
    {
      nameOfCompany: "Abc",
      position: "Abc",
      duration: "10-20",
      summary: ["A", "B"],
    },
    {
      nameOfCompany: "Abcd",
      position: "Abc",
      duration: "10-20",
      summary: ["A", "B"],
    },
  ],

  "Programming Skills": [
    { nameOfSkill: "Abc", value: "50" },
    { nameOfSkill: "Abc", value: "60" },
    { nameOfSkill: "Abc", value: "70" },
    { nameOfSkill: "Abc", value: "80" },
    { nameOfSkill: "Abc", value: "90" },
    { nameOfSkill: "Abc", value: "80" },
    { nameOfSkill: "Abc", value: "70" },
  ],

  Projects: [
    {
      nameOfProject: "Abc",
      duration: "Abc",
      technologyUsed: "Abc",
      summary: ["A", "B"],
    },
    {
      nameOfProject: "Abcd",
      duration: "Abc",
      technologyUsed: "Abc",
      summary: ["A", "B"],
    },
    {
      nameOfProject: "Abcde",
      duration: "Abc",
      technologyUsed: "Abc",
      summary: ["A", "B"],
    },
    {
      nameOfProject: "Abcdef",
      duration: "Abc",
      technologyUsed: "Abc",
      summary: ["A", "B"],
    },
  ],

  Interests: [{ nameOfInterest: "Abc", briefIntro: "Abc" }],
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
