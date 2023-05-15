import styled from "styled-components";
import DatePicker from "react-datepicker";

export const Con = styled.div``;

export const FormInput = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  margin-bottom:10px;
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
export const Textarea = styled.textarea`
  margin: 0px 0px;
  padding: 8px 4px;
  outline: none;
  border: 1px solid #d1d1d1;
  color: gray;
  border-radius: 5px;
`
export const Select = styled.select`
  margin: 0px 0px;
  padding: 8px 4px;
  outline: none;
  border: 1px solid #d1d1d1;
  color: gray;
  border-radius: 5px;
`
export const Error = styled.div`
  color: #d62240;
`;


export const RadioWrapper = styled.div`
  display: flex;
  flex-direction:column;
`;

export const RadioInput = styled.div`
  display: flex;
  gap: 10px;
  margin:12px 0px ;


`;
export const Radio = styled.div`
  label {
    display: flex;
    gap: 10px;
    input{
      width:14px;
    }
  }
`;

export const Checkbox  = styled.div`
 display: flex;
 gap : 10px;
 input[type="checkbox"] {
    width:20px;
  }
`

export const CheckboxError  = styled.span`
    color:#d62240;

`

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