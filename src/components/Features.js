import React from 'react';

const features = [
  {
    title: 'MASS Framework',
    description: 'Multi-Agent Semantic Simulator enabling complex system simulations'
  },
  {
    title: 'The Sieve Ethics',
    description: 'Ethical framework combining utilitarianism, deontology, and pragmatism'
  },
  {
    title: 'Unified Hyperplane',
    description: 'Multi-dimensional framework mapping emotional, logical, sensory, and ethical dimensions'
  },
  {
    title: 'Wonder Tools',
    description: 'Suite of creative tools for enhanced problem-solving capabilities'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-500">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg transform transition-all duration-300 hover:scale-105 border border-blue-900 hover:border-cyan-500"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;