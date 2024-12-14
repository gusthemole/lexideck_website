import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Welcome to Lexideck
          </h1>
          <p className="text-xl mb-12 text-blue-200">
            A Multi-Agent AI System for Enhanced Problem Solving
          </p>
          <a
            href="#learn-more"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-cyan-500 hover:bg-blue-500 transition-colors duration-300"
          >
            Learn More
            <ChevronDown className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;