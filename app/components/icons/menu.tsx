import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const Menu: React.FC<IconProps> = ({ className = "", size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='currentColor'
      className={className}
    >
      <path
        fillRule='evenodd'
        d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
      />
    </svg>
  );
};
