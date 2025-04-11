import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import { Fragment } from "react";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=d8fcb9ac36ca1f890a33cf11f653a021`,
    fetcher
  );
  const movies = data?.results || [];
  console.log("Movies", movies);
  return (
    <Fragment>
      <section className="movies-layout page-container pb-20">
        <div className="py-10">
          <div className="grid grid-cols-4 gap-10">
            {movies.length > 0 &&
              movies.map((item) => (
                <MovieCard key={item.id} item={item}></MovieCard>
              ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MoviePage;
