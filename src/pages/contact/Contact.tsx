import Accordion from "@/components/Accordion/Accordion";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import React from "react";
import { BsChevronDown , BsChevronUp } from "react-icons/bs";


const Contact = () => {
  return (
    <MainLayout>
      Contact page
      <br />
      <Accordion
        titleSize={"14px"}
        openIcon={<BsChevronDown />}
        transform={"no"}
        closeIcon={<BsChevronUp />}
        title="Show Details"
        padd={"0px"}
        justify="any string"
      >
        <div>"offer.details"</div>
       
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci error officia.</p>
   
      </Accordion>
    </MainLayout>
  );
};

export default Contact;
