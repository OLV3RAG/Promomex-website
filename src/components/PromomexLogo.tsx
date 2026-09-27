import React from 'react';
import promomexOfficialLogo from '../PROMOMEX 1.svg';

interface PromomexLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'intro';
  showText?: boolean;
  lightText?: boolean;
}

export const PromomexLogo: React.FC<PromomexLogoProps> = ({
  className = '',
  size = 'md',
  showText = false, // The official SVG already includes PROMOMEX typography
  lightText = true,
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9 max-w-[140px]',
    md: 'h-11 sm:h-12 max-w-[190px]',
    lg: 'h-16 sm:h-20 max-w-[260px]',
    intro: 'h-48 sm:h-60 md:h-72 w-auto max-w-[90vw]',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official PROMOMEX 1.svg rendered directly */}
      <img
        src={promomexOfficialLogo}
        alt="PROMOMEX Inmobiliaria Patrimonial"
        className={`${sizeClasses} object-contain transition-transform duration-300 drop-shadow-[0_2px_12px_rgba(198,160,82,0.25)]`}
        loading={size === 'intro' ? 'eager' : 'lazy'}
      />

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-display text-lg tracking-[0.25em] font-semibold leading-tight ${
              lightText ? 'text-white' : 'text-[#071A2B]'
            }`}
          >
            PROMOMEX
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase text-[#C6A052] font-medium">
            Bienes Raíces
          </span>
        </div>
      )}
    </div>
  );
};
