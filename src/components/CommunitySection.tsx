import React from 'react';
import { Users, Code, Gift } from 'lucide-react';

const communities = [
  {
    name: 'FOSS Community',
    role: 'Active contributor and mentor',
    icon: Users
  },
  {
    name: 'Mozilla Developer Network',
    role: 'Technical content contributor',
    icon: Code
  },
  {
    name: 'Google Developer Expert',
    role: 'Web Technologies specialist',
    icon: Gift
  }
];

const CommunitySection = () => (
  <section id="community" className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-700">Community Engagement</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {communities.map((community, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
            <community.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">{community.name}</h3>
            <p className="text-gray-600">{community.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CommunitySection;