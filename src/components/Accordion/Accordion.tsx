import React from "react";
import Accordion from "react-bootstrap/Accordion";

import * as style from "./Accordion.style";

const { Header } = style;

interface IAccordion {
  defaultActive?: string;
  data: {
    id: string;
    title: string;
    body: any;
  }[];
}
const CustomAccordion = (props: IAccordion) => {
  const { data, defaultActive } = props;
  return (
    <Accordion
     defaultActiveKey={`${defaultActive ? defaultActive : "1"}`}>
      {data.map((item) => {
        const { body, id, title } = item;
        return (
          <Accordion.Item eventKey={id} key={id}>
            <Header>{title}</Header>
            <Accordion.Body>{body}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default CustomAccordion;
