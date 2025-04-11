import { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  return (
    <Fragment>
      <section className="relative h-[740px] w-full">
        <Banner></Banner>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </section>
      <section className=" Home-container relative -mt-10 z-10">
        <section className="movies-layout pb-11">
          <h2 className="capitalize text-white mb-4 text-3xl font-bold">
            Now Playing
          </h2>
          <MovieList></MovieList>
        </section>
        <section className="movies-layout pb-20">
          <h2 className="capitalize text-white mb-10 text-3xl font-bold">
            Top rated
          </h2>
          <MovieList type="top_rated"></MovieList>
        </section>
        <section className="movies-layout pb-20">
          <h2 className="capitalize text-white mb-10 text-3xl font-bold">
            Trending
          </h2>
          <MovieList type="popular"></MovieList>
        </section>
      </section>
    </Fragment>
  );
};

export default HomePage;
