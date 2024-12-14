import React from 'react';
import { Code, MessagesSquare, Share2, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    href: "https://github.com/gusthemole/lexideck",
    icon: Code,
    title: "GitHub Repository"
  },
  {
    href: "https://discord.gg/fVh8fqS8ZZ",
    icon: MessagesSquare,
    title: "Discord Community"
  },
  {
    href: "https://x.com/LexideckFounder",
    icon: Share2,
    title: "Twitter"
  },
  {
    href: "https://www.linkedin.com/in/matthew-m-631524a9/",
    icon: ExternalLink,
    title: "LinkedIn"
  }
];

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-500">Lexideck</h4>
            <p className="text-blue-200">Advancing AI through collaborative intelligence</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-500">Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-cyan-400">Home</a></li>
              <li><a href="#agents" className="text-blue-200 hover:text-cyan-400">Agents</a></li>
              <li><a href="#features" className="text-blue-200 hover:text-cyan-400">Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-500">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-cyan-400">Documentation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-cyan-400">API Reference</a></li>
              <li><a href="#" className="text-blue-200 hover:text-cyan-400">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-500">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const SocialIcon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-cyan-400 transition-colors duration-300"
                    title={link.title}
                  >
                    <SocialIcon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;