interface SectionTitleProps {
  size?: string;
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
  return (
    <div className="mb-6">
      <div className={`text-${size} font-light text-gray-900 mb-2`}>
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
