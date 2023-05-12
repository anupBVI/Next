import { Placeholder } from "react-bootstrap";
import * as style from "./Input.style";
import React, { ChangeEvent } from "react";
const { FormInput, Label, Input, Error } = style;

interface FormInputProps   {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder ?: any
  
}

const CustomInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder
}) => {
  return (
    <FormInput>
      <Label htmlFor={name}>{label}</Label>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      />
      {error && <Error>{error}</Error>}
    </FormInput>
  );
};

export default CustomInput;
