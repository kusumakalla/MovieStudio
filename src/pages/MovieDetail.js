import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
 
import backup from "../assets/images/backup.jpg";


export const MovieDetail = () => {

  const params = useParams();
  const [data, setData] = useState({});

  useEffect(()=>{
    async function getResponse () {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8c7333163bce9f6f4f5651fb9004c4ec`);
      const dataJson = await response.json();
      setData(dataJson);
    }
    getResponse();     
  }, [params.id]);

  useEffect(()=>{
    document.title = `${data.title}/ MovieStudio`;
  });


  const movieImage = data.poster_path? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : backup;


  return (
    <main>
      <section className="flex justify-around flex-wrap p-5">
        <div className="max-w-sm">
          <img className="rounded" src={movieImage} alt="backdrop" />
        </div>
        <div className="max-w-2xl text-grey-700 text-lg dark:text-white text-center lg:text-left">
          <h1 className="text-4xl font-bold my-3">{data.original_title}</h1>
          <p>{data.overview}</p>
          {data.genres ? <ul className="flex justify-start gap-3 my-4">{data.genres.map((genre) => (<li className="border border-gray-200 rounded px-3 py-1 dark:border-gray-600" key={genre.id}>{genre.name}</li>))} </ul> : <p>no genres</p>}
          <div className="flex items-center my-4">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 font-bold text-gray-900 dark:text-white">{data.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span href="#" className="font-medium text-gray-900 dark:text-white">{data.vote_count} reviews</span>
          </div>
          <p className="my-2">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{data.runtime} min.</span>
          </p>
          <p className="my-2">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{data.budget}</span>
          </p>
          <p className="my-2">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{data.revenue}</span>
          </p>
          <p className="my-2">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{data.release_date}</span>
          </p>
          <p className="my-2">
            <span className="mr-2 font-bold">IMDB code:</span>
            <a href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank" rel="noreferrer">{data.imdb_id}</a>
          </p>
        </div>
      </section>
    </main>
  )
}
