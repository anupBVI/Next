import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

type AHeaderProps = {
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
};

// export const Acc = styled.div`
//     --bs-accordion-active-bg : #ffffff;
// `

export const Header = styled(Accordion.Header)`
  button:focus {
    box-shadow: none;
  }

  .accordion-button::after {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: none;
    content: "+";
    color:#ff5f5f;
    font-size: 28px;
    font-weight: bold;
    transform: none;
  }
  .accordion-button:not(.collapsed) {
    background: #2cd1e3;
    color: white;
  }
  .accordion-button:not(.collapsed)::after {
    content: "-";
    padding:0px 4px;
    color: white;

  }
`;
