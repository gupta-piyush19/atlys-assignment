import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const Plus: React.FC<IconProps> = ({ className = "", size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M3.75 9H9M14.25 9H9M9 9V3.75M9 9V14.25'
        stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
