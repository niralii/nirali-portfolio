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
            <h1>NLP Research in Online Education</h1>
            <p className="subtitle">Analyzing academic trends using BERTopic and Neural VAEs</p>
          </header>

          <div className="hero-image">
            <img 
              src="/NLP_logo.jpg" 
              alt="Project Screenshot" 
            />
          </div>

          <article className="content">
            <section className="description-section">
              <h2>Project Overview</h2>
              <p>
                My goal was to analyze research trends across 562 academic papers from the ACM Learning at Scale conference. I started with a manually labeled ground truth dataset to verify themes. 
              </p>
              <p>
                To explore automated categorization, I built two distinct topic modeling pipelines. Currently, the live demos process a single paper abstract to visually demonstrate how the math works step by step.
              </p>
            </section>

            <section className="description-section">
              <h2>Method 1: BERTopic</h2>
              <p>
                BERTopic is a pipeline that groups text based on meaning. If an abstract talks about student dropout rates, here is how the model processes it:
              </p>
              <ul>
                <li><strong>Read:</strong> The model reads the abstract and turns sentences into data points.</li>
                <li><strong>Map:</strong> It places sentences with similar meanings close together on a map.</li>
                <li><strong>Group:</strong> It draws hard boundaries around clusters of similar sentences.</li>
                <li><strong>Extract:</strong> It looks inside each cluster, filters out common filler words, and extracts the most unique words to name the theme.</li>
              </ul>
            </section>

            <section className="description-section">
              <h2>Method 2: Variational Autoencoder (VAE)</h2>
              <p>
                The VAE acts like a translator playing a guessing game. Instead of grouping sentences, it tries to rebuild the vocabulary from scratch.
              </p>
              <ul>
                <li><strong>Compress:</strong> The neural network reads the text and shrinks the meaning down into a tiny set of coordinates.</li>
                <li><strong>Sample:</strong> It picks a point near those coordinates to define a topic mixture.</li>
                <li><strong>Expand:</strong> A second neural network takes that point and tries to guess every word that belongs in the abstract.</li>
                <li><strong>Score:</strong> It compares its guessed words against the actual words in the text. It learns from its mistakes to make better guesses next time.</li>
              </ul>
            </section>

            <section className="tools-section">
              <h2>Tools Used</h2>
              <div className="tech-stack-list">
                <span>Python</span>
                <span>PyTorch</span>
                <span>BERTopic</span>
                <span>Hugging Face</span>
                <span>Streamlit</span>
              </div>
            </section>

            <section className="links-section" style={{ marginBottom: "3rem" }}>
              <h2>Project Links</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-color)", fontWeight: "600" }}>🔗 Demo 1: BERTopic Pipeline</a>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-color)", fontWeight: "600" }}>🔗 Demo 2: Neural VAE Model</a>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-sub)" }}>💻 Hugging Face Repo: BERTopic Code</a>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-sub)" }}>💻 Hugging Face Repo: VAE Code</a>
              </div>
            </section>

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

        .back-link {
          display: inline-block;
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

        header { margin-bottom: 2rem; margin-top: 1.8rem; }
        h1 { font-size: 2.5rem; color: var(--text-heading); margin-bottom: 0.5rem; line-height: 1.2; }
        .subtitle { font-size: 1.2rem; color: var(--text-sub); }
        h2 { font-size: 1.5rem; color: var(--text-heading); margin-bottom: 0.8rem; }

        .hero-image {
          width: 100%; border-radius: 12px; overflow: hidden; margin-bottom: 3rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .hero-image img { width: 100%; height: auto; display: block; }

        .content section { margin-bottom: 2.5rem; }
        p { font-size: 1.1rem; line-height: 1.7; color: var(--text-main); margin-bottom: 1rem; }
        
        ul { margin-top: 0.5rem; margin-bottom: 1.5rem; padding-left: 1.5rem; }
        li { font-size: 1.1rem; line-height: 1.7; color: var(--text-main); margin-bottom: 0.5rem; }

        .tech-stack-list { display: flex; flex-wrap: wrap; gap: 0.8rem; }
        .tech-stack-list span {
          background-color: var(--tag-bg); color: var(--text-main);
          padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.95rem; font-weight: 500;
        }

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