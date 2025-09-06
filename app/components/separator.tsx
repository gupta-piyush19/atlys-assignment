import React from "react";

interface SeparatorProps {
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ className = "" }) => {
  return <div className={`w-[1px] h-[32px] bg-gray-9 ${className}`} />;
};
