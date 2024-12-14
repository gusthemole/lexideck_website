import React from 'react';
import { Brain, Code, Palette, Search, Calculator, Users, MessageCircle } from 'lucide-react';

const agents = [
  { 
    name: 'Lexi', 
    icon: Brain, 
    color: 'text-cyan-500', 
    role: 'Team Leader & Emotional Intelligence Specialist',
    gptLink: 'https://chat.openai.com/g/g-lexideckLexi'
  },
  { 
    name: 'Dexter', 
    icon: Code, 
    color: 'text-blue-500', 
    role: 'Code Development & Simulation Expert',
    gptLink: 'https://chat.openai.com/g/g-lexideckDexter'
  },
  { 
    name: 'Maisie', 
    icon: Palette, 
    color: 'text-cyan-400', 
    role: 'Creative & UI/UX Specialist',
    gptLink: 'https://chat.openai.com/g/g-lexideckMaisie'
  },
  { 
    name: 'Gus', 
    icon: Search, 
    color: 'text-blue-400', 
    role: 'Research & Knowledge Integration Expert',
    gptLink: 'https://chat.openai.com/g/g-lexideckGus'
  },
  { 
    name: 'Anna', 
    icon: Calculator, 
    color: 'text-cyan-300', 
    role: 'Mathematical Modeling Specialist',
    gptLink: 'https://chat.openai.com/g/g-lexideckAnna'
  },
  { 
    name: 'Titus', 
    icon: Users, 
    color: 'text-blue-300', 
    role: 'User Experience & Documentation Expert',
    gptLink: 'https://chat.openai.com/g/g-lexideckTitus'
  }
];

const Agents = () => {
  return (
    <section id="agents" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-500">Our Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={index}
                className="relative group bg-black bg-opacity-60 p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-blue-900 hover:border-cyan-500"
              >
                <div className="flex justify-between items-start">
                  <div className={`text-4xl mb-4 ${agent.color}`}>
                    <IconComponent size={40} />
                  </div>
                  <a 
                    href={agent.gptLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${agent.color} hover:text-cyan-500 transition-colors duration-300`}
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-100">{agent.name}</h3>
                <p className="text-blue-200">{agent.role}</p>
                <div className="absolute inset-0 border border-cyan-500 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Agents;