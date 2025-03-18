import type { Project } from '../types/Project';
import { compress, decompress } from 'lz-string';

interface CacheData {
  data: Project[];
  timestamp: number;
}

export class ProjectCache {
  private static readonly CACHE_KEY = 'projects_cache';
  private static readonly CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

  static getProjects(): Project[] | null {
    try {
      const compressed = localStorage.getItem(this.CACHE_KEY);
      if (!compressed) return null;

      const cache: CacheData = JSON.parse(decompress(compressed) || '');

      // Check if cache has expired
      if (Date.now() - cache.timestamp > this.CACHE_DURATION) {
        this.clearCache();
        return null;
      }

      return cache.data;
    } catch (error) {
      console.warn('Error reading from cache:', error);
      this.clearCache();
      return null;
    }
  }

  static setProjects(projects: Project[]): void {
    try {
      const cacheData: CacheData = {
        data: projects,
        timestamp: Date.now(),
      };

      const compressed = compress(JSON.stringify(cacheData));
      localStorage.setItem(this.CACHE_KEY, compressed);
    } catch (error) {
      console.warn('Error writing to cache:', error);
    }
  }

  static clearCache(): void {
    try {
      localStorage.removeItem(this.CACHE_KEY);
    } catch (error) {
      console.warn('Error clearing cache:', error);
    }
  }
}
