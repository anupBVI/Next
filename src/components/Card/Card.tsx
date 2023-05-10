import { cardImage } from "@/assets";
import Image from "next/image";
import React from "react";
import * as style from "./Card.style"

const {Content} = style
const Card = (props:any) => {
    const {item} = props
  return (
    <Content className="p-1 card">
      <Image
        src={cardImage}
        alt="Picture of the author"
        className="img-fluid"
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </Content>
  );
};

export default Card;
