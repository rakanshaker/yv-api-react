import React from "react";

import { Para, ContainerMain } from "./Styles";
import CardImage from "../CardImage";
import HoverCard from "../HoverCard";

function Card(props) {
  const { tuition, link } = props;
  return (
    <ContainerMain
      id="image-box"
      index={props.index}
      isFixedWidth={props.isFixedWidth}
    >
      <CardImage img={props.img} onError={props.onImageError} />
      {/* QUESTION - If I put this paragraph Component into the Img Container above, our App.js then throws an error "dangerously sets the innerHTML" */}
      <Para id="institution-name">{props.name}</Para>
      <HoverCard tuition={tuition} link={link} />
    </ContainerMain>
  );
}

export default Card;
