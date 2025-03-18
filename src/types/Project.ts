export interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  links: {
    source: string;
    demo: string;
  };
}
