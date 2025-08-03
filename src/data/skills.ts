// Centralized skill categories data
import type { SkillCategory } from '../types/SkillCategory';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'desktop_windows',
    skills: [
      { name: 'HTML/CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Angular (v6, v19)' },
      { name: 'Vue.js (v2)' },
      { name: 'Bootstrap (v3, v4, v5)' },
      { name: 'Tailwind CSS' },
      { name: 'Material Design' },
      { name: 'Sass/SCSS' },
      { name: 'Responsive Design' },
    ],
  },
  {
    name: 'Backend',
    icon: 'dns',
    skills: [
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'PHP' },
      { name: 'Go' },
      { name: 'Java' },
      { name: 'REST API Design' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Firebase Realtime Database' },
      { name: 'SQLite' },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: 'integration_instructions',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Google Cloud Platform' },
      { name: 'Apache' },
      { name: 'NGINX' },
      { name: 'VS Code Extension API' },
      { name: 'SendGrid' },
      { name: 'OneSignal' },
      { name: 'PayU (PSE integration)' },
      { name: 'Cron (Linux)' },
      { name: 'LDAP & SimpleSAMLPHP' },
    ],
  },
];
