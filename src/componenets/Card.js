import { Link } from "react-router-dom";
import backup from "../assets/images/backup.jpg";



export const Card = ({movie}) => {

  const {id, original_title, overview,poster_path} = movie;
  const movieImage = poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` : backup;
  
  return (
    <div className="max-w-xs m-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <Link to={`/movie/${id}`}>
                  <img className="rounded-t-lg" src={movieImage} alt="movieBackdrop" />
              </Link>
              <div className="p-5">
                  <Link to={`/movie/${id}`}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
                
              </div>
          </div>
  )
}
