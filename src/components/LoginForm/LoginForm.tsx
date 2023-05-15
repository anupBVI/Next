import React, { useState, ChangeEvent, FormEvent } from "react";
import { FormContainer, FormWrapper } from "../Form/Form.style";
import { CustomCheckbox, CustomInput } from "../Input";
import Button from "../Button/Button";

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const initialFormData: FormData = {
  email: "",
  password: "",
  remember: false,
};

const initialFormErrors: FormErrors = {};

// VALIDATIONS AFTER SUBMIT
const validateForm = (formData: FormData) => {
  let errors: FormErrors = {};

  const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (formData.email === "") {
    errors.email = "Please enter your Email";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
  ) {
    errors.email = "Please enter a valid email address";
  }

  if (formData.password === "") {
    errors.password = "Please enter your Password";
  } else if (!passwordFormat.test(formData.password)) {
    errors.password =
      "Password must contain 1 number 1 capital and 1 small letter and a special character";
  }

  return errors;
};

// VALIDATIONS ON CHANGE OF THE FIELD
const validate = (name: string, value: string) => {
  const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  switch (name) {
    case "email":
      if (!emailFormat.test(value)) {
        return "Please enter a valid email address";
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

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  const handleChange = (e: ChangeEvent<any>) => {
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
          placeholder={"Email"}
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          error={formErrors.email}
        />
        <CustomInput
          placeholder={"Password"}
          label="Password"
          type="text"
          name="password"
          onChange={handleChange}
          value={formData.password}
          error={formErrors.password}
        />
        <CustomCheckbox
          type="checkbox"
          name="remember"
          id="remember"
          onChange={handleChange}
          checked={formData.remember}
          label="Remember me"
        />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" primary={true} curved={true} label="Register" />
        </div>
      </FormContainer>
    </FormWrapper>
  );
};

export default LoginForm;
