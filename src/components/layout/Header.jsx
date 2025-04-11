import { NavLink } from "react-router-dom";
import avt from "../../assets/Frame 78.png";
const Header = () => {
  return (
    <header className="header fixed top-0 left-0 w-full bg-opacity-80 py-4 px-14 flex items-center justify-between z-50">
      <div className="flex items-center justify-between gap-5 text-white">
        <NavLink to="/" className="text-primary font-extrabold text-4xl text-">
          FADILL
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/tvShows"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          TV Shows
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Movies
        </NavLink>
        <NavLink
          to="/new&popular"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          New & Popular
        </NavLink>
        <NavLink
          to="/mylist"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          My List
        </NavLink>
        <NavLink
          to="/browse"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Browser by Languages
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="8.89414"
            cy="8.69565"
            r="7.82609"
            stroke="white"
            strokeWidth="1.73913"
          />
          <path
            d="M19.7629 20L13.8032 13.9663"
            stroke="white"
            strokeWidth="1.73913"
          />
        </svg>
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.04807 3.48418C9.3886 3.48418 10.1976 3.69952 10.1976 3.69952C12.3894 4.20178 13.9322 6.22063 13.9322 8.5V14.6352L14.3803 15.0854L14.7547 15.4615H3.24528L3.6197 15.0854L4.06783 14.6352V8.5C4.06783 6.22067 5.61057 4.20178 7.80235 3.69952C7.80235 3.69952 8.6698 3.48418 8.95191 3.48418M8.99999 0C8.15374 0 7.50677 0.649904 7.50677 1.5V2.19995C4.66951 2.8501 2.52937 5.45 2.52937 8.5V14L0.538452 16V17H17.4615V16L15.4706 14V8.5C15.4706 5.45 13.3304 2.8501 10.4932 2.19995V1.5C10.4932 0.649904 9.84624 0 8.99999 0ZM10.9909 18H7.00903C7.00903 19.1 7.90485 20 8.99999 20C10.0951 20 10.9909 19.1 10.9909 18Z"
            fill="white"
          />
        </svg>
        <div className="flex items-center gap-2">
          <img src={avt} alt="" />
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0.5L5 5.5L10 0.5H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
