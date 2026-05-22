interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`font-semibold tracking-[0.22em] text-2xl uppercase ${className}`}
    >
      ZENIA
    </span>
  );
}

export default Logo;
