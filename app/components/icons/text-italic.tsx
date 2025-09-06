import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const TextItalic: React.FC<IconProps> = ({
  className = "",
  size = 14,
}) => {
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
        d='M5.24984 1.75005L11.0832 1.75005M2.9165 12.25L8.74984 12.25M8.16651 1.75005L5.83317 12.25'
        stroke='currentColor'
        strokeOpacity='0.54'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
