import React, { useState } from 'react';
import { 
  Brain, 
  Code, 
  Palette, 
  Search, 
  Calculator, 
  Users,
  ChevronDown,
  ExternalLink,
  Moon,
  Sun,
  MessageCircle,
  MessagesSquare,
  Share2
} from 'lucide-react';
import ParticleAnimation from './components/ParticleAnimation';
import GeometricBackground from './components/GeometricBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Agents from './components/Agents';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen bg-black text-white`}>
      <ParticleAnimation />
      <GeometricBackground />
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <Agents />
      <Features />
      <Footer />
    </div>
  );
};

export default App;