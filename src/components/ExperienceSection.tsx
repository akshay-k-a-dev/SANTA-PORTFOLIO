import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'India FOSS',
    role: 'Open Source Contributor',
    description: 'Contributed to various open-source projects, focusing on improving documentation and implementing new features.'
  },
  {
    company: 'Tinkerhub Foundation',
    role: 'Web Developer',
    description: 'Developed and maintained web applications, collaborated with cross-functional teams, and implemented responsive designs.'
  },
  {
    company: 'Mulearn',
    role: 'Bot Developer',
    description: 'Created and maintained automation bots and web-based applications to streamline community processes.'
  }
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-700">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start">
              <Briefcase className="mr-4 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                <p className="text-gray-600 mb-4">{exp.role}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;