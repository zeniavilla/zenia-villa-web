interface SectionTitleProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
}

function SectionTitle({
  size = 'h3',
  title,
  subtitle,
  link,
  linkText
}: SectionTitleProps) {
  const sizeClasses = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
    h5: 'text-xl',
    h6: 'text-lg',
  };

  return (
    <div className="mb-6">
      <div className={`${sizeClasses[size]} font-medium text-gray-900 mb-2`}>
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
