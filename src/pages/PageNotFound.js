import {Link} from "react-router-dom";
import pageNotFound from "../assets/images/pagenotfound.jpg";

import { useTitle } from "../hooks/useTitle";
export const PageNotFound = () => {

  useTitle("Page Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-grey-700 dark:text-white m-5 mb-8">404, Oops!</p>
          <div className="max-w-xl">
            <img className="rounded" src={pageNotFound} alt="404 Page not found" /></div>
        </div>
        <div className="flex justify-center">
          <Link to="/"><button className="text-xl bg-gradient-to-t from-sky-500 to-indigo-500 text-white px-4 py-2 m-4 rounded-lg">Back to Home</button></Link>
          
        </div>
      </section>
    </main>
  )
}
