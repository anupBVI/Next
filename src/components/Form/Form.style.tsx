import styled from "styled-components";

export const FormWrapper = styled.div`
    /* border:1px solid red; */
    padding:12px;
    display: flex;
    justify-content: center;
`
export const FormContainer = styled.form`
    width: 60%;
    border:1px solid #ebebeb;
    border-radius:5px;
    padding:12px;
    display: flex;flex-direction:column;gap:10px;
    
`
export const FormInput = styled.div`
   /* border:1px solid blue; */
   padding:0px;
   display:flex;
   flex-direction:column;
`
export const Label = styled.label`
   color:gray;
`
export const Input  = styled.input`
   margin:0px 0px;
   padding : 8px 4px;
   outline:none;
   border:1px solid #d1d1d1;
   color:gray;
   border-radius:5px;
`
export const Error  = styled.div`
   margin:0px 0px;
   span{
    color:#d62240
   }
`


