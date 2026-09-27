import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'InfraBot',
    description:
      'An AI-powered infrastructure monitoring platform that uses deep learning models to detect anomalies in server metrics, predict potential outages, and trigger automated remediation workflows. Integrates with Prometheus for metric collection and Grafana for real-time visualization dashboards.',
    tags: ['Python', 'TensorFlow', 'Prometheus', 'Grafana', 'Docker', 'FastAPI'],
    github: '#',
    live: '#',
    image: '/projects/placeholder.png',
    featured: true,
    comingSoon: true,
  },
  {
    title: 'PipelineForge',
    description:
      'A CLI tool that generates production-ready CI/CD pipeline configurations from simple declarative specs. Supports GitHub Actions, GitLab CI, and Jenkins with intelligent YAML templating, automatic dependency detection, and built-in security scanning stages for containerized deployments.',
    tags: ['Go', 'GitHub Actions', 'Docker', 'Kubernetes', 'YAML', 'Cobra CLI'],
    github: '#',
    live: '#',
    image: '/projects/placeholder.png',
    featured: true,
    comingSoon: true,
  },
  {
    title: 'CloudScope',
    description:
      'A unified multi-cloud resource dashboard that aggregates infrastructure data from AWS, GCP, and Azure into a single pane of glass. Features cost analysis, resource utilization heatmaps, and Terraform state visualization to help teams optimize cloud spend and detect resource drift.',
    tags: ['React', 'AWS SDK', 'Terraform', 'Node.js', 'PostgreSQL', 'Chart.js'],
    github: '#',
    live: '#',
    image: '/projects/placeholder.png',
    featured: true,
    comingSoon: true,
  },
  {
    title: 'LogSentry',
    description:
      'An intelligent log analysis pipeline that ingests logs from distributed systems via Kafka, processes them through an ML classification engine, and surfaces actionable alerts with root cause suggestions. Reduces mean-time-to-detection by correlating patterns across microservice boundaries.',
    tags: ['Python', 'ELK Stack', 'scikit-learn', 'Kafka', 'Docker', 'Redis'],
    github: '#',
    live: '#',
    image: '/projects/placeholder.png',
    featured: true,
    comingSoon: true,
  },
];
