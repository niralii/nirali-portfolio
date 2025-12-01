// File: app/projects/page.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes"; // 1. Import next-themes

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme(); // 2. Use the global theme hook

  // 3. Wait for mount to avoid mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // 4. Return null if not mounted
  if (!mounted) return null;

  // Your Project Data
  const projects = [
    {
      id: 1,
      title: "Expensio: Receipt Tracker SaaS App",
      description: "A full stack AI agents app to calculate and optimize finances.",
      skills: "Next.js 15, ReactJS, Inngest AgentKit, FAISS database, MCP, Amazon Bedrock",
      link: "/projects/expensio", 
      imageAlt: "Expensio Cover"
    },
    {
      id: 2,
      title: "Hearteries",
      description: "A generative AI website that helps healing through art.",
      skills: "ReactJS, vision transformers, GANS, Gemini",
      link: "/projects/hearteries",
      imageAlt: "Hearteries Cover"
    },
    {
      id: 3,
      title: "AI MakerSpace Nexus",
      description: "Built an MLOPs webapp for automation of preprocessing of datasets.",
      skills: "Vertex AI, Google Cloud, Streamlit, Hugging Face, Yolov8, Python",
      link: "/projects/ai-makerspace",
      imageAlt: "AI MakerSpace Cover"
    },
    {
      id: 4,
      title: "NLP Research in Online Education",
      description: "Performed topic modeling and conducted causal inference on 562 academic papers and published three research papers.",
      skills: "Topic modeling, DAG, logistic propensity score matching, BERT, sentence transformer, quantitative analysis, Python",
      link: "/projects/nlp-research",
      imageAlt: "NLP Research Cover"
    },
    {
      id: 5,
      title: "Personalized study groups with AI chatbot",
      description: "Built an online video calling platform for students to study together and get recommendations on their study habits.",
      skills: "ReactJS, Google Firebase, GraphRAG, LangChain, Neo4j Database, Finetuning of LLMs",
      link: "/projects/study-groups",
      imageAlt: "Study Groups Cover"
    },
    {
      id: 6,
      title: "Reinforcement Learning Google Football",
      description: "Coded in the simulated environment to score points against the AI model.",
      skills: "PPO, Actor Critic models, MAPPO, KL Divergence, Docker",
      link: "/projects/rl-football",
      imageAlt: "Google Football Cover"
    },
    {
      id: 7,
      title: "Reinforcement Learning Lunar Lander",
      description: "Used deep Q learning for lunar lander to land successfully in the openai gym environment.",
      skills: "Deep Q Learning",
      link: "/projects/lunar-lander",
      imageAlt: "Lunar Lander Cover"
    },
    {
      id: 8,
      title: "ML for Algorithmic Trading Model",
      description: "Time-series analysis of IBM and JP Morgan stocks from 2009–2015 using supervised learning and Q-learning.",
      skills: "Python, web scraping, data visualization",
      link: "/projects/algo-trading",
      imageAlt: "Algo Trading Cover"
    },
    {
      id: 9,
      title: "WanderAR: AR Education App",
      description: "Developed a full-stack mobile application using React Native and AR to teach geography to school children.",
      skills: "React Native",
      link: "/projects/wander-ar",
      imageAlt: "WanderAR Cover"
    },
  ];

  return (
    // 5. Removed data-theme prop (handled globally now)
    <div className="page-wrapper">
      
      {/* --- HOME LOGO (Top Left) --- */}
      <Link href="/#about" className="home-logo" aria-label="Back to Home">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </Link>

      {/* --- THEME TOGGLE (Top Right) --- */}
      <button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
        className="theme-toggle" 
        aria-label="Toggle Theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <main className="projects-main">
        <div className="projects-container">
          <header>
            <h1>Projects</h1>
            <p className="subtitle">
              A selection of projects I've worked on.
            </p>
          </header>

          <section className="projects-list">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="image-container">
                  <img 
                    src={`https://via.placeholder.com/400x250?text=${encodeURIComponent(project.title)}`}
                    alt={project.imageAlt} 
                  />
                </div>
                <div className="card-content">
                  <h2>{project.title}</h2>
                  <p className="description">{project.description}</p>
                  
                  <div className="skillset">
                    <strong>Tools:</strong> {project.skills}
                  </div>

                  <Link href={project.link} className="view-btn">
                    View Project &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <style jsx>{`
        /* --- VARIABLES REMOVED FROM HERE -> MOVED TO globals.css --- */

        /* --- LAYOUT & TRANSITIONS --- */
        .page-wrapper {
          width: 100%;
          min-height: 100vh;
          background-color: var(--bg-main);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .projects-main {
          display: flex;
          justify-content: center;
          padding: 6rem 2rem 4rem 2rem;
          color: var(--text-main);
        }
        
        .projects-container {
          max-width: 1200px;
          width: 100%;
        }

        /* --- FLOATING CONTROLS (Left & Right) --- */
        :global(.home-logo) {
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--btn-bg);
          color: var(--text-main);
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 2px 5px var(--card-shadow);
          transition: transform 0.2s, background-color 0.3s;
        }
        :global(.home-logo:hover) {
          transform: scale(1.1);
          background: var(--btn-hover);
          color: var(--accent-color);
        }

        .theme-toggle {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 100;
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 50%;
          background: var(--btn-bg);
          color: var(--text-main);
          box-shadow: 0 2px 5px var(--card-shadow);
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, background-color 0.3s;
        }
        .theme-toggle:hover {
          transform: scale(1.1);
          background: var(--btn-hover);
        }

        /* --- HEADER --- */
        header {
          text-align: center;
          margin-bottom: 3rem;
          border-bottom: 2px solid var(--card-border);
          padding-bottom: 1.5rem;
        }
        h1 {
          font-size: 2.8rem;
          color: var(--text-heading);
          margin-bottom: 0.5rem;
          transition: color 0.3s;
        }
        .subtitle {
          font-size: 1.2rem;
          color: var(--text-sub);
          transition: color 0.3s;
        }

        /* --- GRID SYSTEM --- */
        .projects-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        /* --- CARD STYLES --- */
        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px var(--card-shadow);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, background-color 0.3s, border-color 0.3s;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        }
        .image-container {
          width: 100%;
          height: 200px;
          background-color: #ddd;
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-card h2 {
          font-size: 1.4rem;
          color: var(--text-heading);
          margin-bottom: 0.8rem;
          line-height: 1.3;
          transition: color 0.3s;
        }
        .description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-main);
          margin-bottom: 1rem;
          transition: color 0.3s;
        }
        .skillset {
          font-size: 0.9rem;
          color: var(--skill-text);
          background-color: var(--skill-bg);
          padding: 0.5rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          font-style: italic;
          flex-grow: 1;
          transition: background-color 0.3s, color 0.3s;
        }
        .skillset strong {
          color: var(--text-heading);
          font-style: normal;
        }

        /* Link button styles */
        .view-btn {
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
          margin-top: auto;
          display: inline-block;
        }
        .view-btn:hover {
          color: var(--accent-hover);
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 1024px) {
          .projects-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .projects-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}