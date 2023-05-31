"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 w-auto hover:bg-light-green transition font-semibold text-green-middle"
    >
      {label}
    </div>
  );
};

export default MenuItem;
