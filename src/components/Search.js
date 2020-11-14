import React, { useState } from "react";
import "./app/App.css";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchDiv,
  SearchHeader,
  SearchParagraph,
} from "./StyledComponents";

function Search(props) {
  const [search, setSearch] = useState({
    query: "",
  });

  //BUG - When Search is cleared, featured content disappears
  const updateSearch = (ev) => {
    //get input value
    const input = ev.target.value;
    //update state
    setSearch({ ...search, query: input });
    console.log(ev.target.value);
    console.log(search.query);
    // console.log(input);
    //check APP then pass state of search back up to app
    props.onChildChange && props.onChildChange(search);
  };

  return (
    <SearchContainer>
      <SearchHeader>Find the right college for you</SearchHeader>
      <SearchParagraph>Distance should not limit your search</SearchParagraph>
      <SearchDiv>
        <SearchInput
          type="text"
          placeholder="Search"
          onChange={updateSearch}
          onSubmit={updateSearch}
        />
        <SearchButton onSubmit={updateSearch}>Search</SearchButton>
      </SearchDiv>
    </SearchContainer>
  );
}

export default Search;
