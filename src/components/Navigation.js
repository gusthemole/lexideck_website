import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navigation = ({ isDark, setIsDark }) => {
  return (
    <nav className="fixed w-full z-50 bg-opacity-90 backdrop-filter backdrop-blur-lg bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              Lexideck
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#agents" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium">
                Agents
              </a>
              <a href="#features" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-blue-900"
              >
                {isDark ? (
                  <Sun size={20} className="text-cyan-500" />
                ) : (
                  <Moon size={20} className="text-cyan-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;