import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const LinkArrow: React.FC<IconProps> = ({
  className = "",
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='currentColor'
      className={className}
    >
      <path d='M3 4a1 1 0 000 2h4.586l-4.293 4.293a1 1 0 101.414 1.414L9 7.414V12a1 1 0 102 0V4a1 1 0 00-1-1H3z' />
    </svg>
  );
};
