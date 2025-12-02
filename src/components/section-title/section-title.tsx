type TextSize = "8xl" | "7xl" | "6xl" | "5xl" | "4xl" | "3xl" | "2xl" | "xl";

interface SectionTitleProps {
  size?: TextSize;
  title: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
}

function SectionTitle({
  size = '8xl',
  title,
  subtitle,
  link,
  linkText
}: SectionTitleProps) {
  const sizeClasses: Record<TextSize, string> = {
    "8xl": "text-8xl",
    "7xl": "text-7xl",
    "6xl": "text-6xl",
    "5xl": "text-5xl",
    "4xl": "text-4xl",
    "3xl": "text-3xl",
    "2xl": "text-2xl",
    "xl": "text-xl"
  };

  return (
    <div className="mb-6">
      <div className={`${sizeClasses[size]} font-light text-gray-900 mb-2`}>
        {title}
      </div>
      {subtitle && (
        <p className="text-2xl text-gray-500 font-light mb-2">{subtitle}</p>
      )}
      {link && linkText && (
        <a
          href={link}
          className="text-blue-600 hover:underline"
        >
          {linkText}
        </a>
      )}
    </div>
  );
}

export default SectionTitle;
