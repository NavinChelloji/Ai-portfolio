import { ResumeData } from '../models/resume.model';

export const RESUME_DATA: ResumeData = {
  name: 'Naveen Chelloji',
  title: 'Angular Developer',
  tagline: 'Building scalable, responsive web apps with 1.8+ years of experience.',
  location: 'Kondapur, Hyderabad, Telangana',
  phone: '+91 7997497405',
  email: 'chelloji.naveen@gmail.com',
  linkedin: 'linkedin.com/in/naveen-chelloji-b19887253',
  summary:
    'Angular Developer with 1.8 years of experience developing scalable and responsive web applications using AngularJS, TypeScript, and modern frontend technologies. Experienced in building government digital platforms that improve transparency, accessibility, and citizen services.',
  stats: [
    { value: '1.8+', label: 'Years Exp.' },
    { value: '10+', label: 'Technologies' },
    { value: 'Gov', label: 'Sector Project' },
    { value: '7.57', label: 'CGPA B.Tech' },
  ],
  skillCategories: [
    {
      icon: '⚡',
      title: 'Frontend',
      skills: [
        { name: 'AngularJS / TypeScript', level: 90, color: 'indigo' },
        { name: 'HTML5 / CSS3', level: 88, color: 'indigo' },
        { name: 'JavaScript (ES6+)', level: 85, color: 'indigo' },
        { name: 'Tailwind CSS', level: 82, color: 'indigo' },
      ],
    },
    {
      icon: '🔧',
      title: 'Backend & Tools',
      skills: [
        { name: 'Node JS / Express JS', level: 70, color: 'pink' },
        { name: 'REST API Integration', level: 88, color: 'pink' },
        { name: 'MongoDB / SQL', level: 72, color: 'pink' },
        { name: 'Git / JIRA', level: 80, color: 'pink' },
      ],
    },
    {
      icon: '💡',
      title: 'Other Languages',
      skills: [
        { name: 'Python', level: 75, color: 'amber' },
        { name: 'C Programming', level: 68, color: 'amber' },
        { name: 'Agile / Scrum', level: 85, color: 'amber' },
        { name: 'Responsive Design', level: 90, color: 'amber' },
      ],
    },
  ],
  chips: [
    { label: 'Angular', color: 'indigo' },
    { label: 'TypeScript', color: 'indigo' },
    { label: 'Node.js', color: 'cyan' },
    { label: 'REST APIs', color: 'cyan' },
    { label: 'MongoDB', color: 'pink' },
    { label: 'SQL', color: 'pink' },
    { label: 'Tailwind', color: 'amber' },
    { label: 'Git', color: 'amber' },
    { label: 'JavaScript', color: 'indigo' },
    { label: 'Postman', color: 'cyan' },
    { label: 'Python', color: 'pink' },
    { label: 'Agile/Scrum', color: 'amber' },
    { label: 'VS Code', color: 'indigo' },
    { label: 'JIRA', color: 'cyan' },
  ],
  experiences: [
    {
      role: 'Software Developer',
      company: 'Quantela Pvt Ltd',
      period: 'June 2024 – Present',
      project: 'MP Land Records Digital Platform (Government Project)',
      bullets: [
        'Developed dynamic and responsive UI modules using AngularJS and TypeScript',
        'Built reusable components and services to improve scalability and maintainability',
        'Integrated REST APIs to fetch and display real-time land ownership and plot data',
        'Improved performance and reduced load times through UI optimization',
        'Implemented clean layouts using Tailwind CSS',
        'Fixed production issues, performed testing, and supported deployments',
        'Worked closely with backend, QA, and business teams in Agile sprints',
      ],
      tech: ['AngularJS', 'TypeScript', 'JavaScript', 'REST APIs', 'Tailwind CSS', 'Node JS'],
    },
  ],
  projects: [
    {
      emoji: '🖐',
      title: 'Virtual Mouse Interface with Real-time Finger Tracking',
      description:
        'A computer vision application that lets users control the mouse cursor using hand gestures captured by a webcam in real time. Uses MediaPipe for hand landmark detection and maps finger positions to screen coordinates.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    },
    {
      emoji: '🔐',
      title: 'Anti-theft Security System',
      description:
        'An embedded security system using Arduino microcontroller and GSM module that detects unauthorized access and triggers SMS alerts instantly. Programmed entirely in Embedded C.',
      tags: ['Embedded C', 'Arduino', 'GSM Module'],
    },
    {
      emoji: '🏛',
      title: 'MP Land Records Digital Platform',
      description:
        'A government digital platform enabling citizens, farmers, and legal authorities to access land ownership, plot details, and records online — reducing physical visits and improving transparency.',
      tags: ['AngularJS', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
    },
  ],
  education: [
    {
      icon: '🎓',
      degree: 'B.Tech – Electronics & Communication Engineering',
      school: 'Anurag Group of Institutions | 2018 – 2022',
      badge: 'CGPA: 7.57',
    },
    {
      icon: '📚',
      degree: 'Intermediate (MPC)',
      school: 'Board of Intermediate Education',
      badge: 'Score: 95%',
    },
    {
      icon: '🏫',
      degree: 'Secondary School Certificate (SSC)',
      school: 'Board of Secondary Education',
      badge: 'CGPA: 9.0',
    },
  ],
  contact: [
    { icon: '📍', label: 'Location', value: 'Kondapur, Hyderabad, Telangana' },
    { icon: '📞', label: 'Phone', value: '+91 7997497405' },
    { icon: '✉️', label: 'Email', value: 'chelloji.naveen@gmail.com' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/naveen-chelloji-b19887253' },
  ],
};
