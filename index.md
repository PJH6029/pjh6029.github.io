---
layout: default
title: JeongHun Park
---

<section class="hero">
  <p class="hero__eyebrow">LLM Research · Agent Architectures · Multimodal Reasoning</p>
  <h1>JeongHun Park</h1>
  <p class="hero__lead">
    Seoul National University CSE student researching large language models end-to-end—from pre-training and multimodal extensions to
    post-training, interpretability, and self-refining agent loops powered by personalized memory.
  </p>
  <ul class="hero__meta">
    <li>📍 Seoul, South Korea</li>
    <li><a href="mailto:top321902@snu.ac.kr">top321902@snu.ac.kr</a></li>
    <li><a href="https://github.com/PJH6029" rel="noopener">github.com/PJH6029</a></li>
  </ul>
  <div class="hero__actions">
    <a class="btn btn--primary" href="{{ '/CV_JeonghunPark.pdf' | relative_url }}">Download CV</a>
    <a class="btn" href="mailto:top321902@snu.ac.kr">Start a conversation</a>
  </div>
</section>

<section class="section">
  <h2>Research Snapshot</h2>
  <div class="pill-grid">
    <span>Agent patterns beyond ReAct with API-based tool use</span>
    <span>Retrieval-augmented reasoning and personalized memory</span>
    <span>Multimodal extensions of compact LLMs</span>
    <span>Evaluation pipelines for self-improving agents</span>
  </div>
  <p>
    I am fascinated by recursively improving AI systems that can remember, reason, and take action with minimal human intervention.
    My current work at SNU's Human-Centered Computer System Lab explores how better agent blueprints translate into measurable task accuracy.
  </p>
</section>

<section class="section">
  <h2>Experience</h2>

  <article class="card">
    <header>
      <div>
        <h3>Research Intern · Human-Centered Computer System Lab, SNU</h3>
        <p>Advisor: Prof. Uichin Lee</p>
      </div>
      <span class="card__date">Apr. 2024 – Present</span>
    </header>
    <ul>
      <li>Advance the <strong>Lumo</strong> natural-language agent project by rethinking API-based tool-calling architectures.</li>
      <li>Prototype new agent patterns beyond ReAct, benchmark them against complex tasks, and iterate quickly on promising ideas.</li>
      <li>Shifted focus from prompt-only tuning toward structural agent changes to unlock higher reliability.</li>
    </ul>
  </article>

  <article class="card">
    <header>
      <div>
        <h3>Software Engineering Intern · FADU</h3>
        <p>Seoul, South Korea</p>
      </div>
      <span class="card__date">Jul. 2024 – Aug. 2024</span>
    </header>
    <ul>
      <li>Built a Retrieval-Augmented Generation chatbot so engineers can query proprietary technical specifications.</li>
      <li>Integrated multiple LLM providers and vector databases into a modular pipeline for reliability and scale.</li>
    </ul>
  </article>

  <article class="card">
    <header>
      <div>
        <h3>Teaching Assistant · Seoul National University</h3>
      </div>
      <span class="card__date">Sep. 2022 – Present</span>
    </header>
    <p>Courses supported:</p>
    <ul>
      <li>Computer Programming (2022 Fall, Prof. Lee)</li>
      <li>Logic Design (2024 Spring, Prof. Lee)</li>
      <li>Programming Practice (2024 Fall, Prof. Jeon)</li>
      <li>Basic Computing (2024 Fall, Prof. Kim; 2025 Spring, Prof. Yamada)</li>
    </ul>
  </article>

  <article class="card">
    <header>
      <div>
        <h3>Information Systems Operator · Republic of Korea Air Force</h3>
        <p>Mandatory Military Service</p>
      </div>
      <span class="card__date">Apr. 2022 – Jan. 2024</span>
    </header>
    <ul>
      <li>Maintained the official Air Force website and secure internal networks as both operator and security manager.</li>
      <li>Improved reliability of mission-critical infrastructure while completing national service.</li>
    </ul>
  </article>
</section>

<section class="section">
  <h2>Projects</h2>
  <div class="card-grid">
    <article class="card">
      <header>
        <div>
          <h3>ARC-AGI Task Solver with LoRA</h3>
          <p>Fine-tuned Qwen3-4B · 2025 Spring</p>
        </div>
      </header>
      <ul>
        <li>LoRA adapters plus tailored data augmentation to learn systematic ARC-AGI reasoning.</li>
        <li>Pipeline blends few-shot prompting, test-time training, and majority voting for robust inference.</li>
        <li>Custom loss surfaces capture informative gradients from scarce examples, boosting sample efficiency.</li>
      </ul>
    </article>

    <article class="card">
      <header>
        <div>
          <h3>Minimal Deep Learning Framework</h3>
          <p>Research framework · 2024 Winter</p>
        </div>
      </header>
      <ul>
        <li>PyTorch-like define-by-run engine with GPU acceleration through CuPy.</li>
        <li>Implemented dynamic computation graphs plus a scratch-built autograd system.</li>
      </ul>
    </article>

    <article class="card">
      <header>
        <div>
          <h3>Perspective-Switching RPG</h3>
          <p>Unity · 2024 Fall</p>
        </div>
      </header>
      <ul>
        <li>Led system design, GitHub/Slack integration, and CI/CD for a cross-disciplinary game team.</li>
        <li>Delivered seamless transitions between 2D and 3D gameplay perspectives.</li>
      </ul>
    </article>

    <article class="card">
      <header>
        <div>
          <h3>National Defense AI Hackathon</h3>
          <p>Radar signal classification</p>
        </div>
      </header>
      <ul>
        <li>Directed a team building CNN-based radar classifiers for military datasets.</li>
        <li>Proved that rapid prototyping with open-source tooling can meet defense-grade requirements.</li>
      </ul>
    </article>
  </div>
</section>

<section class="section section--split">
  <div>
    <h2>Education</h2>
    <p><strong>B.S. Computer Science & Engineering</strong><br/>Seoul National University · Mar. 2020 – Feb. 2026 (expected)</p>
    <ul>
      <li>GPA 3.9/4.3 (≈ 4.1/4.5); Major GPA 4.07/4.3 (≈ 4.25/4.5)</li>
      <li>Coursework: Artificial Intelligence, Mathematical Foundations of Deep Neural Networks, Operating Systems</li>
    </ul>
  </div>

  <div>
    <h2>Technologies</h2>
    <p class="tech-list"><strong>ML/AI:</strong> PyTorch, TensorFlow, LangChain, Google ADK</p>
    <p class="tech-list"><strong>Software:</strong> Python, C/C++, C#, Java, Kotlin, Spring Boot, Django</p>
  </div>
</section>

<section class="section">
  <h2>Let’s Collaborate</h2>
  <p>
    I enjoy fast-paced collaborations on language agents, multimodal understanding, and systems where LLMs interact with real tools.
    Whether you are building a research prototype or shipping a product, feel free to reach out—I’m always up for ambitious ideas.
  </p>
  <a class="btn btn--primary" href="mailto:top321902@snu.ac.kr">Contact me</a>
</section>
