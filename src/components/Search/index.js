import React, { useState } from "react";

import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchDiv,
  SearchHeader,
  SearchParagraph,
  SearchInputForm,
} from "./Styles";

function Search(props) {
  const [search, setSearch] = useState({
    query: "",
  });

  //BUG - When Search is cleared, featured content disappears
  //after more reading, this is expected, state is rendered with the previous search and only rerendered onchange
  //maybe useEffect????

  // useEffect(() => {});
  const updateSearch = (ev) => {
    ev.preventDefault();
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
      <SearchInputForm onSubmit={updateSearch}>
        <SearchDiv>
          <SearchInput
            type="text"
            placeholder="Search"
            onChange={updateSearch}
          />
          <SearchButton type={"submit"}>Search</SearchButton>
        </SearchDiv>
      </SearchInputForm>
    </SearchContainer>
  );
}

export default Search;
