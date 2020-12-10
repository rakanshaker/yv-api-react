import styled from "styled-components";
import colors from "../../utils/colors";

const Hover = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  transition: top 0.5s;
  -webkit-transition: top 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  background: ${colors.hoverBlue};
  top: 100%;
  color: white;
  text-align: center;
`;

const HoverDiv = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;
const HoverPara = styled.p`
  opacity: 1;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
`;
const IconImg = styled.img`
  width: 40px;
  opacity: 1;
  margin-top: 60px;
`;

export { Hover, HoverDiv, HoverPara, Link, IconImg };
