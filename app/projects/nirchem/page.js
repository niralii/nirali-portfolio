"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NirchemProject() {
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
            <h1>Nirchem Generative AI System</h1>
            <p className="subtitle">Production multi-agent AI for manufacturing intelligence — QC, compliance, voice, and multimodal</p>
          </header>

          {/* --- DEMO BANNER --- */}
          <div className="demo-banner">
            <div className="demo-banner-content">
              <div>
                <p className="demo-label">Live Demo</p>
                <p className="demo-note">
                  This is a sandboxed demo environment. The production LLM, knowledge base, 
                  and operator data are deployed on-premise at the client facility and are confidential.
                  The demo reflects the system architecture and capabilities only.
                </p>
              </div>
              <a 
                href="https://nirchem-ai-app.azurewebsites.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="demo-btn"
              >
                Open Demo →
              </a>
            </div>
          </div>

          <article className="content">

            {/* --- DESCRIPTION --- */}
            <section className="description-section">
              <h2>What I Built</h2>
              <p>
                Nirchem AI is a production-grade generative AI system I designed and deployed for Nirchem Dyes & Chemicals, a specialty dye manufacturer in Mumbai. The system 
                serves factory operators across quality control, CPCB wastewater compliance monitoring, 
                logistics, and inventory management — replacing manual processes and 200-page English 
                manuals with a conversational AI interface in Hindi, Hinglish, and English.
              </p>
              <p>
                The core architecture is a 6-specialist multi-agent system built on LangGraph, where a 
                supervisor agent routes each query to the appropriate specialist — QC, Production, 
                Compliance, Sales, Logistics, or General — using a combination of keyword matching and 
                LLM-based routing. Each specialist agent has its own tools, system prompt, and knowledge 
                boundary to prevent hallucination across domains.
              </p>
            </section>

            {/* --- ARCHITECTURE --- */}
            <section>
              <h2>System Architecture</h2>

              <div className="arch-grid">
                <div className="arch-card">
                  <span className="arch-icon">🤖</span>
                  <h3>Multi-Agent Orchestration</h3>
                  <p>
                    LangGraph agentic AI system with 6 specialized agents and ReAct-based reasoning. 
                    Keyword and LLM-based hybrid routing directs queries to the correct specialist. 
                    Circuit breaker pattern handles automatic failover between Groq cloud LLM and 
                    on-premise Ollama when API limits or failures occur.
                  </p>
                </div>

                <div className="arch-card">
                  <span className="arch-icon">🔍</span>
                  <h3>RAG Pipeline</h3>
                  <p>
                    Hybrid retrieval combining FAISS vector search and BM25 keyword retrieval, 
                    with BGE sentence embeddings and cross-encoder reranking. Confidence gating 
                    at threshold -2.0 acts as a guardrail — if retrieved context scores below 
                    the threshold, the system declines to answer rather than hallucinate. 
                    RAGAS faithfulness improved from 0.61 → 0.90 across 3 tracked pipeline iterations.
                  </p>
                </div>

                <div className="arch-card">
                  <span className="arch-icon">📊</span>
                  <h3>Evaluation & MLOps</h3>
                  <p>
                    All 3 pipeline iterations tracked via MLflow and Azure ML model registry — 
                    logging RAGAS metrics, model parameters, and retrieval configurations per run. 
                    A 5-stage Azure DevOps CI/CD pipeline with Docker build and an automated 
                    RAGAS quality gate (≥0.85) blocks deployment if evaluation scores regress.
                    Inference token usage tracked via LangSmith with automated threshold alerts.
                  </p>
                </div>

                <div className="arch-card">
                  <span className="arch-icon">🗣️</span>
                  <h3>Voice & Multimodal</h3>
                  <p>
                    Groq Whisper API (whisper-large-v3-turbo) handles voice transcription with 
                    VAD filtering and ambient noise calibration — supporting Hindi, Hinglish, 
                    and English with automatic language detection. LLaVA 13B vision-language 
                    model extracts batch parameters directly from label photographs, eliminating 
                    manual data entry for QC checks.
                  </p>
                </div>

                <div className="arch-card">
                  <span className="arch-icon">🔒</span>
                  <h3>Security & Infrastructure</h3>
                  <p>
                    JWT authentication with role-based access control (QC Operator, Compliance 
                    Officer, Admin). PostgreSQL with PgBouncer connection pooling for concurrent 
                    operator access. Terraform IaC provisions Azure App Service, ACR, and Key Vault. 
                    Prompt injection detection across 13 attack patterns with rate limiting at 
                    200 requests/minute.
                  </p>
                </div>

                <div className="arch-card">
                  <span className="arch-icon">🏭</span>
                  <h3>Dual Deployment</h3>
                  <p>
                    Azure App Service (managed identity, ACR, Key Vault) for the demo and 
                    development environment. On-premise Ubuntu Server + Ollama (Llama 3.1 8B, 
                    4-bit quantized) for the production factory deployment where operational 
                    data cannot leave the factory network. FAISS index baked into the Docker 
                    image at build time to eliminate cold start delays.
                  </p>
                </div>
              </div>
            </section>

            {/* --- LLM EVALUATION --- */}
            <section>
              <h2>LLM Evaluation</h2>
              <p>
                Before settling on the current stack, I evaluated 5 LLMs across zero-shot accuracy 
                and structured output reliability for manufacturing domain queries:
              </p>
              <div className="eval-table">
                <div className="eval-row eval-header">
                  <span>Model</span>
                  <span>Outcome</span>
                </div>
                <div className="eval-row">
                  <span>GPT-4o</span>
                  <span>Strong quality, high cost at production scale</span>
                </div>
                <div className="eval-row">
                  <span>Claude Sonnet</span>
                  <span>Strong reasoning, limited tool-calling reliability</span>
                </div>
                <div className="eval-row">
                  <span>Llama 3.3 70B</span>
                  <span>Fast on Groq, insufficient manufacturing domain accuracy</span>
                </div>
                <div className="eval-row">
                  <span>Llama 4 Scout</span>
                  <span>Good performance, deprecated by provider</span>
                </div>
                <div className="eval-row eval-selected">
                  <span>qwen/qwen3.6-27b ✓</span>
                  <span>Best balance of accuracy, speed, and free tier — deployed with reasoning_effort="none" to suppress chain-of-thought tokens in user responses</span>
                </div>
              </div>
            </section>

            {/* --- PERFORMANCE --- */}
            <section>
              <h2>Performance Metrics</h2>
              <div className="metrics-grid">
                <div className="metric-card">
                  <p className="metric-value">0.90</p>
                  <p className="metric-label">RAGAS Faithfulness</p>
                </div>
                <div className="metric-card">
                  <p className="metric-value">0% </p>
                  <p className="metric-label">Failure Rate (600 requests)</p>
                </div>
                <div className="metric-card">
                  <p className="metric-value">41ms</p>
                  <p className="metric-label">Health Endpoint (from 2400ms)</p>
                </div>
                <div className="metric-card">
                  <p className="metric-value">107/107</p>
                  <p className="metric-label">Tests Passing</p>
                </div>
                <div className="metric-card">
                  <p className="metric-value">3</p>
                  <p className="metric-label">RAG Pipeline Iterations</p>
                </div>
                <div className="metric-card">
                  <p className="metric-value">5</p>
                  <p className="metric-label">LLMs Evaluated</p>
                </div>
              </div>
            </section>

            {/* --- TOOLS --- */}
            <section className="tools-section">
              <h2>Tech Stack</h2>
              <div className="stack-categories">
                <div className="stack-category">
                  <p className="stack-label">GenAI</p>
                  <div className="tech-stack-list">
                    <span>LangGraph</span>
                    <span>LangChain</span>
                    <span>LangSmith</span>
                    <span>Groq</span>
                    <span>Ollama</span>
                    <span>LLaVA 13B</span>
                    <span>Groq Whisper</span>
                    <span>RAGAS</span>
                    <span>MLflow</span>
                    <span>FAISS</span>
                    <span>BGE</span>
                    <span>BM25</span>
                  </div>
                </div>
                <div className="stack-category">
                  <p className="stack-label">Infrastructure</p>
                  <div className="tech-stack-list">
                    <span>Azure App Service</span>
                    <span>Azure DevOps</span>
                    <span>Azure ML</span>
                    <span>Azure Key Vault</span>
                    <span>ACR</span>
                    <span>Docker</span>
                    <span>Terraform</span>
                    <span>FastAPI</span>
                    <span>PostgreSQL</span>
                    <span>PgBouncer</span>
                    <span>JWT</span>
                  </div>
                </div>
              </div>
            </section>

            {/* --- CONFIDENTIALITY NOTE --- */}
            <div className="disclaimer-box">
              <p>
                <strong>Note:</strong> This demo runs on a sandboxed Azure environment with sample data. 
                The production deployment — including the fine-tuned LLM, operator knowledge base, 
                batch records, and compliance data — is deployed on-premise at the client facility 
                and is confidential. The demo is intended to demonstrate system architecture and 
                interaction patterns only.
              </p>
            </div>

          </article>
        </div>
      </main>

      <style jsx>{`
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
          --metric-bg: #ffffff;
          --eval-header-bg: #e8e4dc;
          --eval-selected-bg: #eef2ee;
          --eval-row-border: #e0d9ce;
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
          --metric-bg: #1e1e1e;
          --eval-header-bg: #333;
          --eval-selected-bg: #1a2a1a;
          --eval-row-border: #444;
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
          margin-bottom: 2rem;
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
        .subtitle { font-size: 1.1rem; color: var(--text-sub); line-height: 1.5; }
        h2 { font-size: 1.5rem; color: var(--text-heading); margin-bottom: 1rem; margin-top: 0; }
        h3 { font-size: 1.1rem; color: var(--text-heading); margin-bottom: 0.5rem; margin-top: 0; }

        /* DEMO BANNER */
        .demo-banner {
          background: var(--demo-banner-bg);
          border: 1px solid var(--demo-banner-border);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 3rem;
        }
        .demo-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .demo-label {
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }
        .demo-note {
          font-size: 0.95rem;
          color: var(--text-sub);
          line-height: 1.6;
          margin: 0;
          max-width: 520px;
        }
        .demo-btn {
          flex-shrink: 0;
          padding: 0.75rem 1.5rem;
          background: var(--accent-color);
          color: #fff;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        :global([data-theme="dark"]) .demo-btn { color: #2d2d2d; }
        .demo-btn:hover { opacity: 0.8; }

        /* CONTENT */
        .content section { margin-bottom: 3rem; }
        p { font-size: 1.05rem; line-height: 1.75; color: var(--text-main); margin-bottom: 1rem; }
        p:last-child { margin-bottom: 0; }

        /* ARCH GRID */
        .arch-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .arch-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 10px;
          padding: 1.25rem;
        }
        .arch-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
        .arch-card p { font-size: 0.95rem; color: var(--text-sub); margin: 0; }

        /* EVAL TABLE */
        .eval-table {
          border: 1px solid var(--eval-row-border);
          border-radius: 10px;
          overflow: hidden;
          margin-top: 1rem;
        }
        .eval-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--eval-row-border);
          font-size: 0.95rem;
          gap: 1rem;
        }
        .eval-row:last-child { border-bottom: none; }
        .eval-header {
          background: var(--eval-header-bg);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-sub);
        }
        .eval-selected {
          background: var(--eval-selected-bg);
          font-weight: 600;
          color: var(--text-heading);
        }
        .eval-row span:first-child { font-weight: 600; }

        /* METRICS */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .metric-card {
          background: var(--metric-bg);
          border: 1px solid var(--card-border);
          border-radius: 10px;
          padding: 1.25rem;
          text-align: center;
        }
        .metric-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent-color);
          margin: 0 0 0.25rem 0;
          line-height: 1;
        }
        .metric-label {
          font-size: 0.85rem;
          color: var(--text-sub);
          margin: 0;
          line-height: 1.4;
        }

        /* TOOLS */
        .stack-categories { display: flex; flex-direction: column; gap: 1rem; }
        .stack-category { display: flex; flex-direction: column; gap: 0.5rem; }
        .stack-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-sub);
        }
        .tech-stack-list { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .tech-stack-list span {
          background-color: var(--tag-bg);
          color: var(--text-main);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* DISCLAIMER */
        .disclaimer-box {
          margin-top: 2rem;
          padding: 1.25rem 1.5rem;
          border: 1px solid var(--disclaimer-border);
          border-radius: 10px;
          font-size: 0.95rem;
          color: var(--disclaimer-text);
          line-height: 1.7;
        }
        .disclaimer-box p { margin: 0; font-size: 0.95rem; color: var(--disclaimer-text); }

        @media (max-width: 768px) {
          .project-detail-main { padding: 5rem 1.5rem; }
          h1 { font-size: 1.8rem; }
          .arch-grid { grid-template-columns: 1fr; }
          .metrics-grid { grid-template-columns: repeat(2, 1fr); }
          .eval-row { grid-template-columns: 1fr; gap: 0.25rem; }
          .eval-header span:last-child { display: none; }
          .demo-banner-content { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}
