import { useState,useEffect } from "react";


export const useFetch = (apiPath, queryTerm = "") => {

    const [data, SetData] = useState([]);
    const url = `https://api.themoviedb.org/3${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(()=>{
        async function fetchMovies() {
          let response = await fetch(url);
          let jsonData = await response.json();
          SetData(jsonData.results);
        }
        fetchMovies();
      },[url])
    
  return {data}

}