import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}
const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-300 border-0 p-1.5 cursor-pointer disabled:bg-gray-400"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
