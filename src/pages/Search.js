import { useFetch } from "../hooks/useFetch";
import { Card } from "../componenets/Card";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data:movies} = useFetch(apiPath, queryTerm);
  useTitle(`Search Result for ${queryTerm}`);
  
  return (
      <main>
        <section>
          <p className="text-3xl text-grey-700 dark:text-white py-y">
            {movies.length===0? `No result found for '${queryTerm}'`:`Result for '${queryTerm}'`}
          </p>
        </section>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-center flex-wrap">
            {movies.map((movie)=>(
              <Card key={movie.id} movie={movie}/>
            ))}
            
          </div>
        </section>
      </main>
    )
}
