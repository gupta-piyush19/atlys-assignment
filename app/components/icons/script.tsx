import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const Script: React.FC<IconProps> = ({ className = "", size = 14 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M3.50002 4.66667L1.16669 7L3.50002 9.33333M10.5 4.66667L12.8334 7L10.5 9.33333M8.16669 1.75L5.83335 12.25'
        stroke='currentColor'
        strokeOpacity='0.54'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
