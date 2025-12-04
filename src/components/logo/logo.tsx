interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

function Logo({ width = 48, height = 48, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Z */}
      <path
        d="M8 12 L20 12 L8 30 L20 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* V */}
      <path
        d="M28 12 L34 30 L40 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Logo;
