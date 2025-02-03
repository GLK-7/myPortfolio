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
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark', type: 'analytcs' },
  { name: 'Matplotlib', icon: 'devicon-matplotlib-plain', type: 'analytcs' },
  { name: 'Pandas', icon: 'devicon-pandas-plain', type: 'analytcs' },
  { name: 'Seaborn', icon: 'fa-solid fa-chart-simple', type: 'analytcs'},
  { name: 'SQL', icon: 'fa-solid fa-database', type: 'analytcs'},

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
  { name: 'React.js', icon: 'fab fa-react', type: 'frontend' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original', type: 'frontend' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', type: 'webskills' },
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
