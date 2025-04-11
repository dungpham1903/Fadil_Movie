import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

//https://api.themoviedb.org/3/movie/now_playing?api_key=d8fcb9ac36ca1f890a33cf11f653a021
const MovieList = ({ type = "now_playing" }) => {
  // const [moives, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=d8fcb9ac36ca1f890a33cf11f653a021`,
    fetcher
  );
  const movies = data?.results || [];
  console.log("Movies", movies);

  // useEffect(() => {
  //   if (data && data.results) setMovies(data.results);
  // }, [data]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={6} slidesPerView={"6"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
