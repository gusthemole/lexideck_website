import React, { useState, useEffect, useCallback } from 'react';

const ParticleAnimation = () => {
  const [particles, setParticles] = useState([]);
  
  const createParticle = useCallback(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2 + 1,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    opacity: Math.random() * 0.5 + 0.2
  }), []);

  useEffect(() => {
    const initialParticles = Array.from({ length: 50 }, createParticle);
    setParticles(initialParticles);

    const animationFrame = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
        }))
      );
    }, 50);

    return () => clearInterval(animationFrame);
  }, [createParticle]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-cyan-500"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s linear'
          }}
        />
      ))}
    </div>
  );
};

export default ParticleAnimation;