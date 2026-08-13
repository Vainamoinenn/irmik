import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  hue: 'warm' | 'cool';
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const STAR_COUNT = 170;
const METEOR_EVERY_MS = 5200;

export function Cosmos() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    let stars: Star[] = [];
    const meteors: Meteor[] = [];
    let frameId = 0;
    let lastTime = performance.now();
    let lastMeteor = performance.now();

    const seedStars = () => {
      const { width, height } = canvas;

      stars = Array.from({ length: STAR_COUNT }, (_, index) => ({
        x: ((index * 137.508 + 41) % 100) / 100 * width + Math.sin(index * 7.3) * 12,
        y: ((index * 61.803 + 17) % 100) / 100 * height + Math.cos(index * 3.1) * 12,
        radius: 0.5 + ((index * 29) % 100) / 100 * 1.3,
        baseAlpha: 0.28 + ((index * 13) % 100) / 100 * 0.6,
        twinkleSpeed: 0.4 + ((index * 7) % 100) / 100 * 1.4,
        phase: (index * 0.77) % (Math.PI * 2),
        hue: index % 4 === 0 ? 'warm' : 'cool',
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      seedStars();
    };

    resize();
    window.addEventListener('resize', resize);

    const spawnMeteor = () => {
      const startX = window.innerWidth * (0.15 + Math.random() * 0.6);
      const startY = window.innerHeight * Math.random() * 0.35;

      meteors.push({
        x: startX,
        y: startY,
        vx: -(3.2 + Math.random() * 2.6),
        vy: 2.1 + Math.random() * 1.4,
        life: 0,
        maxLife: 70 + Math.random() * 40,
      });
    };

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 50);
      lastTime = now;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const time = now / 1000;

      for (const star of stars) {
        const twinkle = 0.55 + 0.45 * Math.sin(time * star.twinkleSpeed + star.phase);
        const alpha = star.baseAlpha * twinkle;

        ctx.beginPath();
        ctx.fillStyle = star.hue === 'warm'
          ? `rgba(242, 198, 107, ${alpha})`
          : `rgba(190, 170, 235, ${alpha * 0.85})`;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (now - lastMeteor > METEOR_EVERY_MS) {
        lastMeteor = now;
        spawnMeteor();
      }

      for (let index = meteors.length - 1; index >= 0; index -= 1) {
        const meteor = meteors[index];

        if (!meteor) {
          continue;
        }

        meteor.life += delta / 16.7;
        meteor.x += meteor.vx * (delta / 16.7);
        meteor.y += meteor.vy * (delta / 16.7);

        if (meteor.life > meteor.maxLife) {
          meteors.splice(index, 1);
          continue;
        }

        const progress = meteor.life / meteor.maxLife;
        const alpha = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;
        const tailX = meteor.x - meteor.vx * 16;
        const tailY = meteor.y - meteor.vy * 16;

        const gradient = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 244, 214, ${alpha})`);
        gradient.addColorStop(1, 'rgba(255, 244, 214, 0)');

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 250, 230, ${alpha})`;
        ctx.arc(meteor.x, meteor.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="cosmos" aria-hidden="true" />;
}
