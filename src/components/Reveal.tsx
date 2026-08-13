import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'scale' | 'left' | 'right';
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const show = () => setIsVisible(true);

    if (!('IntersectionObserver' in window)) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        show();
        observer.disconnect();
      },
      {
        root: null,
        rootMargin: '0px 0px -48px 0px',
        threshold: 0.06,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const variantClass = variant === 'up' ? '' : `reveal--${variant}`;

  return (
    <div
      ref={elementRef}
      className={`reveal ${variantClass} ${isVisible ? 'reveal--visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
