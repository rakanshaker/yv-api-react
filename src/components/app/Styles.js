import styled from "styled-components";
import Filter from "../Filter";
import Search from "../Search";
import colors from "../../utils/colors";

/////////////////////////////////////////////APP///////////////////////////
export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SearchBox = styled(Search)`
  padding: 10px;
`;

export const AppBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const AppBodyCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const FilterDiv = styled.div`
  height: auto;
  background-color: ${colors.gray};
`;

export const FilterBox = styled(Filter)`
  text-align: center;
  height: 100%;
`;

export const AppCarouselCards = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  padding: 10px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
