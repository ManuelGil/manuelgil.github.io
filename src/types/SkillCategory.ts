// Centralized type for skill categories
export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: string;
}
