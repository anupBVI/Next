import React from "react";
import * as style from "./Footer.style";
import Grid from "../Grid/Grid";
import { Column } from "./../Grid/Grid.style";
import styled from "styled-components";
import Button from "../Button/Button";
import useLoginModal from "@/Hooks/useLoginModal";
import CustomModal from "../Modal/Modal";

const Content = styled.div`
  /* border: 1px solid red; */
`;
const Footer = () => {
  const { Container } = style;
  const { handleCloseLogin, handleLogin, showLogin } = useLoginModal();
  return (
    <Container>
      <Grid>
        <Column className="col-6 col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <Content>
            <ul>
              Important Links
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <Button primary label="Login" onClick={handleLogin} />
              <CustomModal
                handleClose={handleCloseLogin}
                show={showLogin}
                header="Login footer"
              >
                Login Modal
              </CustomModal>
            </ul>
          </Content>
        </Column>
        <Column className="col-6 col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <Content>
            <ul>
              Important Links
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </Content>
        </Column>
        <Column className="col-6 col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <Content>
            <ul>
              Important Links
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </Content>
        </Column>
        <Column className="col-6 col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <Content>
            <ul>
              Important Links
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </Content>
        </Column>
      </Grid>
    </Container>
  );
};

export default Footer;
