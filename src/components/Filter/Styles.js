import styled from "styled-components";
import colors from "../../utils/colors";
import { ReactComponent as arrow } from "../../images/right-thin-chevron-svgrepo-com.svg";
import { ReactComponent as filter } from "../../images/filter.svg";

export const FilterForm = styled.form`
  min-width: ${(props) => (props.isNavOpen ? "0%" : "105%")};
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.gray};
  text-align: center;
  -webkit-transition-property: min-width;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: min-width;
`;

export const FilterIcon = styled(filter)`
  transition: all 1s ease;
  flex-basis: 100%;
  height: 20px;
  width: 20px;
  fill: ${(props) => (props.isNavOpen ? colors.blue : colors.darkBlue)};
`;

export const FilterArrow = styled(arrow)`
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
  min-width: ${(props) => (props.isNavOpen ? "0px" : "287px")};
  padding: 10px;
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: opacity, width;
`;
export const FilterInput = styled.input`
  opacity: ${(props) => (props.isNavOpen ? "0" : "1")};
  width: ${(props) => (props.isNavOpen ? "0px" : "287px")};
  margin: 10px;
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: opacity, width;
`;
export const FilterButton = styled.button`
  opacity: ${(props) => (props.isNavOpen ? "0" : "1")};
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: opacity;
`;
