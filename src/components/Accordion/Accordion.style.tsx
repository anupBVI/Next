
import theme from "@/theme";
import styled from "styled-components";

// Define styled components
export const AccordionWrapper = styled.div`
  margin:0;
`;

type TitleProps = {
  titleBackground ? : string;
  padd ? : string
  justify ?: string
  titleSize ?: string
}
export const AccordionTitle = styled.div<TitleProps>`
  display: flex;
  /* justify-content: space-between; */
  justify-content: ${props=>props.justify ? "" : "space-between"};
  gap : 6px;
  align-items: center;
  padding: 10px;
  padding:${props=>props.padd ? props.padd : "10px"};
  background: ${props=>props.titleBackground ? props.titleBackground : " "};
  cursor: pointer;
  user-select: none;
  color: black;
  font-size: 18px;
  font-size: ${props => props.titleSize ? props.titleSize : "18px"};
`;

type AccordionIconProps = {
  transform ? : string
  isOpen: boolean 
}

export const AccordionIcon = styled.div<AccordionIconProps >`
  font-size: 16px;

  color:green;
  /* transform:  ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(180deg)")}; */
  transition: transform 0.2s ease-in-out;
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height .002s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "10px" : "0")};
`;