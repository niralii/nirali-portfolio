// Example: app/projects/expensio/page.js

"use client";

import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <main className="project-detail">
      <div className="container">
        <Link href="/projects" className="back-link">
          &larr; Back to Projects
        </Link>
        
        <h1>Project Title Goes Here</h1>
        
        <div className="image-placeholder">
          {/* Your project image goes here */}
          <p>Image Placeholder</p>
        </div>

        <div className="content">
          <p>
            Detailed description of the project goes here. You can talk about the
            problem you solved, the challenges you faced, and the final outcome.
          </p>
          
          <h3>Technologies Used</h3>
          <ul>
            <li>Tech 1</li>
            <li>Tech 2</li>
            <li>Tech 3</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .project-detail {
          padding: 4rem 2rem;
          min-height: 100vh;
          background-color: #f5f2ed;
          color: #2c2c2c;
          display: flex;
          justify-content: center;
        }
        .container {
          max-width: 800px;
          width: 100%;
        }
        .back-link {
          display: inline-block;
          margin-bottom: 2rem;
          color: #7b8a7a;
          text-decoration: none;
          font-weight: 600;
        }
        h1 {
          font-size: 2.5rem;
          color: #4a524a;
          margin-bottom: 2rem;
        }
        .image-placeholder {
          width: 100%;
          height: 300px;
          background-color: #e0d9ce;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          margin-bottom: 2rem;
          color: #555;
        }
        .content {
          line-height: 1.8;
          font-size: 1.1rem;
        }
        ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }
      `}</style>
    </main>
  );
}