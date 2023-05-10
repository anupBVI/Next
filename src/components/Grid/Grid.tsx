import React from "react";
import * as style from "./Grid.style";

interface IGrid {
  full?: boolean;
  width?: string;
  Padding?: string;
  data?: any;
  cols?: {
    lg: string;
    md: string;
    sm: string;
    xs: string;
    col: string;
  };
}

const Grid = ({
  children,
  ...props
}: { children: React.ReactNode } & IGrid) => {
  const { Container,  Row } = style;
  return (
    <Container className={`${props.full ? "conainer-fluid" : "container"} p-1`}>
      <Row className="row g-2 g-lg-3 g-md-2 g-sm-1 g-xs-1">
       {children}
        
      </Row>
    </Container>
  );
};

export default Grid;
