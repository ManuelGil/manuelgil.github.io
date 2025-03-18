import type { Project } from '../types/Project';

const CACHE_KEY = 'projects_cache';

const isBrowser = typeof window !== 'undefined';

export const ProjectCache = {
  getProjects(): Project[] | null {
    if (!isBrowser) return null;
    const cached = sessionStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  },

  setProjects(projects: Project[]): void {
    if (!isBrowser) return;
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(projects));
  },

  clearCache(): void {
    if (!isBrowser) return;
    sessionStorage.removeItem(CACHE_KEY);
  },
};
