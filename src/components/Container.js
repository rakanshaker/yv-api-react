import React from "react";
import "./app/App.css";
import {
  Para,
  HoverCard,
  ContainerMain,
  ContainerImg,
  IconImg,
  HoverPara,
  Link,
} from "./StyledComponents";
import PanoIcon from "../images/panorama.svg";
import { ReactNativeNumberFormat } from "../actions/CurrencyFormat";

function Container(props) {
  return (
    <ContainerMain id="image-box" index={props.index}>
      <ContainerImg
        id="image"
        src={props.img}
        onError={props.onImageError}
        alt=""
      ></ContainerImg>
      {/* QUESTION - If I put this paragraph Component into the Img Container above, our App.js then throws an error "dangerously sets the innerHTML" */}
      <Para id="institution-name">{props.name}</Para>
      <HoverCard>
        <Link href={`https://www.youvisit.com/${props.link}`} target="_blank">
          <IconImg src={PanoIcon} />
          <HoverPara>Launch Tour</HoverPara>
        </Link>
        <Link
          href={`https://www.savingforcollege.com/calculators/financial-aid-calculator`}
          target={`_blank`}
        >
          <HoverPara>
            <ReactNativeNumberFormat
              value={props.tuition}
            ></ReactNativeNumberFormat>
          </HoverPara>
        </Link>
      </HoverCard>
      <div id="map-icon"></div>
    </ContainerMain>
  );
}

export default Container;
