import React, { useEffect, useState } from "react";
import {
  SearchBox,
  FilterBox,
  FilterDiv,
  AppBody,
  AppDiv,
  AppBodyContainers,
  AppHeader,
} from "../StyledComponents";
import "./App.css";
import API from "../../actions/ApiConsumer";
import ContainerMain from "../Container";

// const breakpointColumnsObj = {
//   default: 3,
//   1100: 2,
//   700: 1,
// };

const SearchAPI = API("https://search.dev.youvisit.com/institution-profiles");

const App = (props) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await SearchAPI.getInstitutionProfiles();
      setProfiles(response);
    };
    fetchData();
  }, []);

  const executeSearch = async (query) => {
    console.log(query);
    const search = await SearchAPI.getInstitutionProfiles(query);
    setProfiles(search);
  };
  let pauseSearch;

  const handleChildChange = async (searchTerm) => {
    console.log("this is search parent, I got it", searchTerm.query);
    //DO I NEED TO USEEFECT HERE? Search is only working on the first attempt, then it gets stuck. I think state isn't updating the way we want
    //BECAUSE OF HOW ONCHANGE WORKS, deleting letters leaves the last query as a single letter. It needs to check again after 1 letter is deleted?
    if (pauseSearch) {
      clearTimeout(pauseSearch);
    }
    pauseSearch = setTimeout(() => {
      executeSearch(searchTerm.query);
    }, 600);
    console.log("this is parent, search term is:", searchTerm.query);
  };

  const onFilterChangeFromParent = async (filterState) => {
    console.log("THIS IS PARENT AND I GOT YOUR FILTER", filterState);
    // const response = await SearchAPI.getInstitutionProfiles(query);
  };

  const convertProfiles = (profiles = []) => {
    let containers = profiles.map((profile, i) => {
      //need to create unique id

      return (
        <ContainerMain
          index={i}
          key={i + profile.name}
          name={profile.institution_name}
          img={profile.yv_profile_img}
          tuition={profile.instate_tuition}
          link={profile.inst_id}
          onImageError={(ev) => {
            const currentImage = ev.target;
            currentImage.src =
              "https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg";
          }}
        />
      );
    });
    return containers;
  };

  return (
    <AppDiv>
      <AppHeader />
      <SearchBox onChildChange={handleChildChange} />
      <AppBody>
        <FilterDiv>
          <FilterBox onFilterChange={onFilterChangeFromParent} />
        </FilterDiv>

        <AppBodyContainers>{convertProfiles(profiles)}</AppBodyContainers>
      </AppBody>
    </AppDiv>
  );
};

export default App;
