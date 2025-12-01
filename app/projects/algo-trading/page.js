"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectTemplate() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="page-wrapper" data-theme={theme}>
      
      {/* 1. HOME BUTTON */}
      <Link href="/#about" className="home-logo" aria-label="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </Link>

      {/* 2. THEME TOGGLE */}
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* MAIN CONTENT */}
      <main className="project-detail-main">
        <div className="container">
          
          {/* --- BACK LINK --- */}
          <Link href="/projects" className="back-link">
            &larr; Back to Projects
          </Link>

          {/* --- TITLE HEADER --- */}
          <header>
            <h1>ML for Algorithmic Trading Model</h1>
            <p className="subtitle"></p>
          </header>

          <div className="hero-image">
            <img 
              src="https://via.placeholder.com/800x400?text=Project+Hero+Image" 
              alt="Project Screenshot" 
            />
          </div>

          <article className="content">
            <section className="description-section">
              <h2>Description</h2>
              <p>
                Time-series analysis of IBM and JP Morgan stocks from 2009–2015 using supervised learning and Q-learning.              </p>
            </section>

            <section className="tools-section">
              <h2>Tools Used</h2>
              <div className="tech-stack-list">
                <span>React</span>
                <span>Python</span>
                <span>AWS</span>
                <span>AI Models</span>
              </div>
            </section>

            <div className="action-buttons">
              <a href="#" target="_blank" rel="noopener noreferrer" className="primary-btn">View Live Demo</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="secondary-btn">GitHub Repo</a>
            </div>

            <div className="disclaimer-box">
              <p>This page will be updated soon, please refer to the resume for further details.</p>
            </div>
          </article>
        </div>
      </main>

      <style jsx>{`
        /* --- THEME VARIABLES --- */
        :global([data-theme="light"]) {
          --bg-main: #f5f2ed;
          --text-main: #2c2c2c;
          --text-sub: #555;
          --text-heading: #4a524a;
          --card-bg: #ffffff;
          --card-border: #e0d9ce;
          --accent-color: #7b8a7a;
          --accent-hover: #4a524a;
          --btn-bg: rgba(255, 255, 255, 0.8);
          --btn-hover: #ffffff;
          --tag-bg: #e8e4dc;
          --disclaimer-text: #666;
          --disclaimer-border: #dcdcdc;
        }

        :global([data-theme="dark"]) {
          --bg-main: #2d2d2d;
          --text-main: #e0e0e0;
          --text-sub: #b0b0b0;
          --text-heading: #f0f0f0;
          --card-bg: #1e1e1e;
          --card-border: #444;
          --accent-color: #ffcc66;
          --accent-hover: #ffe082;
          --btn-bg: #444;
          --btn-hover: #555;
          --tag-bg: #444;
          --disclaimer-text: #999;
          --disclaimer-border: #444;
        }

        .page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-main);
          color: var(--text-main);
          transition: background-color 0.3s, color 0.3s;
        }
        .project-detail-main {
          display: flex;
          justify-content: center;
          padding: 6rem 2rem 4rem 2rem;
        }
        .container {
          max-width: 800px;
          width: 100%;
        }

        /* --- CONTROL THE DISTANCE HERE --- */
        .back-link {
          display: inline-block;
          
          /* THIS IS THE SPACE BELOW THE BACK LINK */
          margin-bottom: 120px; 

          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: color 0.2s;
        }
        .back-link:hover {
          color: var(--text-main);
        }

        :global(.home-logo) {
          position: fixed; top: 2rem; left: 2rem; z-index: 100;
          display: flex; align-items: center; justify-content: center;
          background: var(--btn-bg); color: var(--text-main);
          padding: 10px; border-radius: 50%;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          transition: transform 0.2s, background-color 0.3s;
        }
        :global(.home-logo:hover) {
          transform: scale(1.1); background: var(--btn-hover); color: var(--accent-color);
        }
        .theme-toggle {
          position: fixed; top: 2rem; right: 2rem; z-index: 100;
          width: 44px; height: 44px; border: none; border-radius: 50%;
          background: var(--btn-bg); color: var(--text-main);
          box-shadow: 0 2px 5px rgba(0,0,0,0.1); cursor: pointer;
          font-size: 1.2rem; display: flex; align-items: center; justify-content: center;
          transition: transform 0.2s, background-color 0.3s;
        }
        .theme-toggle:hover {
          transform: scale(1.1); background: var(--btn-hover);
        }

        header { margin-bottom: 2rem; margin-top: 1.8rem; /* Adds space above the title */
  }
        h1 { font-size: 2.5rem; color: var(--text-heading); margin-bottom: 0.5rem; line-height: 1.2; }
        .subtitle { font-size: 1.2rem; color: var(--text-sub); }
        h2 { font-size: 1.5rem; color: var(--text-heading); margin-bottom: 0.8rem; }

        .hero-image {
          width: 100%; border-radius: 12px; overflow: hidden; margin-bottom: 3rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .hero-image img { width: 100%; height: auto; display: block; }

        .content section { margin-bottom: 2.5rem; }
        p { font-size: 1.1rem; line-height: 1.7; color: var(--text-main); }

        .tech-stack-list { display: flex; flex-wrap: wrap; gap: 0.8rem; }
        .tech-stack-list span {
          background-color: var(--tag-bg); color: var(--text-main);
          padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.95rem; font-weight: 500;
        }

        .action-buttons { display: flex; gap: 1rem; margin-bottom: 3rem; }
        .primary-btn, .secondary-btn {
          padding: 0.8rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: opacity 0.2s;
        }
        .primary-btn { background-color: var(--accent-color); color: #fff; }
        :global([data-theme="dark"]) .primary-btn { color: #2d2d2d; }
        .secondary-btn { background-color: transparent; border: 2px solid var(--accent-color); color: var(--accent-color); }
        .primary-btn:hover, .secondary-btn:hover { opacity: 0.8; }

        .disclaimer-box {
          margin-top: 4rem; padding-top: 1.5rem; border-top: 1px solid var(--disclaimer-border);
          font-style: italic; color: var(--disclaimer-text); font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .project-detail-main { padding: 5rem 1.5rem; }
          h1 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}