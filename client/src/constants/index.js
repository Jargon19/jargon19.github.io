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
  docker,
  postgresql,
  pegpark,
  coverhunt,
  soon,
  eventmanager,
  francetravel,
  EPLimage,
  EPLimage2,
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
    name: 'HTML',
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
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'AI Tester (Freelance)',
    company_name: 'Outlier',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Apr 2025 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Event Manager',
    description:
      'An event manager app used to set up university events and create Registered Student Organizations (RSO).',
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
    image: eventmanager,
    repo: 'https://github.com/seanprevity/Event-Manager',
    demo: 'https://github.com/seanprevity/Event-Manager',
  },
  {
    id: 'project-2',
    name: 'Pegasus Parking',
    description: 'An app that shows you the closest parking location on UCF based on your destination and permits.',
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
    repo: 'https://github.com/seanprevity/pegasus-parking',
    demo: 'https://drive.google.com/file/d/1vXKBOCBq1IBONN2DMke0NKK5voBxYzjZ/view?usp=drive_link',
  },
  {
    id: 'project-3',
    name: 'France Explorer',
    description: 'An app that allows you to explore every french city in French or English.',
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
    image: francetravel,
    repo: 'https://github.com/seanprevity/France-Explorer',
    demo: 'https://explorefrance.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'EPL Stats Tracker',
    description: 'A website that tracks H2H records, team stats and odds for English Premiere League matches.',
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
    image: EPLimage,
    repo: 'https://github.com/seanprevity/EPL-Stats',
    demo: 'https://drive.google.com/file/d/1DFI7yKLfF_S476kxrItgLvkpiOpfdT25/view?usp=drive_link',
  },
  {
    id: 'project-5',
    name: 'Babel (Soon)',
    description: 'React application that leverages open-source AI to translate text and documents.',
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
    repo: 'https://github.com/seanprevity',
    demo: 'https://github.com/seanprevity',
  },
];

export { services, technologies, experiences, projects };
