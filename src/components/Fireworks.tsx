import { useEffect, useRef } from 'react';

interface FireworksProps {
  burstKey: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface Rocket {
  x: number;
  y: number;
  vy: number;
  targetY: number;
  color: string;
}

const PALETTE = ['#f2c66b', '#e77b9d', '#bdb2f0', '#ffe9b8', '#f6c3d4'];

function pickColor(index: number) {
  return PALETTE[index % PALETTE.length] ?? '#f2c66b';
}

export function Fireworks({ burstKey }: FireworksProps) {
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

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];
    let frameId = 0;
    let lastTime = performance.now();
    let lastLaunch = 0;
    let launches = 0;
    let colorIndex = 0;

    const resize = () => {
      const parent = canvas.parentElement;

      if (!parent) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resize();

    const observer = new ResizeObserver(resize);
    const parent = canvas.parentElement;

    if (parent) {
      observer.observe(parent);
    }

    const launchRocket = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      rockets.push({
        x: width * (0.15 + Math.random() * 0.7),
        y: height + 10,
        vy: -(height / 78) * (0.9 + Math.random() * 0.3),
        targetY: height * (0.16 + Math.random() * 0.24),
        color: pickColor(colorIndex),
      });

      colorIndex += 1;
    };

    const explode = (rocket: Rocket) => {
      const count = 64;

      for (let index = 0; index < count; index += 1) {
        const angle = (Math.PI * 2 * index) / count + Math.random() * 0.12;
        const speed = 1.6 + Math.random() * 3.4;

        particles.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 62 + Math.random() * 42,
          color: index % 5 === 0 ? '#fffaf0' : rocket.color,
          size: 1.2 + Math.random() * 1.6,
        });
      }
    };

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 50) / 16.7;
      lastTime = now;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      if (launches < 9 && now - lastLaunch > 620) {
        lastLaunch = now;
        launches += 1;
        launchRocket();
      }

      for (let index = rockets.length - 1; index >= 0; index -= 1) {
        const rocket = rockets[index];

        if (!rocket) {
          continue;
        }

        rocket.y += rocket.vy * delta;

        ctx.beginPath();
        ctx.fillStyle = rocket.color;
        ctx.arc(rocket.x, rocket.y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 244, 214, 0.5)';
        ctx.lineWidth = 1;
        ctx.moveTo(rocket.x, rocket.y + 4);
        ctx.lineTo(rocket.x, rocket.y + 16);
        ctx.stroke();

        if (rocket.y <= rocket.targetY) {
          explode(rocket);
          rockets.splice(index, 1);
        }
      }

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];

        if (!particle) {
          continue;
        }

        particle.life += delta;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.vy += 0.035 * delta;
        particle.vx *= 0.985;

        if (particle.life > particle.maxLife) {
          particles.splice(index, 1);
          continue;
        }

        const alpha = 1 - particle.life / particle.maxLife;

        ctx.beginPath();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [burstKey]);

  return <canvas ref={canvasRef} className="fireworks" aria-hidden="true" />;
}
