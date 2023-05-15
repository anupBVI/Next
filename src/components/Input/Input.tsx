import { Placeholder } from "react-bootstrap";
import * as style from "./Input.style";
import React, { ChangeEvent } from "react";

const {
  FormInput,
  Label,
  Input,
  Textarea,
  Select,
  Error,
  RadioWrapper,
  RadioInput,
  Radio,
  Checkbox,
  CheckboxError,
  Date_Picker,
} = style;

export interface FormInputProps {
  label: string;
  name: string;
  value?: string;
  mainLabel?: string;
  checked?: boolean;
  id?: string;
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  error?: string;
  type?: string;
  placeholder?: any;
  defaultText?: string;
  options?: {
    option: string;
  }[];
  radioOptions?: {
    label: string;
    value: string;
  }[];
}

export const CustomInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
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

export const CustomTextarea: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}) => {
  return (
    <FormInput>
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        cols={1}
        rows={4}
      />
      {error && <Error>{error}</Error>}
    </FormInput>
  );
};

export const CustomSelect: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  defaultText,
  value,
  options,
  onChange,
  error,
}) => {
  return (
    <FormInput>
      <Label htmlFor={name}>{label}</Label>
      <Select name={name} value={value} onChange={onChange}>
        {options?.map((item) => {
          return (
            <option value={item.option === defaultText ? "" : item.option}>
              {item.option === "" ? defaultText : item.option}
            </option>
          );
        })}
      </Select>
      {error && <Error>{error}</Error>}
    </FormInput>
  );
};

export const CustomRadio: React.FC<FormInputProps> = ({
  mainLabel,
  name,
  type,
  value,
  radioOptions,
  onChange,
  error,
}) => {
  return (
    <RadioWrapper>
      <RadioInput>
        <Label>{mainLabel} :</Label>
        {radioOptions?.map((option) => (
          <Radio key={option.value}>
            <Label key={option.value}>
              <input
                type={type}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
              />
              {option.label}
            </Label>
          </Radio>
        ))}
      </RadioInput>
      {error && <Error>{error}</Error>}
    </RadioWrapper>
  );
};

export const CustomCheckbox: React.FC<FormInputProps> = ({
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
      <Label htmlFor="terms">{label}</Label>
      {error && <CheckboxError> {error}</CheckboxError>}
    </Checkbox>
  );
};

interface CustomDatePickerProps {
  name: string;
  label: string;
  id: string;
  selected?: string | null;
  onChange?: (e:any)=>void;
  placeholderText: string;
  dateFormat: string;
  error?: string;
}
export const CustomDatePicker: React.FC<CustomDatePickerProps>= ({
  name,id,dateFormat,error,onChange,placeholderText,selected,label
}) => {
  return (
    <FormInput>
      <Label htmlFor="date">{label}</Label>
      <Date_Picker
        name={name}
        id={id}
        selected={selected&&selected}
        onChange={onChange}
        placeholderText={placeholderText}
        dateFormat={dateFormat}
        errors={error}
      />

      {error && <Error>{error}</Error>}
    </FormInput>
  );
};
