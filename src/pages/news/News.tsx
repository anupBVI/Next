import Form from "@/components/Form/Form";
import CustomModal from "@/components/Modal/Modal";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import React, { useState } from "react";

const News = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <MainLayout>
      News page
      <button onClick={handleClick}>Open Modal</button>
      <br />
      <br />
      <CustomModal show={show} handleClose={handleClose}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis
        consequatur ullam asperiores atque quaerat voluptatibus assumenda
        quibusdam, nesciunt nam harum beatae eius porro sequi maxime hic, dolor
        praesentium sin
      </CustomModal>
      <br />
      <hr />
      <div className="container">

        <Form/>
      </div>
      <br />
      <hr />
    </MainLayout>
  );
};

export default News;
