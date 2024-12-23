import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Santa's Sleigh Tracker",
    description: "A real-time map application for tracking the sleigh's movements, built with MERN stack.",
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Christmas Wishlist Manager",
    description: "A Django-based app for managing and categorizing gift wishlists.",
    tech: ['Django', 'Python', 'PostgreSQL'],
    github: "https://github.com"
  },
  {
    title: "Community Engagement Bot",
    description: "A chatbot built using Node.js and integrated into Slack for community support.",
    tech: ['Node.js', 'Slack API', 'MongoDB'],
    github: "https://github.com"
  }
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-700">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;