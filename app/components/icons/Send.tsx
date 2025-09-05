import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const Send: React.FC<IconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      className={className}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
      />
    </svg>
  );
};
