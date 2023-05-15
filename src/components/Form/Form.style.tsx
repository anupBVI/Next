import styled from "styled-components";
import DatePicker from "react-datepicker";


export const FormWrapper = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
`;
export const FormContainer = styled.form`
  width: 60%;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    .dp{
      border: 1px solid #d1d1d1;
      color: gray;
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
  }
`;
export const FormInput = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  margin-bottom : 10px;
`;
export const Label = styled.label`
  color: gray;
`;

export const Input = styled.input`
  margin: 0px 0px;
  padding: 8px 4px;
  outline: none;
  border: 1px solid #d1d1d1;
  color: gray;
  border-radius: 5px;
`;
export const Error = styled.div`
  margin: 0px 0px;
  display: block;

  color: #d62240;
`;
export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioInput = styled.div`
  display: flex;
  gap: 10px;
  margin: 12px 0px;
`;
export const Radio = styled.div`
  label {
    display: flex;
    gap: 10px;
    input {
      width: 14px;
    }
  }
`;

export const Date_Picker = styled(DatePicker)`
   border: 1px solid #d1d1d1;
      color: gray;
      border-radius: 5px;
      width:100%;
      padding:6px 2px;
      &:focus {
        outline: none;
      }
`