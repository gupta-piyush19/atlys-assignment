interface ToolbarButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  active?: boolean;
}

export const ToolbarButton = ({
  onClick,
  icon,
  active = false,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-1 transition-colors w-8 h-8 flex items-center justify-center rounded-md cursor-pointer  ${
        active ? "bg-white shadow-sm" : "hover:bg-white hover:shadow-sm"
      }`}
    >
      {icon}
    </button>
  );
};
