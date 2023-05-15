import { cardImage } from "@/assets";
import CustomAccordion from "@/components/Accordion/Accordion";
import Accordion from "@/components/Accordion/Accordion";
import Card from "@/components/Card/Card";
import Form from "@/components/Form/Form";
import Grid from "@/components/Grid/Grid";
import LoginForm from "@/components/LoginForm/LoginForm";
import CustomModal from "@/components/Modal/Modal";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import theme from "@/theme";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";

const Services = () => {
  const Column = styled.div``;

  const data = [
    {
      id: 1,
      title: "Card title 11",
    },

    {
      id: 1,
      title: "Card title 2",
    },

    {
      id: 1,
      title: "Card title 3",
    },

    {
      id: 1,
      title: "Card title 4",
    },

    {
      id: 1,
      title: "Card title 5",
    },

    {
      id: 1,
      title: "Card title 6",
    },

    {
      id: 1,
      title: "Card title 7",
    },

    {
      id: 1,
      title: "Card title 8",
    },
  ];

  const [showAccModal, setShowaccModal] = useState(false);
  const handleCloseAccModal = () => setShowaccModal(false);
  const handleShowAccModal = () => setShowaccModal(true);

  const AData = [
    {
      id: "1",
      title: "Accordion 1",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eumsit consequuntur a earum deserunt reicieninventore eveniet",
      // open: true,
    },
    {
      id: "2",
      title: "Accordion 2",
      body: (
        <>
          <div>
            <span>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              fuga molestias tempore.
            </span>
            <br />
            <Button onClick={handleShowAccModal}> Sumbit </Button>
          </div>
        </>
      ),
    },
    {
      id: "3",
      title: "Accordion 3",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eumsit consequuntur a earum deserunt reicieninventore eveniet",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MainLayout>
      <hr />
      <Form />
      <hr />
      
      Login form

      <LoginForm/>







      <hr />

      <Grid data={data}>
        {data.map((item, index) => {
          return (
            <Column
              key={item.id}
              className="col-6 col-lg-3 col-md-4 col-sm-6 col-xs-6"
            >
              <Card item={item} />
            </Column>
          );
        })}
      </Grid>
      <br />
      <hr />

      <br />

      <div className="container">
        <CustomAccordion data={AData} defaultActive="2" />
      </div>
      <br />

      <CustomModal show={show} handleClose={handleClose} haveFooter>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        sint perspiciatis similique.
      </CustomModal>

      <CustomModal
        header="Accordion Modal"
        show={showAccModal}
        handleClose={handleCloseAccModal}
        haveFooter
      >
        Modal body for Accordion
      </CustomModal>
    </MainLayout>
  );
};

export default Services;
