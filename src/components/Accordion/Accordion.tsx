import React, { ReactNode, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import * as style from "./Accordion.style"


// Define types for Accordion props
interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  titleBackground?: string;
  padd?: string;
  justify?: string;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  transform?: string;
  titleSize?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  padd,
  titleBackground,
  defaultOpen = false,
  justify,
  openIcon,
  closeIcon,
  transform,
  titleSize,
}) => {
  const {AccordionContent , AccordionIcon , AccordionTitle , AccordionWrapper} = style
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <AccordionWrapper>
      <AccordionTitle
        titleSize={titleSize}
        titleBackground={titleBackground}
        padd={padd}
        justify={justify}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <AccordionIcon transform={transform} isOpen={isOpen}>
          {isOpen ? (
            openIcon ? (
              openIcon
            ) : (
              <FaMinus />
            )
          ) : closeIcon ? (
            closeIcon
          ) : (
            <FaPlus />
          )}
        </AccordionIcon>
      </AccordionTitle>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;
