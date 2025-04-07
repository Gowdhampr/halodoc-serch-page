import React from "react";

interface ButtonProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: { label: string; value: string }[];
  selectedOption?: { label: string; value: string };
  defaultValue?: string;
}
const DropDown = ({
  onChange,
  options,
  selectedOption,
  defaultValue,
}: ButtonProps) => {
  return (
    <select className="border-2 border-gray-500" onChange={onChange}>
      <option value={""}>Search Type...</option>
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          selected={selectedOption?.value === option.value}
          defaultValue={defaultValue}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
