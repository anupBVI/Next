import React, { ChangeEvent, FormEvent, useState } from "react";
import * as style from "./Form.style";
import Button from "../Button/Button";
import {
  CustomInput,
  CustomRadio,
  CustomSelect,
  CustomTextarea,
  CustomCheckbox,
  CustomDatePicker,
} from "../Input/Input";

import "react-datepicker/dist/react-datepicker.css";

const {
  FormWrapper,
  FormContainer,
  Error,
  RadioWrapper,
  Radio,
  RadioInput,
  FormInput,
  Date_Picker,
  Label,
} = style;

interface FormData {
  name: string;
  email: string;
  password: string;
  pAddress: string;
  gender: string;
  country: string;
  date: string;
  terms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  pAddress?: string;
  terms?: string;
  date?: string;
  gender?: string;
  country?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  password: "",
  pAddress: "",
  gender: "",
  country: "",
  date: "",
  terms: false,
};

const initialFormErrors: FormErrors = {};

// VALIDATIONS AFTER SUBMIT
const validateForm = (formData: FormData) => {
  let errors: FormErrors = {};

  const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (formData.name === "") {
    errors.name = "Please enter your Name";
  } else if (formData.name.length < 4) {
    errors.name = "Name must be at least 4 characters long";
  }

  if (formData.email === "") {
    errors.email = "Please enter your Email";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
  ) {
    errors.email = "Please enter a valid email address";
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
  if (formData.terms === false) {
    errors.terms = "Please agree the terms & conditions";
  }
  if (formData.country === "") {
    errors.country = "Please select your country";
  }
  if (formData.gender === "") {
    errors.gender = "Please select your gender";
  }
  if (formData.date === "" || null) {
    errors.date = "Please enter a date";
  }
 

  return errors;
};

// VALIDATIONS ON CHANGE OF THE FIELD
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
      setSelectedDate(null);
      //   setFormErrors(initialFormErrors);
    } else {
      setFormErrors(errors);
    }
  };

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];

  const [selectedDate, setSelectedDate] = useState(null);


  const handleChanges = (e: any) => {
    // console.log(e.toLocaleDateString("en-GB"));
    setSelectedDate(e);

    setFormData((prevFormData) => ({
      ...prevFormData,
      date: e.toLocaleDateString("en-GB"),
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      date: "",
    }));
  };

  
  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <CustomInput
          placeholder={"Name"}
          label="Full name"
          type="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          error={formErrors.name}
        />
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

        {/* SELECT */}
        <CustomSelect
          label="Select country"
          name="country"
          defaultText={"Select your country"}
          options={[
            {
              option: "",
            },
            {
              option: "India",
            },
            {
              option: "Pakistan",
            },
            {
              option: "Afghanistan",
            },
          ]}
          onChange={handleChange}
          value={formData.country}
          error={formErrors.country}
        />
        {/* SELECT */}

        {/* RADIO */}
        <CustomRadio
          mainLabel="Gender"
          label=""
          type="radio"
          name="gender"
          radioOptions={genderOptions}
          onChange={handleChange}
          value={formData.gender}
          error={formErrors.gender}
        />
        {/* RADIO */}

        {/* TEXTAREA */}
        <CustomTextarea
          placeholder={"Enter your address"}
          label="Permanent address"
          type="text"
          name="pAddress"
          onChange={handleChange}
          value={formData.pAddress}
          error={formErrors.pAddress}
        />
        {/* TEXTAREA */}

        

        {/* DATE PICKER */}
        <CustomDatePicker
          name="date"
          id="date"
          label="Select date"
          selected={selectedDate}
          onChange={handleChanges}
          error={formErrors.date}
          placeholderText="Select Date"
          dateFormat="dd/MM/yyyy"
          />
          {/* DATE PICKER */}

         

        {/* <FormInput>
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
        </FormInput> */}

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
