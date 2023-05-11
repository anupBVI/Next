import React, { ChangeEvent, FormEvent, useState } from "react";
import * as style from "./Form.style";
import Button from "../Button/Button";
const { FormWrapper, FormContainer, FormInput, Label, Input, Error } = style;

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, name, password } = formData;

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState<FormErrors>({});

  const validateForm = () => {
    let err: FormErrors = {};
    if (name === "") {
      err.name = "Please Enter your Name Id";
    }
    if (email === "") {
      err.email = "Please Enter your Email Id";
    }

    if (password === "") {
      err.password = "Please enter your password";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
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
          return "Name must be at least 4 characters long.";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          return "Name can only contain letters.";
        }
        break;
      case "email":
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          return "Please enter a valid email address.";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    let isValid = validateForm();
    console.log("formData", isValid);
    if (isValid) {
      alert("all good");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }else{
      setErrors({
        name : "dfadkfadfkn",
        email : "dfadkfadfkn",
        password : "dfadkfadfkn",
      })
    }
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput>
          <Label htmlFor="name">Full name</Label>
          <Input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            id="name"
          />
          {errors.name && (
            <Error>
              <span>{errors.name}</span>
            </Error>
          )}
        </FormInput>
        <FormInput>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            id="email"
          />
          {errors.email && (
            <Error>
              <span>{errors.email}</span>
            </Error>
          )}
        </FormInput>

        <FormInput>
          <Label htmlFor="password">Password</Label>
          <Input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            id="password"
          />
          {errors.password && (
            <Error>
              <span>{errors.password}</span>
            </Error>
          )}
        </FormInput>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button primary curved label="Register" />
        </div>
      </FormContainer>
    </FormWrapper>
  );
};

export default Form;
