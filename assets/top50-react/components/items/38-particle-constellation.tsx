"use client";

import { useEffect, useRef } from "react";
import { PreviewFrame, makeRng } from "../shared";

export function ParticleConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let width = 1;
    let height = 1;
    const random = makeRng(48);
    const particles = Array.from({ length: 50 }, () => ({ x: random(), y: random(), vx: (random() - 0.5) * 0.6, vy: (random() - 0.5) * 0.6 }));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#a78bfa";
      const points = particles.map((particle) => ({ ...particle, px: particle.x * width, py: particle.y * height }));
      points.forEach((point, index) => {
        if (!reduceMotion) {
          particles[index].x += particles[index].vx / Math.max(width, 1);
          particles[index].y += particles[index].vy / Math.max(height, 1);
          if (particles[index].x < 0 || particles[index].x > 1) particles[index].vx *= -1;
          if (particles[index].y < 0 || particles[index].y > 1) particles[index].vy *= -1;
        }
        context.beginPath(); context.arc(point.px, point.py, 1.5, 0, Math.PI * 2); context.fill();
      });
      for (let left = 0; left < points.length; left++) for (let right = left + 1; right < points.length; right++) { const distance = Math.hypot(points[left].px - points[right].px, points[left].py - points[right].py); if (distance < 80) { context.strokeStyle = `rgba(167,139,250,${1 - distance / 80})`; context.lineWidth = 0.6; context.beginPath(); context.moveTo(points[left].px, points[left].py); context.lineTo(points[right].px, points[right].py); context.stroke(); } }
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);
  return <PreviewFrame title="Animated particle constellation" variant="solid" className="p-0"><canvas ref={canvasRef} role="img" aria-label="Animated constellation of connected particles" className="h-full w-full" /></PreviewFrame>;
}
