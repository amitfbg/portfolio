import EducationIcon from "../../assets/Icons/education-icon.png";
import WorkIcon from "../../assets/Icons/work-icon.png";
import ProjectIcon from "../../assets/Icons/projects-icon.png";
import SkillIcon from "../../assets/Icons/skills-icon.png";
import InterestIcon from "../../assets/Icons/interests-icon.png";

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
