import styled from "styled-components";
import Container from "./Container";
import Filter from "./Filter";
import Search from "./Search";
import { ReactComponent as filter } from "../images/filter.svg";
import colors from "../utils/colors";
import { ReactComponent as arrow } from "../images/right-thin-chevron-svgrepo-com.svg";
import Header from "./Header";
import { ReactComponent as logo } from "../images/YouVisit_Logo_RGB.svg";
import { ReactComponent as userLoginIcon } from "../images/user.svg";

/////////////////////////////////////////////APP///////////////////////////
export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const AppHeader = styled(Header)`
  padding: 20px;
  display: flex;
`;

export const SearchBox = styled(Search)`
  padding: 10px;
`;

export const AppBody = styled.div`
  display: flex;
  flex-flow: row nowrap;

  width: 100%;
  height: 100%;
`;
export const AppBodyContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
`;

export const FilterDiv = styled.div`
  height: auto;
  background-color: ${colors.gray};
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
`;

export const FilterBox = styled(Filter)`
  text-align: center;
  height: 100%;
`;

///////////////////////////////////////////CONTAINER////////////////////////////////
export const Para = styled.p`
  width: 100%;
  margin: 0;
  position: absolute;
  text-align: center;
  bottom: 5px;
  font-size: 18px;
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
  background: ${colors.hoverBlue};
  top: 100%;
  color: white;
  text-align: center;
`;

export const ContainerMain = styled.div`
  width: ${(props) => (props.index % 3 === 0 ? "96.5%" : "47.15%")};
  height: 300px;
  position: relative;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  &:hover ${HoverCard} {
    top: 0;
  }
`;

export const ContainerImg = styled.img`
  max-width: 100%;
  height: auto;
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
  min-width: ${(props) => (props.isNavOpen ? "0px" : "287px")};

  background-color: ${colors.gray};
  text-align: center;
  -webkit-transition-property: min-width;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: min-width;
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
  justify-self: center;
  align-selft: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 200px;
  width: 100%;
  background-color: ${colors.gray};
`;

export const SearchHeader = styled.h2`
  font-size: 36px;
  font-family: arial;
  color: ${colors.darkBlue};
  margin: 0;
`;

export const SearchParagraph = styled.p`
  font-size: 20px;
  font-family: arial;
`;

export const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
  width: 100%;
  height: 70px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  flex: 0, 0, 100%;
`;

export const SearchInputForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
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
  justify-self: flex-end;
`;

//////////////////////HEADER///////////////////////

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  height: 100px;
`;

export const HeaderLeftDiv = styled.div`
  margin: 20px;
  display: flex;
  justify-self: flex-start;
  align-items: center;
`;

export const HeaderRightDiv = styled.div`
  margin: 20px;
  display: flex;
  justify-self: flex-end;
`;

export const HeaderLogo = styled(logo)`
  width: 200px;
`;

export const HeaderLoginIcon = styled(userLoginIcon)`
  width: 50px;
`;

export const HeaderPara = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
`;
