import theme from "@/theme";
import styled from "styled-components";

type ButtonProps = {
  rounded?: boolean;
  curved?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  danger?: boolean;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.primary
      ? "#2b94d4"
      : props.secondary
      ? "#999999"
      : props.tertiary
      ? "#268085"
      : props.danger
      ? "#ab305b"
      : "black"};
  color: white;
  width: 100px;
  padding: 4px 4px;
  border: none;
  border-radius: ${(props) => props.rounded && "20px"};
  border-radius: ${(props) => props.curved && "5px"};
  transition: 0.01s linear;
  cursor: pointer;
  &:hover {
    scale:0.97;
    color: #fff;
    background: ${(props) =>
      props.primary
        ? "#093a80"
        : props.secondary
        ? "#6c6c6c"
        : props.tertiary
        ? "#006c6a"
        : props.danger
        ? "#6f0f27"
        : "gray"};
  }
`;
