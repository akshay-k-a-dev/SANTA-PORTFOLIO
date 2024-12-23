import React from 'react';
import { Star, Heart, Coffee } from 'lucide-react';

const StorySection = () => (
  <section className="py-20 bg-gradient-to-b from-red-800/5 to-transparent">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-700">My Journey</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
          <Star className="w-12 h-12 mx-auto mb-4 text-red-700" />
          <h3 className="text-xl font-semibold mb-4">The Beginning</h3>
          <p className="text-gray-600">
            For centuries, I've managed the world's most complex gift delivery system. 
            Then one day, while reviewing our ancient scrolls system, I thought: 
            "There must be a better way!"
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
          <Coffee className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <h3 className="text-xl font-semibold mb-4">The Discovery</h3>
          <p className="text-gray-600">
            I discovered coding during a particularly cold night at the North Pole. 
            The elves were struggling with gift inventory, and I wrote my first Python script 
            to help them out.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
          <Heart className="w-12 h-12 mx-auto mb-4 text-red-700" />
          <h3 className="text-xl font-semibold mb-4">The Passion</h3>
          <p className="text-gray-600">
            Now, I'm combining centuries of bringing joy to people with modern technology. 
            My goal? Creating software that makes people's lives magical, just like Christmas morning.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default StorySection;