import React from "react";
import { Close } from "./icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  children,
  className = "",
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in'>
      <div
        className={`bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md relative animate-scale-in hover-lift ${className}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors'
        >
          <Close className='w-6 h-6' size={24} />
        </button>

        {children}
      </div>
    </div>
  );
}
