export type SkillCategory = 'language' | 'framework' | 'ui' | 'tool' | 'ai';

export interface Skill {
  label: string;
  category: SkillCategory;
  featured: boolean;
}

export const SKILLS: Skill[] = [
  // Languages
  { label: 'TypeScript', category: 'language', featured: true },
  { label: 'JavaScript', category: 'language', featured: true },
  { label: 'HTML', category: 'language', featured: false },
  { label: 'CSS', category: 'language', featured: false },
  // Frameworks & Libraries
  { label: 'React', category: 'framework', featured: true },
  { label: 'Lit', category: 'framework', featured: true },
  { label: 'Web Components', category: 'framework', featured: true },
  { label: 'Node.js', category: 'framework', featured: false },
  { label: 'MobX', category: 'framework', featured: false },
  // UI & Design Systems
  { label: 'Tailwind CSS', category: 'ui', featured: true },
  { label: 'shadcn/ui', category: 'ui', featured: false },
  { label: 'Carbon Design System', category: 'ui', featured: false },
  { label: 'Mantine', category: 'ui', featured: false },
  // Tools & Platforms
  { label: 'Vite', category: 'tool', featured: false },
  { label: 'Webpack', category: 'tool', featured: false },
  { label: 'Git', category: 'tool', featured: false },
  { label: 'Figma', category: 'tool', featured: false },
  { label: 'Storybook', category: 'tool', featured: false },
  // AI Tools
  { label: 'Claude API', category: 'ai', featured: true },
  { label: 'Prompt Engineering', category: 'ai', featured: true },
  { label: 'Model Context Protocol', category: 'ai', featured: true },
];

export const SKILL_GROUPS: { label: string; category: SkillCategory }[] = [
  { label: 'Languages', category: 'language' },
  { label: 'Frameworks & Libraries', category: 'framework' },
  { label: 'UI & Design Systems', category: 'ui' },
  { label: 'Tools & Platforms', category: 'tool' },
  { label: 'AI Tools', category: 'ai' },
];
