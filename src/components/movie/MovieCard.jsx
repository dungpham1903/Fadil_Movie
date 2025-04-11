const MovieCard = ({ item }) => {
  const { id, title, vote_average, release_date, backdrop_path, poster_path } =
    item;
  return (
    <>
      <div className="movie-card flex flex-col bg-slate-800  text-white h-full select-none relative overflow-hidden">
        {/* <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          className=" bg-cover blur-lg  absolute inset-0 opacity-50"
        ></img> */}
        <div className="flex flex-col flex-1 z-30">
          <div className="w-full h-[250px] rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              className="w-full h-full object-center mb-2"
            />
          </div>
          {/* <div className="flex flex-col flex-1 ">
            <h3 className=" text-base font-bold px-2 my-2">{title}</h3>
          </div> */}
        </div>
      </div>
      {/* <div className="movie-card flex flex-col ">
        <div className="flex flex-col flex-1 z-30">
          <div className="w-full h-[123px] ">
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              className="w-full h-full object-fill mb-2"
            />
            span
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MovieCard;
