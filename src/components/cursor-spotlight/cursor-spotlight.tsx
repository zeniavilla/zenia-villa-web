import { useEffect } from 'react';
import { useTheme } from '@/components/theme-provider';

export function CursorSpotlight() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      document.documentElement.style.setProperty('--cursor-x', `${x}px`);
      document.documentElement.style.setProperty('--cursor-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if(!isDark) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(220,85,230,0.08), transparent 80%)`
      }}
    />
  );
}
