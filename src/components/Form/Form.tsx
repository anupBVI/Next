import React, { ChangeEvent, FormEvent, useState } from "react";
import * as style from "./Form.style";
import Button from "../Button/Button";
import { error } from "console";
import CustomInput from "../Input/Input";
import CustomCheckbox from "../Checkbox/Checkbox";
const { FormWrapper, FormContainer, FormInput, Label, Input, Error } = style;

interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
  pAddress: string;
  terms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  pAddress?: string;
  terms?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  password: "",
  address: "",
  pAddress: "",
  terms: false,
};

const initialFormErrors: FormErrors = {};

const validateForm = (formData: FormData) => {
  let errors: FormErrors = {};

  const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (formData.name === "") {
    errors.name = "Please enter your Name";
  } else if (formData.name.length < 4) {
    errors.name = "Name must be at least 4 characters long";
  }
  if (formData.terms === false) {
    errors.terms = "Please agree the terms & conditions";
  }

  if (formData.email === "") {
    errors.email = "Please enter your Email";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
  ) {
    errors.email = "Please enter a valid email address";
  }

  if (formData.address === "") {
    errors.address = "Please enter your Address";
  } else if (formData.address.length < 4) {
    errors.name = "Address must be at least 40 characters long";
  }
  if (formData.pAddress === "") {
    errors.pAddress = "Please enter your Address";
  } else if (formData.pAddress.length < 4) {
    errors.pAddress = "Address must be at least 40 characters long";
  }

  if (formData.password === "") {
    errors.password = "Please enter your Password";
  } else if (!passwordFormat.test(formData.password)) {
    errors.password =
      "Password must contain 1 number 1 capital and 1 small letter and a special character";
  }

  return errors;
};

const validate = (name: string, value: string) => {
  const nameFormat = /^[a-zA-Z]+$/;
  const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  switch (name) {
    case "name":
      if (!nameFormat.test(value)) {
        return "Name only contains letters";
      }
      if (value.length < 4) {
        return "Name must be at least 4 characters long";
      }
      break;
    case "email":
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return "Please enter a valid email address";
      }
      break;

    case "address":
      if (value.length < 4) {
        return "Address only contains letters";
      }
      if (value.length < 4) {
        return "Name must be at least 4 characters long";
      }
      break;
    case "pAddress":
      if (value.length < 4) {
        return "Address only contains letters";
      }
      if (value.length < 4) {
        return "Name must be at least 4 characters long";
      }
      break;

    case "password":
      if (!passwordFormat.test(value)) {
        return "Invalid Password";
      }
      break;
    default:
      return "";
  }
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: inputValue }));
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: validate(name, value),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully", formData);

      setFormData(initialFormData);
      //   setFormErrors(initialFormErrors);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <CustomInput
          placeholder={"Kya hi rakhu"}
          label="Permanent address"
          type="text"
          name="pAddress"
          onChange={handleChange}
          value={formData.pAddress}
          error={formErrors.pAddress}
        />
        <CustomInput
          placeholder={"Haa ye rakhta hu"}
          label="Full name"
          type="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          error={formErrors.name}
        />

        <FormInput>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
          />
          {formErrors.email && (
            <Error>
              <span>{formErrors.email}</span>
            </Error>
          )}
        </FormInput>

        <FormInput>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            id="address"
          />
          {formErrors.address && (
            <Error>
              <span>{formErrors.address}</span>
            </Error>
          )}
        </FormInput>

        <FormInput>
          <Label htmlFor="password">Password</Label>
          <Input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
          />
          {formErrors.password && (
            <Error>
              <span>{formErrors.password}</span>
            </Error>
          )}
        </FormInput>

        <CustomCheckbox
          type="checkbox"
          name="terms"
          id="terms"
          onChange={handleChange}
          checked={formData.terms}
          label="Terms and conditions"
          error={formErrors.terms}
        />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" primary={true} curved={true} label="Register" />
        </div>
      </FormContainer>
    </FormWrapper>
  );
};

export default Form;
