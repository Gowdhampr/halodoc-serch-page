import React from "react";
import Input from "./input";

interface SearchProps {
  onChange: (val: string) => void;
  value: string;
}
const Search = ({ onChange, value }: SearchProps) => {
  return <Input onChange={onChange} value={value} />;
};

export default Search;
