import React, { ReactComponentElement } from "react";
import * as style from "./Accordion.style";

const { AHeader } = style;

interface IAccordion {
  data: {
    id: string;
    title: string;
    body: string | React.ReactNode
    open?: boolean;
  }[];
}
const Accordion = (props: IAccordion) => {
  return (
    <div className="accordion" id="accordionExample">
      {props.data.map((item, index) => {
        return (
          <div className="accordion-item">
            <AHeader className="accordion-header" id={item.title}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-controls={item.id}
                aria-expanded="true"
              >
                {item.title}
              </button>
            </AHeader>

            <div
              id={item.id}
              // className="accordion-collapse collapse show"
              className={`accordion-collapse collapse ${item.open && "show"}`}
              aria-labelledby={item.title}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
