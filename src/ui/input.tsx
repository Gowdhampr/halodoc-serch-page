import React from "react";

interface ButtonProps {
  value: string;
  onChange: (val: string) => void;
}
const Input = ({ onChange, value }: ButtonProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border-2 border-gray-500"
    />
  );
};

export default Input;
