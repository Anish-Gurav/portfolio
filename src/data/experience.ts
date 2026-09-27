import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Your University Name',
    period: '2021 — 2025',
    description:
      'Focused on cloud computing, distributed systems, and machine learning. Active contributor to open-source communities and technical clubs on campus.',
    bullets: [
      'CGPA: 8.5/10 (Placeholder — update with your actual score)',
      'Relevant coursework: Operating Systems, Computer Networks, Distributed Systems, Machine Learning, Data Structures & Algorithms',
      'Led the DevOps track in the university tech club, organizing workshops on Docker, Kubernetes, and CI/CD pipelines',
      'Published a research paper on anomaly detection in distributed system logs using LSTM networks',
    ],
    type: 'education',
  },
  {
    role: 'DevOps Engineering Intern',
    company: 'Tech Startup (Placeholder)',
    period: 'May 2024 — Jul 2024',
    description:
      'Worked on containerizing microservices and building CI/CD pipelines for a SaaS platform handling 10K+ daily active users.',
    bullets: [
      'Containerized 8 microservices using Docker and orchestrated them with Kubernetes, reducing deployment time by 60%',
      'Built GitHub Actions CI/CD pipelines with automated testing, security scanning, and blue-green deployments',
      'Implemented Prometheus + Grafana monitoring stack, creating 15+ dashboards for application and infrastructure metrics',
      'Wrote Terraform modules for AWS infrastructure provisioning, enabling reproducible staging and production environments',
    ],
    type: 'work',
  },
  {
    role: 'Machine Learning Research Intern',
    company: 'University AI Lab (Placeholder)',
    period: 'Jan 2024 — Apr 2024',
    description:
      'Contributed to a research project on applying deep learning techniques for predictive maintenance in cloud infrastructure.',
    bullets: [
      'Developed a time-series anomaly detection model using TensorFlow, achieving 94% accuracy on server metric data',
      'Processed and cleaned 2M+ log entries using Python and Pandas for training data preparation',
      'Built a FastAPI-based inference service containerized with Docker for real-time anomaly prediction',
      'Collaborated with a team of 4 researchers, presenting findings at a university-level technical symposium',
    ],
    type: 'work',
  },
];
