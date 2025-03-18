import type { Project } from './Project';

export interface API {
  getProjects(): Promise<Project[]>;
}
