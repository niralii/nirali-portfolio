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
          
          <Link href="/projects" className="back-link">
            &larr; Back to Projects
          </Link>

          <header>
            <h1>NLP Research in Online Education</h1>
            <p className="subtitle">Topic Modeling on ACM Learning at Scale (L@S) Papers</p>
          </header>

          <div className="hero-image">
            <img src="/NLP_logo.jpg" alt="NLP Project Header" />
          </div>

          <div className="button-grid">
            <a href="https://huggingface.co/spaces/gtech13/Topic-Modeling-BERTopic-Math-Visualization" target="_blank" rel="noopener noreferrer" className="primary-btn">Live Demo: BERTopic</a>
            <a href="https://huggingface.co/spaces/gtech13/Topic-Modeling-VAE-Math-Visualization" target="_blank" rel="noopener noreferrer" className="primary-btn">Live Demo: Neural VAE</a>
            <a href="https://huggingface.co/spaces/gtech13/Topic-Modeling-BERTopic-Math-Visualization/tree/main" target="_blank" rel="noopener noreferrer" className="secondary-btn">Hugging Face: BERTopic Code</a>
            <a href="https://huggingface.co/spaces/gtech13/Topic-Modeling-VAE-Math-Visualization/tree/main" target="_blank" rel="noopener noreferrer" className="secondary-btn">Hugging Face: VAE Code</a>
          </div>

          <article className="content">
            <section className="description-section">
              <h2>Project Context</h2>
              <p>
                The objective of this project is to analyze longitudinal research trends across 562 academic papers from the ACM Learning at Scale conference. I established a manually labeled ground truth dataset to validate cluster coherence and spatial density.
              </p>
              <p>
                To achieve robust semantic segmentation, I engineered two distinct topic modeling pipelines. To demonstrate the underlying mathematics, the live deployments evaluate the following sample abstract:
              </p>
              <blockquote className="abstract-quote">
                "Students who registered for the Mapping with Google massive open online course (MOOC) were asked several questions during the registration process to identify prior experience with eleven skills as well as their goals for registering for the course. At the end of the course, we compared students' self reports of goal achievement with behavioral click-stream analysis. In addition, we assessed how well prior skill in a subject predicts a student's course completion and found no correlation. Our research shows that students who completed course activities were more likely to earn certificates of completion than peers who did not."
              </blockquote>
            </section>

            {/* --- BERTOPIC SECTION --- */}
            <section className="description-section">
              <h2>Pipeline 1: BERTopic Architecture</h2>
              <div className="architecture-wrapper">
                <img src="/image_1.png" alt="BERTopic Architecture Diagram" className="architecture-img" />
              </div>
              <p>
                Because the abstract only contains 4 sentences, this breakdown highlights the Auto-Fallback Routing engineered to prevent topological math from crashing on micro-datasets.
              </p>
              <ul>
                <li><strong>1. Semantic Embedding:</strong> The pipeline splits the abstract into 4 distinct sentences. These strings pass through the frozen BERT encoder. Mean-pooling squashes the token outputs, transforming each sentence into a dense 384D vector. Document/Sentence 1’s vector captures the spatial geometry of "platform registration," while Document/Sentence 3’s vector captures "predictive correlation."</li>
                <li><strong>2. Dimensionality Reduction & Clustering:</strong> The engine checks dataset size (N=4). Since topological algorithms (UMAP/HDBSCAN) require larger neighborhoods, the pipeline dynamically routes the vectors to fallback algorithms. PCA deterministically projects the 384 dimensions down to a 2D plane. K-Means initializes centroids and forces the 4 coordinates into distinct buckets using Euclidean distance.</li>
                <li><strong>3. Mega-Document Aggregation & Vectorization:</strong> BERTopic concatenates all sentences assigned to Theme 1 into a single "Mega-Document," doing the same for Themes 2 and 3. Total mega-documents = #no of topics.  A CountVectorizer tokenizes these Mega-Documents into unigrams and bigrams (e.g., <code>click stream</code>). A cutomized dynamic <code>max_df</code> threshold autonomously deletes redundant meta-noise (like 'students' or 'course') appearing across all buckets by deleting words appearing in greater than 85% of the total text.</li>
                <li><strong>4. c-TF-IDF Extraction & MMR Reranking:</strong> Class-based TF-IDF scores the vocabulary, measuring term frequency inside Theme 1 and penalizing words that also appear in Themes 2 and 3. Terms like <code>MOOC</code> and <code>certificates</code> receive massive score spikes in their respective clusters. Maximal Marginal Relevance (MMR) applies a cosine similarity penalty to the top-scoring words, eliminating redundant synonyms to yield a diverse semantic representation for each theme.</li>

                <li style={{ marginTop: "1.5rem" }}>
                  <strong>5. Post-Hoc Evaluation Metrics (KPIs):</strong> Because unsupervised clustering pipelines lack a neural "Loss" function, I engineered a mathematical suite to validate the discovered themes:
                  <ul style={{ marginTop: "0.8rem", paddingLeft: "1.2rem", borderLeft: "2px solid var(--accent-color)" }}>
                    <li style={{ marginBottom: "0.8rem" }}>
                      <strong>Topic Diversity:</strong> Measures the uniqueness of the extracted vocabulary.<br/>
                      <code>Math: Unique Words / Total Words</code> <span style={{color: "var(--text-sub)", fontSize: "0.95rem", marginLeft: "10px"}}>Target: 1.0 (No redundancy)</span>
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      <strong>NPMI Coherence:</strong> Measures external semantic logic by calculating the joint probability of the topic's words appearing together in real-world contexts.<br/>
                      <code>Math: log( P(x,y) / P(x)P(y) ) / -log P(x,y)</code> <span style={{color: "var(--text-sub)", fontSize: "0.95rem", marginLeft: "10px"}}>Target: &gt; 0.1</span>
                    </li>
                    <li style={{ marginBottom: "0.8rem" }}>
                      <strong>UMass Coherence:</strong> Measures internal dataset logic. It evaluates if the top words co-occur strictly inside the specific documents provided to the model.<br/>
                      <code>Math: log ( (P(x,y) + ε) / P(x) )</code> <span style={{color: "var(--text-sub)", fontSize: "0.95rem", marginLeft: "10px"}}>Target: Closer to 0</span>
                    </li>
                    <li>
                      <strong>Silhouette Score:</strong> Measures the geometric separation of the document clusters in the latent space (intra-cluster density vs. nearest-cluster distance).<br/>
                      <code>Math: (b - a) / max(a, b)</code> <span style={{color: "var(--text-sub)", fontSize: "0.95rem", marginLeft: "10px"}}>Target: &gt; 0.0</span>
                    </li>
                  </ul>
                </li>
              
              </ul>
            </section>

            {/* --- VAE SECTION --- */}
            <section className="description-section">
              <h2>Pipeline 2: Variational Autoencoder (VAE)</h2>
              <div className="architecture-wrapper">
                <img src="/image_2.png" alt="Neural VAE Architecture Diagram" className="architecture-img" />
              </div>
              <p>
                The Neural VAE relies on Intra-Paper Analysis, splitting the abstract into 4 sentences to track how the narrative shifts from platform setup to analytical results.
              </p>
              <ul>
                <li><strong>1. Dual Input Prep:</strong> The pipeline splits the data. Path A passes the raw sentences to BERT, extracting four 384D semantic vectors. Path B applies preprocessing to remove stop words and build BoW which is the vocabulary. Each sentence undergoes L1 normalization to compute normalized target arrays whose probability distribution for each array sums up to 1 (e.g., S2’s normalized target array becomes <code>[behavioral: 0.25, click-stream: 0.25, analysis: 0.25, achievement: 0.25]</code>).</li>
                <li><strong>2. Contextual Encoding:</strong> The neural network encoder ingests the 384D BERT vectors. It processes the semantic differences between S1 and S2, compressing them into a lower-dimensional latent space. It outputs a mean (μ) and variance (σ) for each sentence, pushing their coordinates into completely different areas of the topic space.</li>
                <li><strong>3. Latent Sampling:</strong> z is a coordinate in topic space sampled to predict the topics. Size of z: (1, No. of topics). ε is random noise drawn from N(0,I) so gradients flow safely backward through μ and σ. The model applies the reparameterization trick (z = μ + σ · ε) to safely sample a point inside the probability cloud for each sentence. Softmax converts these raw coordinates into percentages. S1 becomes <code>[95% Topic 1, 3% Topic 2, 2% Topic 3]</code>, while S2 becomes <code>[2% Topic 1, 96% Topic 2, 2% Topic 3]</code>.</li>
                <li><strong>4. Decoding and Optimization:</strong> The model multiplies S2's 96% mixture against the Decoder's internal Topic-Word matrix to guess the vocabulary. This topic-word matrix is multiple [1 x vocab_size] arrays stacked one below the other.  The PyTorch code nn.Linear(num_topics, vocab_size) creates a matrix with rows equal to topics, and columns equal to vocabulary. 
                When Latent Space outputs a Topic Mixture for a sentence, it outputs a [1 x num_topics] vector. When this is multiplied with topic-word matrix ([num_topics x vocab_size]), the output is a [1 x vocab_size] vector that shows predicted topic probabilities (For example: [0.10, 0.90, 0.00] (10% Topic 1, 90% Topic 2, 0% Topic 3)). Log-softmax is applied here because the "Log" part takes the mathematical logarithm of those percentages. (Computers prefer to work with negative logarithms rather than tiny fractions like 0.00000001 to prevent the math from crashing). This output is the model's guess that S2's dominant Topic 2 corresponds to words like <code>click-stream</code> and <code>behavioral</code>.
                The ELBO objective function calculates the KL-Divergence between the Decoder's guess and S2's actual target. If the Decoder guesses incorrectly, the reconstruction loss explodes. The Adam optimizer executes backpropagation, adjusting matrix weights so Topic 1 officially claims the platform words (<code>MOOC, Google</code>) and Topic 2 claims the methodology words (<code>click-stream, behavioral</code>).</li>
                
              </ul>
            </section>

            {/* --- GROUND TRUTH VALIDATION SECTION --- */}
            <section className="description-section">
              <h2>Ground Truth Validation (Cohen's Kappa)</h2>
              <p>
                Unsupervised models discover latent structures without predefined labels. To measure real world accuracy, I mapped the AI generated clusters back to human defined categories.
              </p>
              <p>
                To ensure a rigorous baseline, the ground truth dataset was constructed using manual annotations from 4 independent researchers across 4 distinct datasets. This consensus smoothed out individual human bias before benchmarking the AI.
              </p>
              
              <h3 style={{ marginTop: "1.5rem", marginBottom: "0.5rem", color: "var(--text-heading)" }}>The Mathematical Formula</h3>
              <p>
                I utilized Cohen's Kappa (κ) to calculate the agreement between the human consensus and the AI. Unlike standard accuracy, Kappa mathematically subtracts the probability of the model guessing correctly by random chance.
              </p>
              <ul style={{ paddingLeft: "1.2rem", borderLeft: "2px solid var(--accent-color)" }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <code>κ = (Po - Pe) / (1 - Pe)</code>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Po (Observed Agreement):</strong> The raw accuracy. The percentage of times the AI and humans chose the exact same label.
                </li>
                <li>
                  <strong>Pe (Expected Chance):</strong> The probability that both parties picked the same label blindly, based on the frequency distribution of the categories.
                </li>
              </ul>

              <h3 style={{ marginTop: "1.5rem", marginBottom: "0.5rem", color: "var(--text-heading)" }}>Calculation Example (Using the Sample Abstract)</h3>
              <p>
                Assume we classify the 4 sentences of our ACM abstract into three domains: <em>Context</em>, <em>Methodology</em>, and <em>Outcomes</em>.
              </p>
              <ul>
                <li>
                  <strong>Human Consensus:</strong> S1 (Context), S2 (Context), S3 (Methodology), S4 (Outcomes).
                </li>
                <li>
                  <strong>AI Prediction:</strong> S1 (Context), S2 (Outcomes), S3 (Methodology), S4 (Outcomes).
                </li>
              </ul>
              
              <p style={{ marginTop: "1rem", fontWeight: "500" }}>Step-by-Step Math:</p>
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>1. Calculate Po:</strong> They agreed on S1, S3, and S4. <br/>
                  <code>Po = 3/4 = 0.75 (75% raw accuracy)</code>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>2. Calculate Pe:</strong> We multiply the probability of the Human choosing a category by the probability of the AI choosing that category. <br/>
                  <em>Context Chance:</em> (2/4 Human) × (1/4 AI) = 0.125<br/>
                  <em>Methodology Chance:</em> (1/4 Human) × (1/4 AI) = 0.0625<br/>
                  <em>Outcomes Chance:</em> (1/4 Human) × (2/4 AI) = 0.125<br/>
                  <code>Pe = 0.125 + 0.0625 + 0.125 = 0.3125</code>
                </li>
                <li>
                  <strong>3. Final Kappa (κ):</strong> <br/>
                  <code>κ = (0.75 - 0.3125) / (1 - 0.3125) = 0.636</code>
                </li>
              </ul>
              <p style={{ marginTop: "1rem" }}>
                <strong>Conclusion:</strong> A Kappa score of 0.636 indicates <em>Substantial Agreement</em>. The AI is genuinely understanding semantic boundaries, not just getting lucky with frequent categories.
                 
              </p>
              <p style={{ marginTop: "1rem" }}>
                <strong>Note:</strong> Eventually for the three published research papers, the score was calculated across the 4 ground-truth datasets built by human 4 annotators.

              </p>
            </section>

            <section className="tools-section">
              <h2>Tech Stack</h2>
              <div className="tech-stack-list">
                <span>Python</span>
                <span>PyTorch</span>
                <span>BERTopic</span>
                <span>Hugging Face Transformers</span>
                <span>Scikit-Learn</span>
                <span>Streamlit</span>
              </div>
            </section>
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
          --accent-color: #7b8a7a;
          --accent-hover: #4a524a;
          --btn-bg: rgba(255, 255, 255, 0.8);
          --btn-hover: #ffffff;
          --tag-bg: #e8e4dc;
          --quote-bg: #eae6df;
          --quote-border: #7b8a7a;
          --img-border: #e0d9ce;
        }

        :global([data-theme="dark"]) {
          --bg-main: #2d2d2d;
          --text-main: #e0e0e0;
          --text-sub: #b0b0b0;
          --text-heading: #f0f0f0;
          --card-bg: #1e1e1e;
          --accent-color: #ffcc66;
          --accent-hover: #ffe082;
          --btn-bg: #444;
          --btn-hover: #555;
          --tag-bg: #444;
          --quote-bg: #3a3a3a;
          --quote-border: #ffcc66;
          --img-border: #444;
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
          margin-bottom: 60px; 
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

        header { margin-bottom: 2rem; }
        h1 { font-size: 2.5rem; color: var(--text-heading); margin-bottom: 0.5rem; line-height: 1.2; }
        .subtitle { font-size: 1.2rem; color: var(--text-sub); }
        h2 { font-size: 1.4rem; color: var(--text-heading); margin-bottom: 1.2rem; margin-top: 3rem;}

        .hero-image {
          width: 100%; border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .hero-image img { width: 100%; height: auto; display: block; }

        .architecture-wrapper {
          width: 100%;
          margin: 1.5rem 0 2rem 0;
          border: 1px solid var(--img-border);
          border-radius: 8px;
          overflow: hidden;
          background: #fff; /* Architecture diagrams usually look best on white backgrounds */
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .architecture-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .button-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .primary-btn, .secondary-btn {
          padding: 0.8rem 1.2rem; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; transition: opacity 0.2s;
        }
        .primary-btn { background-color: var(--accent-color); color: #fff; }
        :global([data-theme="dark"]) .primary-btn { color: #2d2d2d; }
        .secondary-btn { background-color: transparent; border: 2px solid var(--accent-color); color: var(--accent-color); }
        .primary-btn:hover, .secondary-btn:hover { opacity: 0.8; }

        .abstract-quote {
          background-color: var(--quote-bg);
          border-left: 4px solid var(--quote-border);
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          border-radius: 4px;
          font-style: italic;
          font-size: 1rem;
          line-height: 1.6;
        }

        .content section { margin-bottom: 2.5rem; }
        p { font-size: 1.05rem; line-height: 1.7; color: var(--text-main); margin-bottom: 1rem; }
        
        ul { margin-top: 0.5rem; margin-bottom: 1.5rem; padding-left: 1.2rem; }
        li { font-size: 1.05rem; line-height: 1.7; color: var(--text-main); margin-bottom: 1rem; }
        code { background-color: var(--tag-bg); padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.9rem;}

        .tech-stack-list { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1rem;}
        .tech-stack-list span {
          background-color: var(--tag-bg); color: var(--text-main);
          padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.95rem; font-weight: 500;
        }

        @media (max-width: 768px) {
          .project-detail-main { padding: 5rem 1.5rem; }
          h1 { font-size: 2rem; }
          .button-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}