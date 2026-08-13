import type { CSSProperties } from 'react';

interface ConfettiProps {
  isActive: boolean;
  burstKey: number;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  dx: number;
  peak: number;
  dy: number;
  sway: number;
  spin: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  shape: 'rect' | 'circle' | 'ribbon';
}

const CONFETTI_COLORS = ['#f2c66b', '#e77b9d', '#f6c3d4', '#bdb2f0', '#fffaf0', '#c98a2e'];

const CONFETTI: ConfettiPiece[] = Array.from({ length: 84 }, (_, index) => {
  const side = index % 2 === 0 ? 1 : -1;
  const spread = ((index * 37) % 100) / 100;

  return {
    id: index,
    x: 38 + ((index * 13) % 24),
    y: 68 + ((index * 7) % 12),
    dx: side * (12 + spread * 34),
    peak: -(26 + ((index * 19) % 40)),
    dy: 54 + ((index * 11) % 42),
    sway: (side * (6 + ((index * 23) % 18))),
    spin: (index % 2 === 0 ? 1 : -1) * (260 + ((index * 53) % 420)),
    delay: (index % 9) * 42,
    duration: 2100 + ((index * 17) % 5) * 240,
    color: CONFETTI_COLORS[index % CONFETTI_COLORS.length] ?? '#fffaf0',
    size: 6 + ((index * 7) % 4) * 2,
    shape: index % 3 === 0 ? 'circle' : index % 3 === 1 ? 'ribbon' : 'rect',
  };
});

export function Confetti({ isActive, burstKey }: ConfettiProps) {
  return (
    <div className={`confetti-layer ${isActive ? 'confetti-layer--active' : ''}`} key={burstKey} aria-hidden="true">
      {CONFETTI.map((piece) => (
        <span
          className={`confetti-piece confetti-piece--${piece.shape}`}
          key={piece.id}
          style={
            {
              '--confetti-x': `${piece.x}%`,
              '--confetti-y': `${piece.y}%`,
              '--confetti-dx': `${piece.dx}vw`,
              '--confetti-peak': `${piece.peak}vh`,
              '--confetti-dy': `${piece.dy}vh`,
              '--confetti-sway': `${piece.sway}px`,
              '--confetti-spin': `${piece.spin}deg`,
              '--confetti-delay': `${piece.delay}ms`,
              '--confetti-duration': `${piece.duration}ms`,
              '--confetti-color': piece.color,
              '--confetti-size': `${piece.size}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
