import axios from 'axios';
import type { API } from '../types/Api';
import type { Project } from '../types/Project';

export class ProjectAPI implements API {
  private api;

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.PUBLIC_API_URL ?? 'https://api.example.com',
    });
  }

  async getProjects(): Promise<Project[]> {
    try {
      const response = await this.api.get('/projects');
      return response.data as Project[];
    } catch {
      throw new Error('Failed to fetch projects');
    }
  }
}
