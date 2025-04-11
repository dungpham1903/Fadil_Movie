import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { genres } from "../../utils/genres.js";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=d8fcb9ac36ca1f890a33cf11f653a021`,
    fetcher
  );
  const movies = data?.results || [];
  console.log("Banner", movies);
  return (
    <>
      <section className="banner h-[810px]  overflow-hidden">
        <Swiper grabCursor={"true"} spaceBetween={30} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};
function BannerItem({ item }) {
  const { title, poster_path, backdrop_path, genre_ids, overview } = item;
  return (
    <div className="w-full h-full relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] "></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        className="w-full h-full object-fill object-top -z-10"
      />
      <div className="absolute left-5 bottom-5 w-2/5 px-10 mb-64 text-white">
        <h2 className="font-bold text-5xl mb-4 ">{title}</h2>
        <div className="my-4 text-base text-white">
          <span className="">{overview}</span>
        </div>

        <div className="flex items-center gap-x-3 mb-4">
          {genre_ids.slice(0, 3).map((id) => (
            <span key={id} className="border border-white py-2 px-4 rounded-lg">
              {genres[id]}
            </span>
          ))}
        </div>
        <div className="flex">
          <button className="flex justify-between w-[119px] py-3 px-6 bg-primary text-white rounded-lg font-medium">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4951 11.5876C20.1603 11.9831 20.1436 12.9519 19.465 13.324L1.48089 23.1878C0.81446 23.5533 6.94647e-07 23.0711 6.71762e-07 22.311L5.29227e-08 1.7577C2.95747e-08 0.982254 0.844358 0.501877 1.51094 0.898088L19.4951 11.5876Z"
                fill="white"
              />
            </svg>
            Play
          </button>
          <button className="flex justify-between w-[165px] py-3 px-6 ml-3 bg-gray-500 text-white rounded-lg font-medium">
            <svg
              width="27"
              height="27"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13" cy="13" r="12" stroke="white" strokeWidth="2" />
              <path
                d="M13.5019 9.768C13.1659 9.768 12.8619 9.64 12.6219 9.4C12.3659 9.16 12.2379 8.856 12.2379 8.504C12.2379 8.152 12.3659 7.848 12.6219 7.608C12.8619 7.368 13.1659 7.24 13.5019 7.24C13.8379 7.24 14.1419 7.368 14.3979 7.608C14.6379 7.848 14.7659 8.152 14.7659 8.504C14.7659 8.856 14.6379 9.16 14.3979 9.4C14.1419 9.64 13.8379 9.768 13.5019 9.768ZM12.4779 19V10.728H14.5099V19H12.4779Z"
                fill="white"
              />
            </svg>
            More info
          </button>
        </div>
      </div>
    </div>
  );
}
export default Banner;
