import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  reactjs,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  pegpark,
  coverhunt,
  soon,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'AI Developer',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'AI Tester',
    company_name: 'Outlier',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Apr 2025 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Pegasus Parking',
    description: 'An app that shows you the closest availbale parking on UCF based on your destination.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: pegpark,
    repo: 'https://github.com/Jargon19/pegasus-parking',
    demo: 'https://drive.google.com/file/d/1vXKBOCBq1IBONN2DMke0NKK5voBxYzjZ/view?usp=drive_link',
  },
  {
    id: 'project-2',
    name: 'Event Manager',
    description:
      'An event manager app that allows users to set up university events.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: soon,
    repo: 'https://github.com/Jargon19/DB-Project',
    demo: 'https://github.com/Jargon19/DB-Project',
  },
  {
    id: 'project-3',
    name: 'Babel (Soon)',
    description: 'React application using open-source AI to translate text and documents.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: soon,
    repo: 'https://github.com/Jargon19',
    demo: 'https://github.com/Jargon19',
  },
];

export { services, technologies, experiences, projects };
