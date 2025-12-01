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

      {/* ----- MENU BAR ----- */}
      <nav className="navbar">
        <div className="navbar-content">
          <ul className="nav-links">
            <li><a href="/#about">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li>
              <a
                href="https://scholar.google.com/citations?user=zhMtcooAAAAJ&hl=en&authuser=1"
                target="_blank"
                rel="noreferrer"
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Cd6J5RmIxGxvMCPlByUtHzDAKLw_fALM/view?usp=sharing"
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

      {/* ----- MAIN CONTENT ----- */}
      <section id="about" className="main-content">
        <div className="content-wrapper">
          <div className="bio-container">
            <div className="bio-text">
              <p>
                Nirali has recently graduated with a Master's in Machine Learning from Georgia Institute of Technology. She previously worked as a Machine Learning
                Software Developer intern at AI Makerspace, Pace Labs, at her university where she automated data preprocessing for researchers to analyse large scale dataset within minutes. She has also worked as a NLP student researcher at Lucy Labs, where she published three research papers under the guidance of Dr. David Joyner and Alex Duncan. Her research focused on topic modeling, data coding, and causal inference to understand how AI and other factors have evolved in online education in the last ten years.  
              </p>
              <p>
                She has worked as a scientific reviewer at Cactus Communications (1 year 6 months) and as a frontend software developer at Gujarati Gaurav Charitable Trust of India (1 year). She has a total work experience of 2 years with an additonal 1 year including internships. 
              </p>
              <p>
                Nirali loves exploring the intersection of AI and education and please reach out if you would like to collaborate on any projects or research!
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
                  <td>
                  Graduated! from Georgia Tech Master's in CS with specialization in Machine Learning
                  </td>
                </tr>
                <tr>
                  <td>Aug 2024</td>
                    <td>
                      Selected as one of 10 students for the VIP Program to work at the{" "}
                      <a href="https://coe.gatech.edu/academics/ai-for-engineering/ai-makerspace" target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF1493", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
                        AI MakerSpace Nexus
                      </a>{" "}
                      and access 304 NVIDIA H100/H200 GPUs, {" "}
                      <a href="https://pace.gatech.edu/" target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF1493", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
                      
                      
                      Pace Labs </a>{" "}
                      , lead by supervisors{" "}
                      <a href="https://ece.gatech.edu/directory/gregory-krudysz" target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF1493", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
                        Gregory Krudysz
                      </a>{" "}
                      and{" "}
                      <a href="https://ece.gatech.edu/directory/ghassan-alregib" target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF1493", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
                        Ghassan Alregib
                      </a>
                    </td>
                </tr>
                <tr>
                  <td>Aug 2023</td>
                    <td>
                      Joined Dr.{" "}
                      <a href="https://www.cc.gatech.edu/people/david-joyner" target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF1493", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
                        David Joyner
                      </a>
                      's{" "}
                      <a href="https://lucylabs.gatech.edu/" target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF1493", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
                        Lucy Labs
                      </a>{" "}
                      as a student researcher co-advised by{" "}
                      <a href="https://www.cc.gatech.edu/people/alex-duncan" target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF1493", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
                        Alex Duncan
                      </a>
                   </td>
                </tr>
                <tr>
                  <td>July 2023</td>
                    <td>
                    Selected among the top 4% applicants to attend the Amazon Machine Learning Summer School
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </section>
          



      <style jsx>{`
        /* --- GLOBAL & THEME VARIABLES --- */
        :global(html) { scroll-behavior: smooth; box-sizing: border-box; }
        :global(*), :global(*::before), :global(*::after) { box-sizing: inherit; }
        
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
          display: flex; flex-direction: column; align-items: center; width: 100%;
          color: white; overflow-x: hidden; background-color: var(--bg-content);
        }

        /* --- HERO SECTION --- */
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

        /* --- NAVBAR --- */
        .navbar { 
          width: 100%; 
          background: var(--bg-navbar); 
          color: var(--text-navbar); 
          z-index: 3; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          padding: 1.2rem 2rem; 
          border-top: 4px solid var(--accent-navbar); 
          position: sticky; 
          top: 0; 
        }
        .navbar-content { 
          width: 100%; 
          max-width: 800px; 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
        }
        .nav-links { 
          list-style: none; 
          display: flex; 
          gap: 2rem; 
          margin: 0; 
          padding: 0; 
        }
        .navbar a { 
          color: var(--text-navbar); 
          text-decoration: none; 
          font-weight: 600; 
          font-size: 1.1rem; 
          transition: color 0.3s; 
        }
        .navbar a:hover { color: var(--text-navbar-hover); }
        
        .theme-toggle { 
          background: var(--bg-toggle); 
          color: var(--text-navbar); 
          border: none; 
          padding: 0.5rem; 
          border-radius: 50%; 
          cursor: pointer; 
          font-size: 1.2rem; 
          line-height: 0; 
          width: 40px; 
          height: 40px; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          margin-left: 1rem;
        }

        /* --- MAIN CONTENT --- */
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
        
        /* --- MOBILE ADJUSTMENTS --- */
        @media (max-width: 768px) {
          /* 1. Layout fixes */
          .bio-container { flex-direction: column-reverse; }
          .bio-image { width: 70%; margin: 0 auto 2rem; }

          /* 2. NAVBAR FIX - V2 */
          .navbar {
            padding: 0.5rem 0.5rem; /* Drastically reduce padding */
          }
          .navbar-content {
            flex-direction: row;    /* Keep row */
            align-items: center;    /* Vertically center */
          }
          .nav-links {
            flex: 1;                /* Take up all available space */
            display: flex;
            flex-wrap: wrap;        /* ALLOW LINKS TO WRAP IF NEEDED */
            gap: 0.6rem;            /* Smaller gap */
            justify-content: flex-start; /* Align left */
          }
          .theme-toggle {
            flex-shrink: 0;         /* DO NOT allow button to shrink/hide */
            margin-left: 0.5rem;    /* Small gap between links and button */
            width: 36px;            /* Slightly smaller button */
            height: 36px;
          }
          .navbar a {
            font-size: 0.85rem;     /* Smaller text size */
          }

          /* 3. Hero & Other Mobile fixes */
          .hero { min-height: 60vh; display: flex; align-items: center; justify-content: center; }
          .bg-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }
          .overlay { height: 100%; }
          .content { position: relative; padding: 1rem; top: 0; transform: none; left: 0; width: 100%; }
          .card { transform: none; padding: 2rem 1rem; max-width: 95%; margin: 0 auto; }
          .links { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.8rem; }
          .links a { margin: 0; padding: 0.6rem 1rem; font-size: 1rem; white-space: nowrap; }
        }
      `}</style>
    </main>
  );
}