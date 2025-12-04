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
    "8xl": "text-4xl md:text-6xl lg:text-8xl",
    "7xl": "text-3xl md:text-5xl lg:text-7xl",
    "6xl": "text-3xl md:text-4xl lg:text-6xl",
    "5xl": "text-2xl md:text-4xl lg:text-5xl",
    "4xl": "text-2xl md:text-3xl lg:text-4xl",
    "3xl": "text-xl md:text-2xl lg:text-3xl",
    "2xl": "text-lg md:text-xl lg:text-2xl",
    "xl": "text-base md:text-lg lg:text-xl"
  };

  return (
    <div className={`${border ? "border-b border-gray-200 py-8 md:py-12 lg:py-16" : ""}`}>
      <div className="flex flex-col md:flex-row items-start mb-4 md:mb-6 gap-6 md:gap-8 lg:gap-12">
        {/* Photo */}
        {
          image &&
          <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden">
              <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
            </div>
          </div>
        }

        {/* Text Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6">
            <div className="flex-1">
              <div className={`${sizeClasses[size]} font-light text-gray-900 mb-3 md:mb-4`}>
                {title}
              </div>
              {
                description &&
                <p className="text-base md:text-lg lg:text-xl text-gray-600 font-light max-w-2xl">{description}</p>
              }
              {subtitle && (
                <p className="text-base md:text-lg lg:text-xl text-gray-500 font-light mb-6 md:mb-8">{subtitle}</p>
              )}
            </div>
            {/* Button */}
            {
              button && <div className="flex-shrink-0">{button}</div>
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default SectionTitle;
