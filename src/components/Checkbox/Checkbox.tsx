import React, { ChangeEvent } from "react";
import * as style from "./Checkbox.style";

const { Checkbox, CheckboxError, Label } = style;

interface CheckBoxProps {
  type: string;
  name: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  checked: boolean;
  label: string;
  error?: string;
}

const CustomCheckbox: React.FC<CheckBoxProps> = ({
  checked,
  label,
  id,
  name,
  onChange,
  type,
  error,
}) => {
  return (
    <Checkbox>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <Label htmlFor="terms">Terms and conditions</Label>
      {error && <CheckboxError> {error}</CheckboxError>}
    </Checkbox>
  );
};

export default CustomCheckbox;
