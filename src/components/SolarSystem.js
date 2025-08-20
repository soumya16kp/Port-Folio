import React, { useEffect, useRef } from 'react';
import './SolarSystem.css';

const SolarSystem = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    // Create twinkling stars
    const starsContainer = starsRef.current;
    const starCount = 300;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('solar-system-star');
      
      // Randomize star properties
      const size = Math.random() * 3;
      const opacity = 0.2 + Math.random() * 0.8;
      const duration = 2 + Math.random() * 8;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty('--opacity', opacity);
      star.style.setProperty('--duration', `${duration}s`);
      
      starsContainer.appendChild(star);
    }

    // Store original animation durations
    document.querySelectorAll('.solar-system-planet').forEach(planet => {
      planet.dataset.originalDuration = getComputedStyle(planet).animationDuration;
    });
  }, []);

  const handlePause = () => {
    const planets = document.querySelectorAll('.solar-system-planet');
    const pauseBtn = document.getElementById('solar-system-pause-btn');
    const isPaused = planets[0].style.animationPlayState === 'paused';
    
    planets.forEach(planet => {
      if (isPaused) {
        planet.style.animationPlayState = 'running';
        pauseBtn.textContent = 'Pause';
      } else {
        planet.style.animationPlayState = 'paused';
        pauseBtn.textContent = 'Resume';
      }
    });
  };

  const handleSpeed = () => {
    const planets = document.querySelectorAll('.solar-system-planet');
    const speedBtn = document.getElementById('solar-system-speed-btn');
    const isFast = planets[0].style.animationDuration === '2s';
    
    planets.forEach(planet => {
      if (isFast) {
        planet.style.animationDuration = planet.dataset.originalDuration;
        speedBtn.textContent = 'Speed Up';
      } else {
        planet.dataset.originalDuration = planet.style.animationDuration;
        planet.style.animationDuration = '2s';
        speedBtn.textContent = 'Slow Down';
      }
    });
  };

  return (
    <div className="solar-system-container">
      <div className="solar-system-header">
        <h1 className="solar-system-title">3D Solar System</h1>
        <p className="solar-system-subtitle">Experience our solar system in 3D with realistic planet movements and twinkling stars</p>
      </div>
      
      <div className="solar-system-universe">
        <div ref={starsRef} className="solar-system-stars"></div>
        
        <div className="solar-system">
          <div className="solar-system-sun"></div>
          
          {/* Orbit paths */}
          <div className="solar-system-orbit-path" style={{width: '180px', height: '180px'}}></div>
          <div className="solar-system-orbit-path" style={{width: '260px', height: '260px'}}></div>
          <div className="solar-system-orbit-path" style={{width: '360px', height: '360px'}}></div>
          <div className="solar-system-orbit-path" style={{width: '460px', height: '460px'}}></div>
          <div className="solar-system-orbit-path" style={{width: '580px', height: '580px'}}></div>
          <div className="solar-system-orbit-path" style={{width: '700px', height: '700px'}}></div>
          <div className="solar-system-orbit-path" style={{width: '820px', height: '820px'}}></div>
          <div className="solar-system-orbit-path" style={{width: '940px', height: '940px'}}></div>
          
          {/* Planets */}
          <div className="solar-system-planet solar-system-mercury">
            <div className="solar-system-planet-label">Mercury</div>
          </div>
          <div className="solar-system-planet solar-system-venus">
            <div className="solar-system-planet-label">Venus</div>
          </div>
          <div className="solar-system-planet solar-system-earth">
            <div className="solar-system-planet-label">Earth</div>
          </div>
          <div className="solar-system-planet solar-system-mars">
            <div className="solar-system-planet-label">Mars</div>
          </div>
          <div className="solar-system-planet solar-system-jupiter">
            <div className="solar-system-planet-label">Jupiter</div>
          </div>
          <div className="solar-system-planet solar-system-saturn">
            <div className="solar-system-planet-label">Saturn</div>
          </div>
          <div className="solar-system-planet solar-system-uranus">
            <div className="solar-system-planet-label">Uranus</div>
          </div>
          <div className="solar-system-planet solar-system-neptune">
            <div className="solar-system-planet-label">Neptune</div>
          </div>
        </div>
      </div>
      
      <div className="solar-system-info-panel">
        <h3>Solar System Facts</h3>
        <p>Our solar system consists of the Sun and everything bound to it by gravity - the planets, moons, asteroids, comets, and other space objects.</p>
        <p>The eight planets orbit the Sun in elliptical paths, with inner planets moving faster than outer planets.</p>
      </div>
      
      <div className="solar-system-controls">
        <button id="solar-system-pause-btn" className="solar-system-control-btn" onClick={handlePause}>Pause</button>
        <button id="solar-system-speed-btn" className="solar-system-control-btn" onClick={handleSpeed}>Speed Up</button>
      </div>
    </div>
  );
};

export default SolarSystem;