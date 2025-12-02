interface SectionTitleProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
}

function SectionTitle({
  size = 'h1',
  title,
  subtitle,
  link,
  linkText
}: SectionTitleProps) {
  const sizeClasses = {
    h1: 'text-6xl',
    h2: 'text-5xl',
    h3: 'text-4xl',
    h4: 'text-3xl',
    h5: 'text-2xl',
    h6: 'text-xl',
  };

  return (
    <div className="mb-6">
      <div className={`${sizeClasses[size]} font-light text-gray-900 mb-2`}>
        {title}
      </div>
      {subtitle && (
        <p className="text-base text-gray-600 mb-2">{subtitle}</p>
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
