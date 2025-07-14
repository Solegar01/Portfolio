import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
    github: '#',
    demo: '#',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
          <Github size={16} />
          Code
        </a>
        <a href={project.demo} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
          <ExternalLink size={16} />
          Demo
        </a>
      </div>
    </div>
  </div>
);

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and creativity
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
