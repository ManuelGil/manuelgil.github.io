import type { Project } from '../types/Project';
import { defaultProjects } from '../data/defaultProjects';
import { ProjectCache } from './projectCache';
import { ProjectService } from './ProjectService';

export class ProjectsManager {
  private projectService: ProjectService;

  constructor(projectService?: ProjectService) {
    this.projectService = projectService ?? new ProjectService();
  }

  async getProjectsList(): Promise<Project[]> {
    try {
      // Check cache first
      const cachedProjects = ProjectCache.getProjects();
      if (cachedProjects) {
        return cachedProjects;
      }

      // If no cache, fetch from API using the service
      const projects = await this.projectService.getProjects();

      // Store in cache
      ProjectCache.setProjects(projects);

      return projects;
    } catch (error) {
      console.error('Error loading projects:', error);
      return defaultProjects;
    }
  }
}
