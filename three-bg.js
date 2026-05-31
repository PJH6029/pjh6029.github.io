(function () {
  'use strict';

  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  /* ── Config ─────────────────────────────────────────── */
  const COUNT        = 80;
  const CONNECT_DIST = 130;   // px — connection threshold
  const SPEED        = 0.4;
  const BLUE_RATIO   = 0.14;  // fraction of IBM Blue nodes

  const COLOR_GRAY   = '#a8a8a8';
  const COLOR_BLUE   = '#0f62fe';
  const COLOR_LINE   = 'rgba(168,168,168,';  // prefix; append opacity + ')'
  const DOT_R        = 2.2;

  /* ── State ───────────────────────────────────────────── */
  let W, H;
  let mouse = { x: -9999, y: -9999 };

  /* ── Particles ───────────────────────────────────────── */
  let pts = [];

  function initParticles() {
    pts = Array.from({ length: COUNT }, () => ({
      x  : Math.random() * W,
      y  : Math.random() * H,
      vx : (Math.random() - 0.5) * SPEED,
      vy : (Math.random() - 0.5) * SPEED,
      blue: Math.random() < BLUE_RATIO,
    }));
  }

  /* ── Resize ───────────────────────────────────────────── */
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = canvas.width  = rect.width;
    H = canvas.height = rect.height;
    initParticles();
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement);
  resize();

  /* ── Mouse ────────────────────────────────────────────── */
  canvas.parentElement.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = mouse.y = -9999;
  });

  /* ── Animate ─────────────────────────────────────────── */
  function tick() {
    ctx.clearRect(0, 0, W, H);

    /* move + bounce */
    for (const p of pts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0)  { p.x = 0;  p.vx *= -1; }
      if (p.x > W)  { p.x = W;  p.vx *= -1; }
      if (p.y < 0)  { p.y = 0;  p.vy *= -1; }
      if (p.y > H)  { p.y = H;  p.vy *= -1; }
    }

    /* connections */
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx   = pts[i].x - pts[j].x;
        const dy   = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.5;
          ctx.beginPath();
          ctx.strokeStyle = COLOR_LINE + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }

    /* mouse repulsion lines */
    for (const p of pts) {
      const dx   = p.x - mouse.x;
      const dy   = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECT_DIST * 1.2) {
        const alpha = (1 - dist / (CONNECT_DIST * 1.2)) * 0.35;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(15,98,254,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    /* dots */
    for (const p of pts) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, DOT_R, 0, Math.PI * 2);
      ctx.fillStyle = p.blue ? COLOR_BLUE : COLOR_GRAY;
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  tick();
})();
