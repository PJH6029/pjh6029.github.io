(function () {
  const canvas = document.getElementById('three-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  /* ── Renderer ─────────────────────────────────────────── */
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
  camera.position.z = 90;

  /* ── Config ───────────────────────────────────────────── */
  const COUNT        = 90;
  const SPREAD_X     = 70;
  const SPREAD_Y     = 45;
  const SPREAD_Z     = 18;
  const CONNECT_DIST = 22;
  const SPEED        = 0.035;

  /* ── Particles ────────────────────────────────────────── */
  const pts = Array.from({ length: COUNT }, () => ({
    x : (Math.random() - 0.5) * SPREAD_X * 2,
    y : (Math.random() - 0.5) * SPREAD_Y * 2,
    z : (Math.random() - 0.5) * SPREAD_Z * 2,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
    vz: (Math.random() - 0.5) * SPEED * 0.5,
    blue: Math.random() < 0.14,
  }));

  /* ── Dot meshes ───────────────────────────────────────── */
  const geoBase  = new THREE.SphereGeometry(0.45, 8, 8);
  const matGray  = new THREE.MeshBasicMaterial({ color: 0xa8a8a8 });
  const matBlue  = new THREE.MeshBasicMaterial({ color: 0x0f62fe });

  const meshes = pts.map(p => {
    const m = new THREE.Mesh(geoBase, p.blue ? matBlue : matGray);
    m.position.set(p.x, p.y, p.z);
    scene.add(m);
    return m;
  });

  /* ── Connection lines ─────────────────────────────────── */
  const MAX_SEGS   = COUNT * COUNT;
  const positions  = new Float32Array(MAX_SEGS * 6);
  const lineGeo    = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const lineMat = new THREE.LineBasicMaterial({
    color: 0xa8a8a8,
    transparent: true,
    opacity: 0.28,
  });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  /* ── Mouse ────────────────────────────────────────────── */
  let mx = 0, my = 0;
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* ── Resize ───────────────────────────────────────────── */
  function resize() {
    const el = canvas.parentElement;
    const w  = el.offsetWidth;
    const h  = el.offsetHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement);

  /* ── Animate ──────────────────────────────────────────── */
  function tick() {
    requestAnimationFrame(tick);

    /* move particles */
    pts.forEach((p, i) => {
      p.x += p.vx;  p.y += p.vy;  p.z += p.vz;
      if (Math.abs(p.x) > SPREAD_X) p.vx *= -1;
      if (Math.abs(p.y) > SPREAD_Y) p.vy *= -1;
      if (Math.abs(p.z) > SPREAD_Z) p.vz *= -1;
      meshes[i].position.set(p.x, p.y, p.z);
    });

    /* subtle camera drift with mouse */
    camera.position.x += (mx * 6 - camera.position.x) * 0.03;
    camera.position.y += (-my * 4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);

    /* build line segments */
    let idx = 0;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const dz = pts[i].z - pts[j].z;
        const d  = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < CONNECT_DIST) {
          positions[idx++] = pts[i].x; positions[idx++] = pts[i].y; positions[idx++] = pts[i].z;
          positions[idx++] = pts[j].x; positions[idx++] = pts[j].y; positions[idx++] = pts[j].z;
        }
      }
    }
    /* zero out rest */
    for (let k = idx; k < MAX_SEGS * 6; k++) positions[k] = 0;
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.setDrawRange(0, idx / 3);

    renderer.render(scene, camera);
  }
  tick();
})();
