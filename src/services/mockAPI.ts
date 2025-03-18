import type { API } from '../types/Api';
import { defaultProjects } from '../data/defaultProjects';
import type { Project } from '../types/Project';

export class MockProjectAPI implements API {
  async getProjects(): Promise<Project[]> {
    // Simular un delay de red
    await new Promise((resolve) => setTimeout(resolve, 500));
    return defaultProjects;
  }
}
