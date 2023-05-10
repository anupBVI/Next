import React from "react";
import * as style from "./Modal.style";
import { Button, Modal } from "react-bootstrap";

const { ModalContainer, Header, Title, Body, Footer } = style;

interface ICModal {
  show: boolean;
  handleClose: () => void;
  haveFooter?: boolean;
}

const CustomModal = ({
  children,
  ...props
}: { children: React.ReactNode } & ICModal) => {
  const { handleClose, show, haveFooter } = props;

  return (
    <ModalContainer show={show} onHide={handleClose}>
      <Header closeButton>
        <Title>Modal heading</Title>
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
