import { ResumeData } from '@/types';

export const resumeData: ResumeData = {
  name: 'Your Name',
  title: 'DevOps & AI Engineer',
  email: 'your.email@example.com',
  phone: '+91 98765 43210',
  location: 'Pune, Maharashtra, India',
  linkedin: 'linkedin.com/in/your-profile',
  github: 'github.com/your-username',
  objective:
    'Results-driven Computer Science graduate with hands-on experience in DevOps practices, cloud infrastructure automation, and machine learning. Seeking to leverage expertise in CI/CD pipeline design, container orchestration, and AI-driven monitoring solutions to deliver scalable, reliable, and intelligent infrastructure at a forward-thinking organization.',

  education: [
    {
      degree: 'Bachelor of Engineering in Artificial Intelligence and Data Science',
      university: 'SPPU, Pune ',
      year: '2022 — 2026',
      cgpa: '8.5/10',
      location: 'Pune, Maharashtra, India',
    },
  ],

  skills: [
    {
      category: 'DevOps & CI/CD',
      items: [
        'Docker',
        'Kubernetes',
        'Jenkins',
        'GitHub Actions',
        'Terraform',
        'Ansible',
        'ArgoCD',
        'Helm',
      ],
    },
    {
      category: 'Cloud Platforms',
      items: ['AWS (EC2, S3, Lambda, EKS, CloudFormation)', 'GCP (GKE, Cloud Run)', 'Azure (AKS, DevOps)'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
    },
    {
      category: 'Programming Languages',
      items: ['Python', 'Go', 'TypeScript', 'Bash', 'Java', 'SQL'],
    },
    {
      category: 'Monitoring & Tools',
      items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'Git', 'Linux', 'Nginx', 'Redis', 'PostgreSQL'],
    },
  ],

  projects: [
    {
      title: 'InfraBot — AI-Powered Infrastructure Monitoring',
      tech: 'Python, TensorFlow, Prometheus, Grafana, Docker, FastAPI',
      bullets: [
        'Designed an LSTM-based anomaly detection model trained on 500K+ server metric data points, achieving 94% precision in predicting infrastructure failures 15 minutes before occurrence',
        'Built a real-time monitoring pipeline integrating Prometheus metric collection with a TensorFlow Serving inference endpoint, processing 1K+ metrics per second',
        'Developed automated remediation workflows using Python and Docker API, reducing mean-time-to-recovery by 40% in simulated production environments',
      ],
    },
    {
      title: 'PipelineForge — CI/CD Pipeline Generator',
      tech: 'Go, GitHub Actions, Docker, Kubernetes, YAML, Cobra CLI',
      bullets: [
        'Built a CLI tool in Go that generates production-ready CI/CD configurations from declarative specs, supporting GitHub Actions, GitLab CI, and Jenkins with 20+ built-in templates',
        'Implemented intelligent dependency detection and automatic security scanning stages (Trivy, Snyk) for containerized applications, reducing pipeline setup time from hours to minutes',
        'Designed a plugin architecture enabling custom pipeline stages, with comprehensive unit tests achieving 85% code coverage',
      ],
    },
    {
      title: 'CloudScope — Multi-Cloud Resource Dashboard',
      tech: 'React, AWS SDK, Terraform, Node.js, PostgreSQL, Chart.js',
      bullets: [
        'Developed a unified dashboard aggregating infrastructure data from AWS, GCP, and Azure, providing real-time cost analysis and resource utilization heatmaps across 50+ resource types',
        'Implemented Terraform state parsing and drift detection, alerting teams when infrastructure deviates from declared configurations',
        'Built a Node.js backend with PostgreSQL for historical cost tracking, enabling month-over-month trend analysis and budget forecasting with Chart.js visualizations',
      ],
    },
    {
      title: 'LogSentry — Intelligent Log Analysis Platform',
      tech: 'Python, ELK Stack, scikit-learn, Kafka, Docker, Redis',
      bullets: [
        'Engineered a distributed log ingestion pipeline using Kafka capable of processing 10K+ log events per second from microservice architectures',
        'Trained a Random Forest classification model on 200K+ labeled log entries to automatically categorize severity levels and surface actionable alerts with root cause suggestions',
        'Deployed the entire stack using Docker Compose with Elasticsearch, Logstash, and Kibana, reducing mean-time-to-detection by 55% compared to manual log review',
      ],
    },
  ],

  certifications: [
    'AWS Certified Cloud Practitioner (Placeholder — update when earned)',
    'Docker Certified Associate (Placeholder — update when earned)',
    'Certified Kubernetes Application Developer — CKAD (Placeholder — update when earned)',
  ],

  achievements: [
    'Secured Top 10 position in National Level Hackathon on Cloud-Native Solutions (Placeholder)',
    'Solved 300+ problems on LeetCode with a contest rating of 1800+ (Placeholder)',
    'Open-source contributor to CNCF projects with 5+ merged pull requests (Placeholder)',
  ],
};
