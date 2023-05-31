"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
      "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full "
      ${outline ? "bg-light-green" : "bg-grey-light"}
      ${outline ? "bg-green-middle" : "bg-white-1"}
      ${outline ? "text-main-color" : "text-grey-light"}
      ${outline ? "text-green-middle" : "text-beige"}
      ${small ? "py-2" : "py-4"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      `}
      >
        {Icon && <Icon size="30" className="absolute left-10 bottom-22" />}
        {label}
      </button>
    </>
  );
};

export default Button;