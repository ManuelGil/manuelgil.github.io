import type { AxiosInstance } from 'axios';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import type { Project } from '../types/Project';

// Create axios instance with configuration
const api: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
});

// Configure mock adapter
const mock = new MockAdapter(api);

// Mock data
const mockProjects: Project[] = [
  {
    title: 'Reset Windows Update Tool',
    description:
      'A simple and effective tool to reset the Windows Update components in your Windows operating system. Fix Windows Update issues with a single click.',
    category: 'Windows Tools',
    tags: ['Windows', 'Batch Script', 'C++'],
    links: {
      source: 'https://github.com/ManuelGil/Reset-Windows-Update-Tool',
      demo: 'https://wureset.com/',
    },
  },
  {
    title: 'Auto Barrel for VSCode',
    description:
      'A powerful tool for automating the creation of TypeScript barrel files in your projects. Boost your productivity and streamline your development workflow.',
    category: 'Development Tools',
    tags: ['VSCode Extension', 'TypeScript'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-auto-barrel',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-auto-barrel',
    },
  },
  {
    title: 'JSON Flow',
    description:
      'Open-source tool for Visual Studio Code that helps you visualize and understand complex JSON structures. Improve your JSON editing experience with this powerful extension.',
    category: 'Development Tools',
    tags: ['VSCode Extension', 'TypeScript', 'React', 'Tailwind CSS'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-json-flow',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-json-flow',
    },
  },
  {
    title: 'Mustache - Syntax highlighting, snippets, and more',
    description:
      'A powerful extension for Visual Studio Code that provides syntax highlighting, snippets, and other features for Mustache templates.',
    category: 'Development Tools',
    tags: ['VSCode Extension', 'JavaScript'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-mustache-snippets',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets',
    },
  },
  {
    title: 'Angular File Generator',
    description:
      'Create files for your Angular projects with a single command. Boost your productivity and streamline your development workflow.',
    category: 'Development Tools',
    tags: ['VSCode Extension', 'TypeScript'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-angular-generator',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator',
    },
  },
  {
    title: 'NestJS File Generator',
    description:
      'Create files for your NestJS projects with a single command. Boost your productivity and streamline your development workflow.',
    category: 'Development Tools',
    tags: ['VSCode Extension', 'TypeScript'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-nestjs-generator',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator',
    },
  },
  {
    title: 'Astro File Generator',
    description:
      'Create files for your Astro projects with a single command. Boost your productivity and streamline your development workflow.',
    category: 'Development Tools',
    tags: ['VSCode Extension', 'TypeScript', 'Alpine.js', 'Tailwind CSS'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-astro-generator',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-astro-generator',
    },
  },
  {
    title: 'T3 Stack / NextJS / ReactJS File Generator',
    description:
      'Create files for your Next.js and React.js projects with a single command. Boost your productivity and streamline your development workflow.',
    category: 'Development Tools',
    tags: ['VSCode Extension', 'TypeScript'],
    links: {
      source: 'https://github.com/ManuelGil/vscode-nextjs-generator',
      demo: 'https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator',
    },
  },
];

// Configure mock endpoints
mock.onGet('/projects').reply(200, mockProjects);

export class ProjectService {
  private api: AxiosInstance;

  constructor() {
    this.api = api;
  }

  async getProjects(): Promise<Project[]> {
    try {
      const response = await this.api.get<Project[]>('/projects');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      throw new Error('Failed to fetch projects');
    }
  }
}
