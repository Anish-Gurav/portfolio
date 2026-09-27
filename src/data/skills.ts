import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'DevOps & CI/CD',
    description: 'Building and automating deployment pipelines end-to-end',
    gridSpan: 'md:col-span-2 md:row-span-2',
    skills: [
      { name: 'Docker', icon: '🐳', category: 'devops' },
      { name: 'Kubernetes', icon: '☸️', category: 'devops' },
      { name: 'Jenkins', icon: '🔧', category: 'devops' },
      { name: 'GitHub Actions', icon: '⚡', category: 'devops' },
      { name: 'Terraform', icon: '🏗️', category: 'devops' },
      { name: 'Ansible', icon: '📜', category: 'devops' },
      { name: 'ArgoCD', icon: '🔄', category: 'devops' },
      { name: 'Helm', icon: '⎈', category: 'devops' },
    ],
  },
  {
    title: 'Cloud Platforms',
    description: 'Deploying and managing cloud infrastructure',
    gridSpan: 'md:col-span-1 md:row-span-1',
    skills: [
      { name: 'AWS', icon: '☁️', category: 'cloud' },
      { name: 'GCP', icon: '🌐', category: 'cloud' },
      { name: 'Azure', icon: '🔷', category: 'cloud' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Building intelligent systems and ML pipelines',
    gridSpan: 'md:col-span-1 md:row-span-1',
    skills: [
      { name: 'Python', icon: '🐍', category: 'ai' },
      { name: 'TensorFlow', icon: '🧠', category: 'ai' },
      { name: 'PyTorch', icon: '🔥', category: 'ai' },
      { name: 'scikit-learn', icon: '📊', category: 'ai' },
      { name: 'OpenCV', icon: '👁️', category: 'ai' },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Languages for systems, scripting, and applications',
    gridSpan: 'md:col-span-1 md:row-span-1',
    skills: [
      { name: 'Python', icon: '🐍', category: 'languages' },
      { name: 'Go', icon: '🐹', category: 'languages' },
      { name: 'TypeScript', icon: '💠', category: 'languages' },
      { name: 'Bash', icon: '💻', category: 'languages' },
      { name: 'Java', icon: '☕', category: 'languages' },
    ],
  },
  {
    title: 'Monitoring & Observability',
    description: 'Full-stack observability and performance monitoring',
    gridSpan: 'md:col-span-2 md:row-span-1',
    skills: [
      { name: 'Prometheus', icon: '🔥', category: 'devops' },
      { name: 'Grafana', icon: '📈', category: 'devops' },
      { name: 'ELK Stack', icon: '🔍', category: 'devops' },
      { name: 'Datadog', icon: '🐕', category: 'devops' },
      { name: 'Jaeger', icon: '🕵️', category: 'devops' },
    ],
  },
  {
    title: 'Operating Systems & Tools',
    description: 'Infrastructure tooling and system administration',
    gridSpan: 'md:col-span-1 md:row-span-1',
    skills: [
      { name: 'Linux', icon: '🐧', category: 'tools' },
      { name: 'Git', icon: '🔀', category: 'tools' },
      { name: 'Nginx', icon: '🌐', category: 'tools' },
      { name: 'Redis', icon: '🗄️', category: 'tools' },
      { name: 'PostgreSQL', icon: '🐘', category: 'tools' },
    ],
  },
];
