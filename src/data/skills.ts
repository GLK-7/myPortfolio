// Definindo interfaces para as habilidades
interface Skill {
  name: string;
  icon: string;
  type: string;
}

// Array de habilidades analíticas
const analytcskills: Skill[] = [
  { name: 'Python', icon: 'fa-brands fa-python', type: 'analytcs' },
  {
    name: 'Power BI',
    icon: 'ms-Icon ms-Icon--PowerBILogo',
    type: 'analytcs',
  },
  { name: 'Excel', icon: 'ms-Icon ms-Icon--ExcelLogo', type: 'analytcs' },
];

// Array de habilidades web
const webskills: Skill[] = [
  { name: 'Node.js', icon: 'fab fa-node-js', type: 'webskills' },
  { name: 'Express', icon: 'devicon-express-original', type: 'webskills' },
  {
    name: 'Handlebars',
    icon: 'devicon-handlebars-original',
    type: 'webskills',
  },
  { name: 'React', icon: 'fab fa-react', type: 'frontend' },
  { name: 'Typescript', icon: 'devicon-typescript-plain', type: 'webskills' },
  { name: 'MySQL', icon: 'devicon-mysql-original', type: 'webskills' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain', type: 'webskills' },
  { name: 'Git', icon: 'fab fa-git-alt', type: 'webskills' },
];

// Array de habilidades de low-code
const lowCodeSkills: Skill[] = [
  {
    name: 'Power Apps',
    icon: 'ms-Icon ms-Icon--PowerApps',
    type: 'lowcodeskills',
  },
  {
    name: 'Power Automate',
    icon: 'ms-Icon ms-Icon--MicrosoftFlowLogo',
    type: 'lowcodeskills',
  },
  {
    name: 'SharePoint',
    icon: 'ms-Icon ms-Icon--SharepointLogo',
    type: 'lowcodeskills',
  },
];

// Exportando os arrays
export { analytcskills, webskills, lowCodeSkills };
