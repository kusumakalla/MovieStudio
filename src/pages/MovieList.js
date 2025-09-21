import { useFetch } from "../hooks/useFetch";
import { Card } from "../componenets/Card"
import { useTitle } from "../hooks/useTitle";


 

export const MovieList = ({apiPath, title}) => {

  const {data:movies} = useFetch(apiPath);
  useTitle(title);


  return (
    <main>
      <section className="max-w-7xl mx-auto p-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/>
          ))}
          
        </div>
      </section>
    </main>
  )
}
