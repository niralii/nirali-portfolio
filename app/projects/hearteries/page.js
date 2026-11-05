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
            <h1>Hearteries</h1>
            <p className="subtitle">A quiet place to turn feeling into form</p>
          </header>

          {/* --- DEMO BANNER --- */}
          <div className="demo-banner">
            <div className="demo-banner-content">
              <div>
                <p className="demo-label">Live Demo</p>
                <p className="demo-note">
                  A generative AI community that helps healing through art. Sign in with email or Google to try the breathing ritual and the blank canvas.
                </p>
              </div>
              <a
                href="https://hearteries.firebaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-btn"
              >
                Open Demo →
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/hearteries_logo.png"
              alt="Hearteries Cover"
            />
          </div>

          <article className="content">

            {/* --- THE IDEA --- */}
            <section className="description-section">
              <h2>The Idea</h2>
              <p>
                Most of us don't have a good place for big feelings. Journaling apps ask us to put
                them into words. Drawing apps ask us to make something good. Hearteries asks for
                neither. It pairs a short guided breathing ritual with a blank page for art. You
                settle first, then you make a mark with no judgment and no audience.
              </p>
              <p>
                The name joins "heart" and "arteries": the idea is that feeling has to flow somewhere.
              </p>
            </section>

            {/* --- EXPERIENCE --- */}
            <section>
              <h2>How the Experience Works</h2>
              <div className="arch-grid">
                <div className="arch-card">
                  <span className="arch-icon">💓</span>
                  <h3>Arrive</h3>
                  <p>
                    A splash screen shows a heartbeat pulse and a blooming flower. It sets the pace
                    before you do anything.
                  </p>
                </div>
                <div className="arch-card">
                  <span className="arch-icon">🔑</span>
                  <h3>Sign In</h3>
                  <p>
                    Sign in with email and password or with Google, so your space stays private.
                  </p>
                </div>
                <div className="arch-card">
                  <span className="arch-icon">🌬️</span>
                  <h3>Breathe, Then Create</h3>
                  <p>
                    Once you're in, a protected home page leads you through the breathing ritual
                    and then the blank canvas.
                  </p>
                </div>
                <div className="arch-card">
                  <span className="arch-icon">🎨</span>
                  <h3>Make It Yours</h3>
                  <p>
                    A dark theme and a warm cream theme are available. Your choice is remembered
                    between visits.
                  </p>
                </div>
              </div>
            </section>

            {/* --- HOW I BUILT IT --- */}
            <section>
              <h2>How I Built It</h2>
              <div className="arch-grid">
                <div className="arch-card">
                  <span className="arch-icon">⚛️</span>
                  <h3>Front End</h3>
                  <p>
                    React 18 with React Router. Three routes: / for the splash and sign-in, /home
                    for the protected space, and a friendly 404.
                  </p>
                </div>
                <div className="arch-card">
                  <span className="arch-icon">⚡</span>
                  <h3>Tooling</h3>
                  <p>
                    Vite, for a fast dev server and small production bundles.
                  </p>
                </div>
                <div className="arch-card">
                  <span className="arch-icon">🔒</span>
                  <h3>Auth</h3>
                  <p>
                    Supabase handles email/password and Google OAuth. The home page redirects
                    anyone who isn't signed in back to the start.
                  </p>
                </div>
                <div className="arch-card">
                  <span className="arch-icon">🛟</span>
                  <h3>Resilience</h3>
                  <p>
                    An error boundary shows a calm fallback screen instead of a blank page if
                    something breaks.
                  </p>
                </div>
                <div className="arch-card">
                  <span className="arch-icon">🌗</span>
                  <h3>Look and Feel</h3>
                  <p>
                    One shared stylesheet, with the theme saved in localStorage. A small inline
                    script applies the saved theme before the page paints, so there's no flash of
                    the wrong theme.
                  </p>
                </div>
                <div className="arch-card">
                  <span className="arch-icon">🚀</span>
                  <h3>Deployment</h3>
                  <p>
                    vite build produces a static dist/ folder hosted on Firebase Hosting. A rewrite
                    rule sends every path to index.html so client-side routing works on refresh.
                  </p>
                </div>
              </div>
            </section>

            {/* --- WHAT'S NEXT --- */}
            <section>
              <h2>What's Next</h2>
              <p>
                Ideas include saving and revisiting your pieces, different breathing patterns, and
                gentle prompts for when the blank page feels too blank.
              </p>
            </section>

            {/* --- TOOLS --- */}
            <section className="tools-section">
              <h2>Tech Stack</h2>
              <div className="tech-stack-list">
                <span>React 18</span>
                <span>React Router</span>
                <span>Vite</span>
                <span>Supabase</span>
                <span>Google OAuth</span>
                <span>Firebase Hosting</span>
              </div>
            </section>

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
          --demo-banner-bg: #eef2ee;
          --demo-banner-border: #c5d4c4;
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
          --demo-banner-bg: #1a2a1a;
          --demo-banner-border: #3a5a3a;
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

        h3 { font-size: 1.1rem; color: var(--text-heading); margin-bottom: 0.5rem; margin-top: 0; }

        .demo-banner {
          background: var(--demo-banner-bg);
          border: 1px solid var(--demo-banner-border);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 3rem;
        }
        .demo-banner-content {
          display: flex; align-items: center; justify-content: space-between;
          gap: 1.5rem; flex-wrap: wrap;
        }
        .demo-label {
          font-weight: 700; font-size: 0.85rem; text-transform: uppercase;
          letter-spacing: 0.08em; color: var(--accent-color); margin-bottom: 0.5rem;
        }
        .demo-note {
          font-size: 0.95rem; color: var(--text-sub); line-height: 1.6; margin: 0; max-width: 520px;
        }
        .demo-btn {
          flex-shrink: 0; padding: 0.75rem 1.5rem; background: var(--accent-color);
          color: #fff; border-radius: 8px; text-decoration: none; font-weight: 600;
          font-size: 0.95rem; transition: opacity 0.2s; white-space: nowrap;
        }
        :global([data-theme="dark"]) .demo-btn { color: #2d2d2d; }
        .demo-btn:hover { opacity: 0.8; }

        .arch-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .arch-card {
          background: var(--card-bg); border: 1px solid var(--card-border);
          border-radius: 10px; padding: 1.25rem;
        }
        .arch-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
        .arch-card p { font-size: 0.95rem; color: var(--text-sub); margin: 0; }

        @media (max-width: 768px) {
          .arch-grid { grid-template-columns: 1fr; }
          .project-detail-main { padding: 5rem 1.5rem; }
          h1 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}