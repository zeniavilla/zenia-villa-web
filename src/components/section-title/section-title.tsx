import { ReactNode } from 'react';

type TextSize = "8xl" | "7xl" | "6xl" | "5xl" | "4xl" | "3xl" | "2xl" | "xl";

interface SectionTitleProps {
  size?: TextSize;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  button?: ReactNode;
  border?: boolean;
}

function SectionTitle({
  size = '6xl',
  title,
  subtitle,
  description,
  image,
  imageAlt,
  button,
  border=false
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
    <div className={`${border ? "border-b border-gray-200 px-8 py-16" : ""}`}>
      <div className="flex items-start mb-6 gap-12">
        {/* Photo */}
        {
          image &&
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
            </div>
          </div>
        }

        {/* Text Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className={`${sizeClasses[size]} font-light text-gray-900 mb-4`}>
                {title}
              </div>
              {
                description &&
                <p className="text-xl text-gray-600 font-light max-w-2xl">{description}</p>
              }
              {subtitle && (
                <p className="text-xl text-gray-500 font-light mb-8">{subtitle}</p>
              )}
            </div>
            {/* Button */}
            {
              button ? button : null
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default SectionTitle;
