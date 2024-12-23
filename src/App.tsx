import React from 'react';
import { Github, Linkedin, Twitter, Mail, Gift } from 'lucide-react';
import Navbar from './components/Navbar';
import Snowfall from './components/Snowfall';
import StorySection from './components/StorySection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CommunitySection from './components/CommunitySection';
import ContactForm from './components/ContactForm';
import GiftBox from './components/GiftBox';
import Reindeer from './components/Reindeer';
import santaImage from './assets/santa.webp';

// Extract Hero section into its own component for better organization
const HeroSection = () => (
  <section className="pt-32 pb-20 bg-gradient-to-b from-red-700 to-red-800 text-white relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <GiftBox className="absolute top-10 left-[10%]" />
      <GiftBox className="absolute bottom-10 right-[10%]" />
      <Reindeer className="absolute top-20 right-[15%]" />
    </div>
    <div className="max-w-7xl mx-auto px-4 relative">
      <div className="text-center">
        <img
          src="src/assets/santa.webp"
          alt="Santa Claus"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Santa Claus</h1>
        <p className="text-xl md:text-2xl mb-8">Full Stack Developer | Open Source Enthusiast</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" className="hover:text-green-300"><Github /></a>
          <a href="https://linkedin.com" className="hover:text-green-300"><Linkedin /></a>
          <a href="https://twitter.com" className="hover:text-green-300"><Twitter /></a>
        </div>
      </div>
    </div>
  </section>
);

// Extract Contact section into its own component
const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-700">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-3 text-green-600" />
              <a href="mailto:santa@job.com" className="text-gray-600 hover:text-red-700">
                santa@job.com
              </a>
            </div>
            <div className="flex items-center">
              <Gift className="mr-3 text-green-600" />
              <span className="text-gray-600">North Pole</span>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Snowfall />
      <Navbar />

      {/* Decorative elements */}
      <GiftBox className="fixed top-20 left-4 hidden lg:block" />
      <GiftBox className="fixed bottom-20 right-4 hidden lg:block" />
      <Reindeer className="fixed top-40 right-8 hidden lg:block" />
      <Reindeer className="fixed bottom-40 left-8 hidden lg:block" />

      <HeroSection />
      <StorySection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CommunitySection />
      <ContactSection />

      <footer className="bg-red-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Santa Claus. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
