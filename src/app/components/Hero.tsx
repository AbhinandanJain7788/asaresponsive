"use client";
import './Hero.css'
export default function Hero() {
  return (
    <section className="hero">
      <img src="/pexels-pixabay-267885.jpg" alt="Hero Background" className="hero-img" />
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>ASA Overseas: Your Gateway To Global Education</h1>
        <p className="subtitle">Where your Global Journey Begins</p>
        <a href="#" className="cta-button">Get Started</a>
      </div>
    </section>
  );
}
