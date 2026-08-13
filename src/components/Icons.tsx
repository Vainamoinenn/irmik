interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function StarIcon({ size = 20, strokeWidth = 1.7, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12 3 2.5 5.6 6 .6-4.5 4 1.3 5.9L12 16l-5.3 3.1L8 13.2l-4.5-4 6-.6L12 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function HeartIcon({ size = 20, strokeWidth = 1.7, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.84 8.61a5.5 5.5 0 0 0-9.79-3.36L12 6.2l.95-.95a5.5 5.5 0 0 1 7.89 7.67L12 21.54l-8.84-8.62a5.5 5.5 0 0 1 7.89-7.67l.95.95.95-.95a5.5 5.5 0 0 1 7.89 3.36Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 18, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ChevronDownIcon({ size = 18, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ScissorsIcon({ size = 20, strokeWidth = 1.7, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="2.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6" cy="18" r="2.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M8.2 7.8 20 19M8.2 16.2 20 5M13.5 12.7l1.8 1.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function QuoteIcon({ size = 20, className }: Omit<IconProps, 'strokeWidth'>) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.6 13.4c0-4.4 2.5-7.4 6.4-8.7l.7 1.6c-2.3 1.1-3.5 2.7-3.7 4.4.3-.2.8-.3 1.3-.3 1.6 0 2.8 1.2 2.8 2.9 0 1.8-1.3 3-3 3-2.3 0-4.5-1.5-4.5-2.9Zm9.3 0c0-4.4 2.5-7.4 6.4-8.7l.7 1.6c-2.3 1.1-3.5 2.7-3.7 4.4.3-.2.8-.3 1.3-.3 1.6 0 2.8 1.2 2.8 2.9 0 1.8-1.3 3-3 3-2.3 0-4.5-1.5-4.5-2.9Z" />
    </svg>
  );
}

export function SunIcon({ size = 20, strokeWidth = 1.7, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5 5l1.8 1.8M17.2 17.2 19 19M19 5l-1.8 1.8M6.8 17.2 5 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function HomeIcon({ size = 20, strokeWidth = 1.7, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m4 11 8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function CakeIcon({ size = 20, strokeWidth = 1.7, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20h16M5 20v-6.5A1.5 1.5 0 0 1 6.5 12h11a1.5 1.5 0 0 1 1.5 1.5V20M5 15.5c1.2 0 1.2 1.3 2.4 1.3s1.2-1.3 2.3-1.3 1.2 1.3 2.3 1.3 1.2-1.3 2.3-1.3 1.2 1.3 2.3 1.3 1.2-1.3 2.4-1.3M12 12V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 6.2c.9-.8.9-1.9 0-2.7-.9.8-.9 1.9 0 2.7Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function SparkleIcon({ size = 20, className }: Omit<IconProps, 'strokeWidth'>) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2Z" />
    </svg>
  );
}

export function CameraIcon({ size = 20, strokeWidth = 1.7, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="12"
        cy="13"
        r="4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

