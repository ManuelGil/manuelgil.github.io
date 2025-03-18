import type { API } from '../types/Api';
import { ProjectAPI } from './api';
import { MockProjectAPI } from './mockAPI';

export class ProjectAPIFactory {
  static createAPI(): API {
    const useMock = import.meta.env.PUBLIC_USE_MOCK_API === 'true';
    return useMock ? new MockProjectAPI() : new ProjectAPI();
  }
}
