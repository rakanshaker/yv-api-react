const API = (baseURL) => {
  return {
    getInstitutionProfiles: async (query, page = 0) => {
      const data = await fetch(
        `${baseURL}?page=${page}&search-term=${query ? query : ""}`
      );
      // return await data.json();
      let institutionData = await data.json();
      // console.log(institutionData.data.records);
      return institutionData.data.records;
    },
    // getInstitutionProfilesFromFilters: async (query, page = 0) => {
    //   const data = await fetch(
    //     `${baseURL}?page=${page}&search-term=${query ? query : ""}`
    //   );
    //   // return await data.json();
    //   let institutionData = await data.json();
    //   // console.log(institutionData.data.records);
    //   return institutionData.data.records;
    // },
  };
};

export default API;
