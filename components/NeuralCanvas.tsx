"use client";

import { useEffect, useRef } from "react";

/**
 * A 3D rotating "neural sphere": points distributed on a sphere via the
 * Fibonacci lattice, projected to 2D with perspective, connected by lines when
 * close. Reacts to pointer movement. Ported and enhanced from the design
 * reference. Purely decorative.
 */
export default function NeuralCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0;
    let H = 0;

    const N = 120;
    const pts: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < N; i++) {
      const t = Math.acos(1 - (2 * (i + 0.5)) / N);
      const p = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push({
        x: Math.sin(t) * Math.cos(p),
        y: Math.sin(t) * Math.sin(p),
        z: Math.cos(t),
      });
    }

    const m = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      m.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      m.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    const resize = () => {
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    window.addEventListener("resize", resize);
    resize();

    let ry = 0;
    let raf = 0;

    const draw = () => {
      if (cv.clientWidth !== W || cv.clientHeight !== H) resize();
      if (!W || !H) {
        raf = requestAnimationFrame(draw);
        return;
      }
      m.x += (m.tx - m.x) * 0.05;
      m.y += (m.ty - m.y) * 0.05;
      ry += reduce ? 0 : 0.0022;

      const cx = W * 0.26;
      const cy = H * 0.46;
      const R = Math.min(W, H) * 0.4;
      const ax = m.y * 0.6;
      const ay = ry + m.x * 0.9;

      const pr = pts.map((p) => {
        const x1 = p.x * Math.cos(ay) - p.z * Math.sin(ay);
        const z1 = p.x * Math.sin(ay) + p.z * Math.cos(ay);
        const y1 = p.y * Math.cos(ax) - z1 * Math.sin(ax);
        const z2 = p.y * Math.sin(ax) + z1 * Math.cos(ax);
        const s = 2.6 / (2.6 - z2);
        return { X: cx + x1 * R * s, Y: cy + y1 * R * s, z: z2, s };
      });

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pr[i];
          const b = pr[j];
          const dx = a.X - b.X;
          const dy = a.Y - b.Y;
          const d = dx * dx + dy * dy;
          if (d < 4200) {
            const al = ((1 - d / 4200) * 0.5 * ((a.z + b.z) / 2 + 1.1)) / 2;
            ctx.strokeStyle = "rgba(245,196,81," + al.toFixed(3) + ")";
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.X, a.Y);
            ctx.lineTo(b.X, b.Y);
            ctx.stroke();
          }
        }
      }

      for (const p of pr) {
        const al = (p.z + 1.2) / 2.4;
        ctx.fillStyle =
          (p.z > 0.55 ? "rgba(45,212,191," : "rgba(245,196,81,") +
          (al * 0.9).toFixed(3) +
          ")";
        ctx.beginPath();
        ctx.arc(p.X, p.Y, 1.5 * p.s, 0, 7);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
