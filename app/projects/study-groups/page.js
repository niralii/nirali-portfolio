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
            <h1>Personalized AI Study Groups & GraphRAG Chatbot</h1>
            <p className="subtitle">
              A full-stack collaborative learning platform with a Neo4j knowledge graph, 
              GraphRAG pipeline, and Gemini-powered personalized study assistant — 
              deployed on Google Firebase.
            </p>
          </header>

          <div className="hero-image">
            <img 
              src="\ed_tech_logo.PNG" 
              alt="Ed Study Groups Screenshot" 
            />
          </div>

          {/* --- WORKING DEMO BUTTON --- */}
          <div className="demo-banner">
            <a href="https://ed-study.web.app/" target="_blank" rel="noopener noreferrer" className="demo-btn">
              🚀 Working Demo
            </a>
          </div>

          <article className="content">

            <section className="description-section">
              <h2>Description</h2>
              <p>
                Ed Study Groups is a GraphRAG-powered AI study assistant for graduate students. 
                It connects a student's personal learning graph — study sessions, deadlines, 
                and retention scores stored in Neo4j — with population-level research from three 
                real academic datasets (48,000+ students), and uses Google Gemini 2.5 Flash to 
                generate personalized study recommendations grounded in real graph data, not 
                generic advice.
              </p>
              <p>
                The broader platform wraps this AI assistant in a collaborative learning 
                environment with real-time chat, WebRTC peer-to-peer video calls, emoji 
                reactions, file attachments, and course channels — all built on Firebase 
                Firestore and deployed on Google Cloud infrastructure.
              </p>
            </section>

            <section className="description-section">
              <h2>Architecture</h2>
              <p>
                The core pipeline is a <strong>GraphRAG system</strong> built on Neo4j Aura. 
                Student data is modelled as a knowledge graph with nodes and relationships:
                <br /><br />
                <code>Student → HAD_SESSION → StudySession → STUDIED → Subject</code>
                <br />
                <code>Student → HAS_DEADLINE → Deadline → FOR_SUBJECT → Subject</code>
                <br /><br />
                Before every Gemini call, the backend runs targeted Cypher queries scoped to 
                the specific student's UID — keeping context assembly under 200ms regardless 
                of total graph size. The assembled structured context (streak, retention %, 
                peak study hours, upcoming deadlines, procrastination score) is passed to 
                Gemini alongside the user's question to generate a fully personalized response.
              </p>
              <p>
                Three external academic datasets are integrated as aggregated PeerPattern nodes 
                in the same Neo4j graph — enabling the assistant to benchmark a student's 
                behaviour against 48,000+ real peers:
              </p>
              <ul>
                <li>
                  <strong>OULAD (Open University, 32,593 students)</strong> — submission timing, 
                  VLE engagement, and final outcomes. Used to answer questions like "how does my 
                  submission timing compare to students who pass?"
                </li>
                <li>
                  <strong>Kaggle Habits (~2,000 students)</strong> — sleep hours, stress levels, 
                  procrastination scores, and exam results. Used for lifestyle-performance 
                  correlations like sleep impact on retention.
                </li>
                <li>
                  <strong>Zenodo Learning Behavior (14,003 students)</strong> — motivation scores, 
                  learning styles (VARK), assignment completion rates, and final grades. Used for 
                  behavioural pattern advice like "what do A students do differently?"
                </li>
              </ul>
              <p>
                The API layer is built entirely on <strong>Firebase Cloud Functions (Python 3.11, 
                2nd gen)</strong> — replacing a FastAPI backend for serverless production 
                deployment. Six endpoints handle chat, daily brief generation, context retrieval, 
                GraphRAG initialization, user registration, and a scheduled Neo4j keepalive ping 
                every 6 hours to prevent Aura free tier from pausing. Secrets are managed via 
                Google Secret Manager.
              </p>
            </section>

            <section className="description-section">
              <h2>AI Study Assistant Features</h2>
              <p>
                The floating 🎓 assistant panel has three tabs:
              </p>
              <ul>
                <li>
                  <strong>Brief</strong> — Gemini-generated daily study brief using live Neo4j 
                  context: streak status, peak study window, urgent deadlines, and subject 
                  attention alerts.
                </li>
                <li>
                  <strong>Chat</strong> — Full conversational interface with dataset selector 
                  (My Study Data, OULAD, Habits, Behavior). Responses are grounded in real 
                  graph data — the assistant references actual retention percentages, submission 
                  times, and deadline urgency from Neo4j, not generic advice.
                </li>
                <li>
                  <strong>Insights</strong> — Visual bar charts of subject retention % and hours 
                  studied, Neo4j graph diagram showing the knowledge graph structure per dataset, 
                  and a Needs Attention section with one-click study tips.
                </li>
              </ul>
              <p>
                The assistant supports <strong>multi-student switching</strong> — switching between 
                student profiles (each with different study patterns in Neo4j) instantly updates 
                Brief, Chat, and Insights to reflect that student's real graph data, demonstrating 
                how GraphRAG personalizes at the individual level across a shared knowledge graph.
              </p>
            </section>

            <section className="description-section">
              <h2>QLoRA Fine-Tuning Pipeline</h2>
              <p>
                Designed a <strong>continued pre-training with QLoRA fine-tuning pipeline</strong> 
                for Phi-3 Mini 3.8B (Microsoft) using NF4 4-bit quantization on raw student 
                records from all three academic datasets. Rather than manually extracting patterns 
                as Q&A pairs, the model is trained on raw dataset text — allowing it to 
                autonomously discover correlations between submission timing, sleep patterns, 
                motivation, and outcomes across 48,000+ student records.
              </p>
              <p>
                QLoRA freezes the original 3.8B parameters and trains only ~3M parameters in 
                small LoRA adapter matrices (rank=16, targeting q_proj/v_proj layers). NF4 
                quantization compresses the base model to ~2.5GB VRAM — fitting on a T4 GPU 
                for training (Google Colab) and RTX 2060 for local inference via Ollama.
              </p>
              <p>
                The projected outcome is a <strong>90% reduction in per-request prompt tokens</strong> — 
                eliminating the 400-600 token dataset context currently injected into every 
                Gemini call, since the fine-tuned model natively knows the domain patterns 
                without needing them explained.
              </p>
            </section>

            <section className="description-section">
              <h2>Collaboration Platform</h2>
              <p>
                Beyond the AI assistant, the platform includes a full real-time collaboration 
                suite: Firestore-powered live chat with reactions (5-emoji picker), WhatsApp-style 
                emoji keyboard (8 categories, 80+ emojis each), and downloadable file attachments. 
                WebRTC peer-to-peer video calling uses Firebase Firestore for signaling. 
                Google OAuth via Firebase Auth handles authentication. Three courses with 
                four channels each are pre-seeded with realistic academic conversations 
                for demo purposes.
              </p>
            </section>

            <section className="tools-section">
              <h2>Tools Used</h2>
              <div className="tech-stack-list">
                <span>React 18</span>
                <span>Vite</span>
                <span>Firebase Hosting</span>
                <span>Firebase Firestore</span>
                <span>Firebase Auth</span>
                <span>Firebase Cloud Functions</span>
                <span>Python 3.11</span>
                <span>Neo4j Aura</span>
                <span>GraphRAG</span>
                <span>LangChain</span>
                <span>Gemini 2.5 Flash</span>
                <span>Google Secret Manager</span>
                <span>WebRTC</span>
                <span>QLoRA</span>
                <span>Phi-3 Mini 3.8B</span>
                <span>NF4 Quantization</span>
                <span>Ollama</span>
                <span>Cypher</span>
                <span>OULAD Dataset</span>
                <span>Kaggle</span>
                <span>Zenodo</span>
              </div>
            </section>

            <div className="action-buttons">
              <a href="https://ed-study.web.app/" target="_blank" rel="noopener noreferrer" className="primary-btn">
                🚀 Working Demo
              </a>
              <a href="https://github.com/niralii/Ed-Study-" target="_blank" rel="noopener noreferrer" className="secondary-btn">
                GitHub Repo
              </a>
            </div>

            <div className="disclaimer-box">
              <p>
                Demo mode is available without sign-in — click "Try Demo" on the landing page. 
                The AI Study Assistant requires clicking "Connect Neo4j" to load live graph data. 
                Google Sign-In is available for full personalized access.
              </p>
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
          --demo-btn-bg: #4a524a;
          --demo-btn-color: #ffffff;
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
          --demo-btn-bg: #ffcc66;
          --demo-btn-color: #2d2d2d;
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
        .back-link:hover { color: var(--text-main); }

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
        .theme-toggle:hover { transform: scale(1.1); background: var(--btn-hover); }

        header { margin-bottom: 2rem; margin-top: 1.8rem; }
        h1 { font-size: 2.5rem; color: var(--text-heading); margin-bottom: 0.5rem; line-height: 1.2; }
        .subtitle { font-size: 1.2rem; color: var(--text-sub); line-height: 1.6; }
        h2 { font-size: 1.5rem; color: var(--text-heading); margin-bottom: 0.8rem; }

        .hero-image {
          width: 100%; border-radius: 12px; overflow: hidden; margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .hero-image img { width: 100%; height: auto; display: block; }

        /* --- DEMO BANNER --- */
        .demo-banner {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }
        .demo-btn {
          display: inline-block;
          padding: 1rem 2.5rem;
          background-color: var(--demo-btn-bg);
          color: var(--demo-btn-color);
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: transform 0.2s, opacity 0.2s;
          letter-spacing: 0.02em;
        }
        .demo-btn:hover { transform: translateY(-2px); opacity: 0.9; }

        .content section { margin-bottom: 2.5rem; }
        p { font-size: 1.1rem; line-height: 1.7; color: var(--text-main); margin-bottom: 1rem; }
        ul { padding-left: 1.4rem; margin-bottom: 1rem; }
        li { font-size: 1.05rem; line-height: 1.7; color: var(--text-main); margin-bottom: 0.6rem; }
        code {
          background: var(--tag-bg);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.95rem;
          font-family: monospace;
        }

        .tech-stack-list { display: flex; flex-wrap: wrap; gap: 0.8rem; }
        .tech-stack-list span {
          background-color: var(--tag-bg); color: var(--text-main);
          padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.95rem; font-weight: 500;
        }

        .action-buttons { display: flex; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }
        .primary-btn, .secondary-btn {
          padding: 0.8rem 1.5rem; border-radius: 8px; text-decoration: none;
          font-weight: 600; transition: opacity 0.2s; font-size: 1rem;
        }
        .primary-btn { background-color: var(--accent-color); color: #fff; }
        :global([data-theme="dark"]) .primary-btn { color: #2d2d2d; }
        .secondary-btn {
          background-color: transparent;
          border: 2px solid var(--accent-color);
          color: var(--accent-color);
        }
        .primary-btn:hover, .secondary-btn:hover { opacity: 0.8; }

        .disclaimer-box {
          margin-top: 4rem; padding-top: 1.5rem;
          border-top: 1px solid var(--disclaimer-border);
          font-style: italic; color: var(--disclaimer-text); font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .project-detail-main { padding: 5rem 1.5rem; }
          h1 { font-size: 2rem; }
          .demo-btn { font-size: 1rem; padding: 0.85rem 2rem; }
        }
      `}</style>
    </div>
  );
}
