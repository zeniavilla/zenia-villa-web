import { ReactNode } from 'react';

type TextSize = "8xl" | "7xl" | "6xl" | "5xl" | "4xl" | "3xl" | "2xl" | "xl";

interface SectionTitleProps {
  size?: TextSize;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  button?: ReactNode;
}

function SectionTitle({
  size = '6xl',
  title,
  subtitle,
  description,
  image,
  button
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
    <div>
      <div className="flex items-start mb-6 gap-12">
        {/* Photo */}
        {
          image &&
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-light text-sm">
                <img src={image} alt="picture of Zenia Villa"/>
              </div>
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
