import React from 'react';
import { GraduationCap, Code, Wrench, Database, GitBranch } from 'lucide-react';

const SkillCard = ({ Icon, title, skills }: { Icon: React.ElementType, title: string, skills: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-2">
      <Icon className="mr-2 text-green-600" />
      <h4 className="font-medium">{title}</h4>
    </div>
    <p className="text-gray-600">{skills}</p>
  </div>
);

const Education = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-red-700">Education</h3>
    <div className="space-y-4">
      {[
        { degree: 'M.Tech in Computer Science', school: 'NIT Calicut' },
        { degree: 'B.Tech in Computer Science', school: 'NIT Calicut' }
      ].map((edu, index) => (
        <div key={index} className="flex items-start">
          <GraduationCap className="mr-3 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-medium">{edu.degree}</p>
            <p className="text-gray-600">{edu.school}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  const skills = [
    { icon: Code, title: 'Frontend', skills: 'HTML, CSS, JavaScript, ReactJS, Bootstrap' },
    { icon: Wrench, title: 'Backend', skills: 'Node.js, Express.js, Django' },
    { icon: Database, title: 'Database', skills: 'MongoDB, MySQL' },
    { icon: GitBranch, title: 'Tools', skills: 'Git, Docker, REST APIs' }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-red-700">Technical Skills</h3>
      <div className="grid gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} Icon={skill.icon} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-700">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 leading-relaxed mb-8">
            After centuries of delivering joy through gifts, I've embarked on an exciting journey
            into the world of software development. My experience in managing the world's largest
            gift distribution network has given me unique insights into scalable systems and
            efficient delivery pipelines.
          </p>
          <Education />
        </div>
        <div>
          <TechnicalSkills />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;