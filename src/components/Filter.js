import React, { useState } from "react";
import "./app/App.css";
import {
  FilterForm,
  FilterIcon,
  FilterArrow,
  FilterCheck,
  FilterParagraph,
  FilterInput,
  FilterButton,
} from "./StyledComponents";
function Filter(props) {
  const [state, setState] = useState({
    isOnCampus: false,
    geography: "",
    isNavOpen: false,
  });

  const setChecked = (ev) => {
    const isChecked = ev.target.checked;
    //please rerender
    setState({ ...state, isOnCampus: isChecked });
  };

  const formSubmit = (ev) => {
    ev.preventDefault();
    console.log(state);
    props.onFilterChange && props.onFilterChange(state);
  };

  const setGeography = (ev) => {
    const inputGeo = ev.target.value;
    setState({ ...state, geography: inputGeo });
  };

  const openNav = () => {
    console.log(state.isNavOpen);
    state.isNavOpen
      ? setState({ ...state, isNavOpen: false })
      : setState({ ...state, isNavOpen: true });
    console.log(state.isNavOpen);
  };
  return (
    <FilterForm onSubmit={formSubmit} isNavOpen={state.isNavOpen}>
      <FilterIcon onClick={openNav} isNavOpen={state.isNavOpen} />
      <FilterArrow onClick={openNav} isNavOpen={state.isNavOpen} />
      <br />
      <FilterCheck
        type="checkbox"
        onChange={setChecked}
        checked={state.isOnCampus}
        isNavOpen={state.isNavOpen}
      ></FilterCheck>
      <FilterParagraph isNavOpen={state.isNavOpen}>
        On Campus Housing
      </FilterParagraph>
      <FilterInput
        type="text"
        onChange={setGeography}
        value={state.geography}
        isNavOpen={state.isNavOpen}
      ></FilterInput>
      <FilterButton isNavOpen={state.isNavOpen}>Submit</FilterButton>
    </FilterForm>
  );
}

export default Filter;
