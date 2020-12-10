import styled from "styled-components";
import colors from "../../utils/colors";

export const SearchContainer = styled.div`
  justify-self: center;
  align-selft: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
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
