import styled from "styled-components";
import Container from "./Container";
import Filter from "./Filter";
import Search from "./Search";
import { ReactComponent as filter } from "../images/filter.svg";
import colors from "../utils/colors";
import { ReactComponent as arrow } from "../images/right-thin-chevron-svgrepo-com.svg";

/////////////////////////////////////////////APP///////////////////////////
export const AppDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr auto;
  justify-content: center;
`;

export const SearchBox = styled(Search)`
  padding: 10px;
  grid-column-start: 1;
  grid-column-end: 6;
`;

export const AppBody = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 200vh;
`;
export const AppBodyContainers = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export const ContainerBox = styled(Container)`
  width: 200px;
`;

export const FilterBox = styled(Filter)`
  display: flex;
  flex: 0 0 100px;
  flex-flow: column nowrap;
  text-align: center;
  z-index: 30;
  justify-content: flex-start;
`;

///////////////////////////////////////////CONTAINER////////////////////////////////
export const Para = styled.p`
  width: 100%;
  margin: 0;
  position: absolute;
  left: 50%;
  bottom: 1px;
  transform: translate(-50%, -50%);
  font-size: auto;
  font-weight: bold;
  color: white;

  font-family: Arial, Helvetica, sans-serif;
`;

export const HoverCard = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: top 0.5s;
  -webkit-transition: top 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  background: rgba(173, 216, 230, 0.8);
  top: 100%;
  color: white;
  text-align: center;
`;

export const ContainerMain = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
  height: auto;
  position: relative;
  margin: 10px;
  overflow: hidden;
  border-radius: 5px;
  &:hover ${HoverCard} {
    top: 0;
  }
`;

export const ContainerImg = styled.img`
  width: 100%;
`;

export const IconImg = styled.img`
  width: 20%;
  opacity: 1;
  margin-top: 15%;
`;

export const HoverPara = styled.p`
  opacity: 1;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
`;

/////////////////////////////////////////////FILTER////////////////////////////////////

export const FilterForm = styled.form`
  height: 100%;
  width: ${(props) => (props.isNavOpen ? "50px" : "250px")};
  align-self: flex-start;
  background-color: ${colors.gray};
  text-align: center;
  -webkit-transition-property: width;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width;
`;

export const FilterIcon = styled(filter)`
transition: all 1s ease  
  margin: 20px;
  height: 20px;
  width: 20px;
  fill: ${(props) => (props.isNavOpen ? colors.blue : colors.darkBlue)};
`;

export const FilterArrow = styled(arrow)`
  float: right;
  opacity: ${(props) => (props.isNavOpen ? "0" : "1")};
  transform: rotate(180deg);
  margin: 20px;
  height: 20px;
  width: 20px;
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: opacity;
`;
//DRY being violated, but HOW do I use classes if I'm also using Styled Components?
export const FilterCheck = styled.input`
  opacity: ${(props) => (props.isNavOpen ? "0" : "1")};
  margin-top: 20px;
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: opacity;
`;
export const FilterParagraph = styled.p`
  opacity: ${(props) => (props.isNavOpen ? "0" : "1")};
  padding: 10px;
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: opacity;
`;
export const FilterInput = styled.input`
  opacity: ${(props) => (props.isNavOpen ? "0" : "1")};
  margin: 10px;
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: opacity;
`;
export const FilterButton = styled.button`
  opacity: ${(props) => (props.isNavOpen ? "0" : "1")};
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: opacity;
`;

///////////////////////////////////////////////////SEARCH////////////////////////////////////

export const SearchContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  justify-self: center;
  align-selft: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;

  background-color: ${colors.gray};
`;

export const SearchHeader = styled.h2`
  font-family: arial;
  flex: 0, 0, 100%;
  color: ${colors.darkBlue};
`;

export const SearchParagraph = styled.p`
  font-family: arial;
  flex: 0, 0, 100%;
`;

export const SearchDiv = styled.div`
  display: flex;
  background-color: ${colors.white};
  width: 50%;
  height: 70px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  flex: 0, 0, 100%;
`;

export const SearchInput = styled.input`
  height: 50px;
  width: 200px;
  margin: 50px;
  text-align: left;
  border: none;
  outline: none;
  margin: 0;
  padding-left: 5px;
`;

export const SearchButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 90px;
  height: 50px;
  background-color: ${colors.blue};
  margin-right: 5px;
  color: ${colors.white};
`;
