import type { Project } from '../types/Project';

export const defaultProjects: Project[] = [
  // VSCode Extensions
  {
    title: 'JSON Flow',
    description:
      'Visualize and explore complex JSON structures interactively in VSCode. Perfect for API and data developers.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'JSON', 'Visualization', 'Productivity', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-json-flow',
      demo: 'https://json-flow.com/',
    },
  },
  {
    title: 'Auto Barrel',
    description:
      'Automate the creation of TypeScript barrel files to streamline large codebases and boost productivity.',
    category: 'VSCode Extensions',
    tags: [
      'VSCode',
      'TypeScript',
      'Productivity',
      'Automation',
      'Developer Tool',
    ],
    links: {
      source: 'https://github.com/ManuelGil/vscode-auto-barrel',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-auto-barrel',
    },
  },
  {
    title: 'Astro File Generator',
    description:
      'Generate files and components for Astro projects with a single command in VSCode.',
    category: 'VSCode Extensions',
    tags: ['Astro', 'VSCode', 'Frontend', 'Productivity', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-astro-generator',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-astro-generator',
    },
  },
  {
    title: 'T3 Stack / Next.js / React.js File Generator',
    description:
      'Quickly scaffold files for Next.js and React.js projects. Enforce best practices and save time.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'Next.js', 'React.js', 'TypeScript', 'Frontend'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-nextjs-generator',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator',
    },
  },
  {
    title: 'NestJS File Generator',
    description:
      'Boost productivity in NestJS projects by generating files and modules with one command.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'NestJS', 'TypeScript', 'Backend', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-nestjs-generator',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator',
    },
  },
  {
    title: 'VueJS File Generator',
    description:
      'Generate files and components for VueJS projects in seconds in VSCode.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'Vue.js', 'TypeScript', 'Frontend', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-vuejs-generator',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-vuejs-generator',
    },
  },
  {
    title: 'Angular File Generator',
    description:
      'Generate Angular files and components with a single command in VSCode.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'Angular', 'TypeScript', 'Frontend', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-angular-generator',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator',
    },
  },
  {
    title: 'NestJS Snippets',
    description:
      'Ready-to-use code snippets for NestJS in VSCode. Save time and reduce boilerplate.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'NestJS', 'TypeScript', 'Snippets', 'Backend'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-nestjs-snippets',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-snippets-extension',
    },
  },
  {
    title: 'Mustache Templates - Syntax Highlighting, Snippets & Autocomplete',
    description:
      'Syntax highlighting, snippets, and autocomplete for Mustache templates in VSCode.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'Mustache', 'Templates', 'Snippets', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-mustache-snippets',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets',
    },
  },
  {
    title: 'NestJS Swagger Snippets',
    description:
      'Code snippets for NestJS Swagger API documentation. Generate OpenAPI specs effortlessly.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'NestJS', 'Swagger', 'OpenAPI', 'Backend'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-nestjs-swagger-snippets',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-swagger-snippets',
    },
  },
  {
    title: 'NestJS MikroORM Snippets',
    description:
      'Snippets for MikroORM and NestJS integration. Streamline database operations in TypeScript.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'NestJS', 'MikroORM', 'TypeScript', 'Database'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-nestjs-mikroorm-snippets',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-mikroorm-snippets',
    },
  },
  {
    title: 'CodeIgniter 4 Snippets',
    description: 'Code snippets for rapid CodeIgniter 4 development in VSCode.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'CodeIgniter', 'PHP', 'Snippets', 'Backend'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-codeigniter4-snippets',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-snippets',
    },
  },
  {
    title: 'CodeIgniter 4 Spark',
    description:
      'Run CodeIgniter 4 Spark commands directly from VSCode. Boost your PHP development workflow.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'CodeIgniter', 'PHP', 'CLI', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-codeigniter4-spark',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-spark',
    },
  },
  {
    title: 'KumbiaPHP Commands',
    description:
      'KumbiaPHP CLI integration for VSCode. Simplify PHP project management.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'KumbiaPHP', 'PHP', 'CLI', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-kumbiaphp-commands',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-kumbiaphp-commands',
    },
  },
  {
    title: 'KumbiaPHP Snippets',
    description: 'Code snippets for KumbiaPHP framework development in VSCode.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'KumbiaPHP', 'PHP', 'Snippets', 'Backend'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-kumbiaphp-snippets',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-kumbiaphp-snippets',
    },
  },
  {
    title: 'Moodle Pack',
    description:
      'Comprehensive Moodle development tooling for VSCode with snippets and file creation.',
    category: 'VSCode Extensions',
    tags: ['VSCode', 'Moodle', 'PHP', 'Education', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-moodle-snippets',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets',
    },
  },

  // NPM Packages
  {
    title: 'nspin',
    description:
      'Lightweight and efficient Node.js spinner package using native features.',
    category: 'NPM Packages',
    tags: ['Node.js', 'NPM', 'CLI', 'Terminal', 'UX'],
    links: {
      source: 'https://github.com/ManuelGil/nspin',
      demo: 'https://www.npmjs.com/package/nspin',
    },
  },
  {
    title: 'nspin-bun',
    description: 'Spinner package optimized for Bun (ESM-only).',
    category: 'NPM Packages',
    tags: ['Bun', 'ESM', 'CLI', 'Terminal', 'UX'],
    links: {
      source: 'https://github.com/ManuelGil/nspin-bun',
      demo: 'https://www.npmjs.com/package/nspin-bun',
    },
  },
  {
    title: 'nspin-esm',
    description:
      'Spinner package optimized for ESM (ECMAScript Modules) environments.',
    category: 'NPM Packages',
    tags: ['ESM', 'JavaScript', 'CLI', 'Terminal', 'UX'],
    links: {
      source: 'https://github.com/ManuelGil/nspin-esm',
      demo: 'https://www.npmjs.com/package/nspin-esm',
    },
  },
  {
    title: 'vscplugit',
    description:
      'TypeScript CLI tool for installing/uninstalling VSCode extensions from NPM.',
    category: 'NPM Packages',
    tags: ['TypeScript', 'VSCode', 'CLI', 'Developer Tool', 'Automation'],
    links: {
      source: 'https://github.com/ManuelGil/vscplugit',
      demo: 'https://www.npmjs.com/package/vscplugit',
    },
  },

  // Windows Utilities
  {
    title: 'Reset Windows Update Tool',
    description:
      'Trusted tool to fix Windows Update issues with one click. Used by IT professionals worldwide.',
    category: 'Windows Utilities',
    tags: ['Windows', 'SysAdmin', 'Troubleshooting', 'Desktop', 'Utility'],
    links: {
      source: 'https://github.com/ManuelGil/Reset-Windows-Update-Tool',
      demo: 'https://wureset.com/',
    },
  },
  {
    title: 'Reset Windows Update Tool - Lite',
    description:
      'Lightweight script to restore Windows Update components with minimal system impact.',
    category: 'Windows Utilities',
    tags: ['Windows', 'PowerShell', 'Script', 'SysAdmin', 'Utility'],
    links: {
      source: 'https://github.com/wureset-tools/script-wureset-lite',
      demo: 'https://wureset.com/',
    },
  },
  {
    title: 'Reset WSUS Client ID',
    description:
      'Script to reset the WSUS client ID on Windows machines for update troubleshooting.',
    category: 'Windows Utilities',
    tags: ['Windows', 'WSUS', 'PowerShell', 'Enterprise', 'Utility'],
    links: {
      source: 'https://github.com/wureset-tools/reset-wsus-client-id',
      demo: 'https://wureset.com/',
    },
  },
  {
    title: 'Uninstall Office 2016',
    description:
      'Batch script to fully uninstall Office 2016/365 or earlier. Useful for sysadmins.',
    category: 'Windows Utilities',
    tags: ['Windows', 'Office', 'Batch', 'Uninstaller', 'Utility'],
    links: {
      source: 'https://github.com/ManuelGil/uninstall-office-2016',
      demo: 'https://wureset.com/',
    },
  },

  // Browser Extensions
  {
    title: 'One-Click VSIX',
    description:
      'Chrome extension to instantly download VSIX from the VSCode Marketplace.',
    category: 'Browser Extensions',
    tags: ['Chrome', 'VSCode', 'Extension', 'Productivity', 'Developer Tool'],
    links: {
      source: 'https://github.com/ManuelGil/chrome-one-click-vsix',
      demo: 'https://chromewebstore.google.com/detail/imojppdbcecfpeafjagncfplelddhigc',
    },
  },

  // PHP Projects & Boilerplates
  {
    title: 'Alternate Admin for Moodle',
    description:
      'Custom admin interface wrapper for Moodle to streamline administrative workflows.',
    category: 'PHP Projects',
    tags: ['PHP', 'Moodle', 'Admin', 'Education', 'UX'],
    links: {
      source: 'https://github.com/ManuelGil/moodle-alternate-admin',
      demo: 'https://packagist.org/packages/manuelgil/moodle-alternate-admin',
    },
  },
  {
    title: 'Codeigniter 4 with Blade Template Engine',
    description:
      'Boilerplate for starting CodeIgniter 4 projects with Blade templating (BladeOne).',
    category: 'PHP Projects',
    tags: ['PHP', 'CodeIgniter', 'Blade', 'Templates', 'Boilerplate'],
    links: {
      source: 'https://github.com/ManuelGil/ci4-blade',
      demo: 'https://packagist.org/packages/manuelgil/ci4-blade',
    },
  },
  {
    title: 'Codeigniter 4 with Mustache Template Engine',
    description:
      'Boilerplate for CodeIgniter 4 with Mustache template integration.',
    category: 'PHP Projects',
    tags: ['PHP', 'CodeIgniter', 'Mustache', 'Templates', 'Boilerplate'],
    links: {
      source: 'https://github.com/ManuelGil/ci4-mustache',
      demo: 'https://packagist.org/packages/manuelgil/ci4-mustache',
    },
  },
  {
    title: 'Codeigniter 4 with Twig Template Engine',
    description: 'Boilerplate for CodeIgniter 4 projects with Twig templates.',
    category: 'PHP Projects',
    tags: ['PHP', 'CodeIgniter', 'Twig', 'Templates', 'Boilerplate'],
    links: {
      source: 'https://github.com/ManuelGil/ci4-twig',
      demo: 'https://packagist.org/packages/manuelgil/ci4-twig',
    },
  },
  {
    title: 'Project skeleton in PHP',
    description:
      'Minimal PHP project skeleton with organized structure for fast project bootstrap.',
    category: 'PHP Projects',
    tags: ['PHP', 'Boilerplate', 'Starter', 'Structure', 'Development'],
    links: {
      source: 'https://github.com/ManuelGil/project-skeleton',
      demo: 'https://packagist.org/packages/manuelgil/project-skeleton',
    },
  },
];
