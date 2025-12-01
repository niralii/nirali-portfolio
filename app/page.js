"use client";

import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="main" data-theme={theme}>
      {/* ----- HERO IMAGE ----- */}
      <section className="hero">
        <img
          src="https://kidintherye.wordpress.com/wp-content/uploads/2017/11/cropped-16123233_351253248593190_5958721580749029376_n1.jpg"
          alt="Background"
          className="bg-image"
        />
        <div className="overlay"></div>

        <div className="content">
          <div className="card">
            <h1>
              👋 Hi, I'm <span className="highlight">Nirali Thakkar</span>
            </h1>
            <p className="tagline">Passionate about everything AI!</p>
            <div className="links">
              <a
                href="https://github.com/niralii"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nirali-t"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:nirali.gatech@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* ----- MENU BAR (AFTER IMAGE) ----- */}
      <nav className="navbar">
        <div className="navbar-content">
          <ul>
            <li>
              <a href="/#about">Home</a>
            </li>
            {/* THIS IS THE NEW PROJECTS LINK */}
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a
                href="YOUR_GOOGLE_SCHOLAR_LINK_HERE"
                target="_blank"
                rel="noreferrer"
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="YOUR_GOOGLE_DRIVE_LINK_HERE"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {/* ----- NEW CONTENT SECTION ----- */}
      <section id="about" className="main-content">
        <div className="content-wrapper">
          <div className="bio-container">
            <div className="bio-text">
              <p>
                Nirali Thakkar is a Master's student specializing in Machine Learning at Georgia Tech. She has a strong passion for artificial intelligence and its applications. 
                {/* (Rest of your bio text) */}
              </p>
            </div>
            <div className="bio-image">
              <img
                src="/my_image.jpeg"
                alt="A photo of Nirali Thakkar"
              />
            </div>
          </div>

          <h2>News</h2>
          <table className="news-table">
            <tbody>
              <tr>
                <td>Aug 2025</td>
                <td>Graduated!</td>
              </tr>
              {/* (Rest of your news items) */}
              <tr>
                <td>May 2024</td>
                <td>Published three research papers at ACM Learnign at Scale</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <style jsx>{`
        /* All your previous styles remain here... */
        :global(html) {
          scroll-behavior: smooth;
        }
        :global([data-theme="light"]) {
          --bg-navbar: #d7cdbf;
          --text-navbar: #2c2c2c;
          --text-navbar-hover: #7b8a7a;
          --accent-navbar: #7b8a7a;
          --bg-content: #f5f2ed;
          --text-main: #444;
          --text-heading: #4a524a;
          --border-color: #e0d9ce;
          --bg-toggle: #ebe4d8;
        }
        :global([data-theme="dark"]) {
          --bg-navbar: #1e1e1e;
          --text-navbar: #e0e0e0;
          --text-navbar-hover: #ffcc66;
          --accent-navbar: #ffcc66;
          --bg-content: #2d2d2d;
          --text-main: #c7c7c7;
          --text-heading: #e0e0e0;
          --border-color: #444;
          --bg-toggle: #444;
        }
        .main, .navbar, .main-content, .theme-toggle {
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          color: white;
          overflow-x: hidden;
          background-color: var(--bg-content);
        }
        .hero { position: relative; width: 100%; overflow: hidden; }
        .bg-image { width: 100%; height: auto; display: block; }
        .overlay { position: absolute; top: 0; left: 0; right: 0; height: 35%; background: rgba(0, 0, 0, 0.3); z-index: 1; }
        .content { position: absolute; top: 20%; left: 50%; transform: translateX(-50%); z-index: 2; text-align: center; width: 100%; }
        .card { background: rgba(255, 255, 255, 0.1); padding: 1.5rem 2rem; border-radius: 2rem; backdrop-filter: blur(12px); max-width: 600px; transform: translateY(-200px); margin: 0 auto; }
        h1 { font-size: 2.2rem; margin-bottom: 1rem; }
        .highlight { color: #ffcc66; }
        .tagline { font-size: 1.2rem; margin: 1rem 0 2rem 0; line-height: 1.5; }
        .links a { margin: 0 0.6rem; text-decoration: none; color: white; border: 2px solid white; padding: 0.7rem 1.4rem; border-radius: 9999px; transition: 0.3s; font-size: 1.1rem; font-weight: 500; }
        .links a:hover { background: white; color: black; }
        .navbar { width: 100%; background: var(--bg-navbar); color: var(--text-navbar); z-index: 3; display: flex; justify-content: center; align-items: center; padding: 1.2rem 2rem; border-top: 4px solid var(--accent-navbar); position: sticky; top: 0; }
        .navbar-content { width: 100%; max-width: 800px; display: flex; justify-content: space-between; align-items: center; }
        .navbar ul { list-style: none; display: flex; gap: 2rem; margin: 0; padding: 0; }
        .navbar a { color: var(--text-navbar); text-decoration: none; font-weight: 600; font-size: 1.1rem; transition: color 0.3s; }
        .navbar a:hover { color: var(--text-navbar-hover); }
        .theme-toggle { background: var(--bg-toggle); color: var(--text-navbar); border: none; padding: 0.5rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; line-height: 0; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; }
        .main-content { background: var(--bg-content); color: var(--text-main); padding: 4rem 2rem; width: 100%; display: flex; justify-content: center; }
        .content-wrapper { max-width: 800px; width: 100%; text-align: left; }
        .bio-container { display: flex; gap: 2.5rem; align-items: flex-start; margin-bottom: 2rem; }
        .bio-text { flex: 2; }
        .bio-image { flex: 1; }
        .bio-image img { width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .content-wrapper p { font-size: 1.1rem; line-height: 1.7; color: var(--text-main); margin-bottom: 1.5rem; }
        .content-wrapper h2 { font-size: 2rem; color: var(--text-heading); margin-top: 3rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; }
        .news-table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        .news-table td { padding: 1rem 0.5rem; border-bottom: 1px solid var(--border-color); vertical-align: top; }
        .news-table tr:last-child td { border-bottom: none; }
        .news-table td:first-child { font-weight: 500; color: var(--text-main); width: 140px; white-space: nowrap; }
        
        @media (max-width: 768px) {
          /* 1. Fix the layout to stack correctly on mobile */
          .bio-container { flex-direction: column-reverse; }
          .bio-image { width: 70%; margin: 0 auto 2rem; }
          .navbar-content { justify-content: space-around; }
          
          /* 2. FIX THE HERO HEIGHT */
          /* Give the hero a minimum height so it doesn't collapse on phones */
          .hero {
            min-height: 60vh; 
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* 3. FIX THE IMAGE */
          /* Make the image cover the background instead of shrinking */
          .bg-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          /* 4. FIX THE TEXT POSITIONING */
          /* Stop using absolute positioning on mobile */
          .content {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
            width: 100%;
            padding: 1rem;
          }

          /* 5. THE MAIN FIX: Remove the -200px shift */
          .card { 
            transform: none; 
            padding: 2rem; 
            max-width: 90%; 
            margin: 0 auto;
          }
          
          /* Optional: Make the dark overlay cover the whole image on mobile for readability */
          .overlay {
            height: 100%;
          }
        }



        
      `}</style>
    </main>
  );
}