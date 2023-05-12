import React from "react";
import * as style from "./Modal.style";
import { Button } from "react-bootstrap";

const { ModalContainer, Header, Title, Body, Footer } = style;

interface ICModal {
  show: boolean;
  header?: string;
  handleClose: () => void;
  haveFooter?: boolean;
}

const CustomModal = ({
  children,
  ...props
}: { children: React.ReactNode } & ICModal) => {
  const { handleClose, show, haveFooter, header } = props;

  return (
    <ModalContainer show={show} onHide={handleClose}>
      <Header closeButton>
        <Title> {header ? header : "Modal heading"} </Title>
      </Header>

      <Body>{children}</Body>

      {haveFooter && (
        <Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Footer>
      )}
    </ModalContainer>
  );
};

export default CustomModal;
