import { useState, useEffect } from "react";
//import API_KEY from "./keys";
//AIzaSyCY2H_iaNKkPISCJOkf49u4_TD50wmcMjs;

//const CONTEXT_KEY = "4e5531c711db31e27 ";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyCY2H_iaNKkPISCJOkf49u4_TD50wmcMjs&cx=ed98b830e57e48664&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
