import { cardImage } from "@/assets";
import Accordion from "@/components/Accordion/Accordion";
import Card from "@/components/Card/Card";
import Grid from "@/components/Grid/Grid";
import CustomModal from "@/components/Modal/Modal";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import theme from "@/theme";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";

const Services = () => {
  const Container = styled.div`
    border: 1px solid transparent;
  `;
  const Row = styled.div``;
  const Column = styled.div``;

  const cards = new Array(8).fill(null);

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

  const AData = [
    {
      id: "one",
      title: "Accordion 1",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eumsit consequuntur a earum deserunt reicieninventore eveniet",
      open: true,
    },
    {
      id: "two",
      title: "Accordion 2",
      body: (
        <>
          <div>
            <h3>Heading</h3>
            <span>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              fuga molestias tempore.
            </span>
            <br />
            <button onClick={() => alert("Haa")}> Sumbit </button>
          </div>
        </>
      ),
    },
    {
      id: "three",
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

      

      <Button variant="danger" onClick={handleShow}>
        Launch demo modal
      </Button>

   

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
        <Accordion data={AData} />
      </div>

      <br />








      <CustomModal show={show} handleClose={handleClose} haveFooter>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint perspiciatis similique.
        </CustomModal>
    </MainLayout>
  );
};

export default Services;
