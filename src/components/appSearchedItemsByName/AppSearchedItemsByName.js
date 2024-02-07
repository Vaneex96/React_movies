import { useParams, Link } from "react-router-dom";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  fetchMovieByName,
  fetchPopularMoviesByFilters,
  fetchNowPlayingMovies,
  fetchUpcommingMovies,
  fetchTopRatedMovies,
  fetchListOfEnployee,
} from "./moviesSlice";

import {
  fetchMovies,
  fetchTvShows,
  fetchCollections,
  fetchCompanies,
  fetchKeywords,
  fetchMulties,
  fetchPersons,
} from "../appFiltersByName/filtersByNameSlice";

import {
  setSwitcher,
  setActiveFilter,
} from "../appFiltersByName/filtersByNameSlice";

import AppMovieTemplate from "../appMovieTemplate/AppMovieTemplate";
import Spinner from "../Spinner/Spinner";
import "./AppSearchedItemsByName.scss";
import play from "../../resources/icons8-play-50.png";
import movie from "../../resources/icons8-picture.svg";

const AppSearchedItemsByName = () => {
  const dispatch = useDispatch();
  let popularMovies = useSelector(
    (state) => state.movies.popularMovies.results
  );

  const loadingStatus = useSelector((state) => state.movies.loadingStatus);

  const switcher = useSelector((state) => state.filtersByName.switcher);
  //////start///////Get items from filtersByName state
  const tvShows = useSelector((state) => state.filtersByName.tvShows.results);
  const moviess = useSelector((state) => state.filtersByName.movies.results);
  const people = useSelector((state) => state.filtersByName.people.results);
  const collections = useSelector(
    (state) => state.filtersByName.collections.results
  );
  const companies = useSelector(
    (state) => state.filtersByName.companies.results
  );
  const keywords = useSelector((state) => state.filtersByName.keywords.results);
  const multies = useSelector((state) => state.filtersByName.multies.results);

  const Employee = useSelector((state) => state.movies.objectOfEmployees);

  // console.log(Employee);

  //////end///////Get items from filtersByName state
  const params = useParams();

  const searchByName = useSelector((state) => state.filters.searchByName);

  const localStorageSearchByName = localStorage.getItem("37Eh8sh");

  const arrOfActions = [
    fetchMovieByName,
    fetchMovies,
    fetchTvShows,
    fetchCollections,
    fetchCompanies,
    fetchKeywords,
    fetchMulties,
    fetchPersons,
  ];

  console.log("render");

  useEffect(() => {
    dispatch(fetchListOfEnployee());
    switch (params.id) {
      case "search":
        dispatch(setActiveFilter("movies"));
        arrOfActions.forEach((action) =>
          dispatch(action(localStorageSearchByName))
        );
        break;

      case "popular":
        dispatch(fetchPopularMovies("popular"));
        break;

      case "now_playing":
        // dispatch(fetchNowPlayingMovies());
        dispatch(fetchPopularMovies("now_playing"));
        break;

      case "upcoming":
        // dispatch(fetchUpcommingMovies());
        dispatch(fetchPopularMovies("upcoming"));
        break;

      case "top_rated":
        // dispatch(fetchTopRatedMovies());
        dispatch(fetchPopularMovies("top_rated"));
        break;

      default:
        break;
    }
  }, [searchByName]);

  if (loadingStatus === "loading") {
    return (
      <div
        style={{
          width: "896px",
          display: "flex",
          justifyContent: "center",
          padding: "200px 0 0 0px",
        }}
      >
        <Spinner />
      </div>
    );
  } else if (loadingStatus === "error") {
    return (
      <div
        style={{
          width: "896px",
          display: "flex",
          justifyContent: "center",
          padding: "200px 0 0 300px",
          fontSize: "20px",
          color: "red",
        }}
      >
        Ups...Something went wrong. Try again!
      </div>
    );
  }

  switch (switcher) {
    case "tvShows":
      popularMovies = tvShows;
      break;
    case "movies":
      popularMovies = moviess;
      break;
    case "people":
      popularMovies = people;
      break;
    case "collections":
      popularMovies = collections;
      break;
    case "companies":
      popularMovies = companies;
      break;
    case "keywords":
      popularMovies = keywords;
      break;
    case "multies":
      popularMovies = multies;
      break;
    default:
      break;
  }

  if (popularMovies.length === 0) {
    return (
      <div
        style={{
          width: "896px",
          display: "flex",
          justifyContent: "center",
          padding: "50px 0 0 0",
          fontSize: "20px",
          color: "red",
        }}
      >
        Nothing found. Сheck the movie title is correct
      </div>
    );
  }

  const movies = (arr) => {
    const movies = arr.map((item) => {
      return <AppMovieTemplate item={item} addClass={"modify"} />;
    });

    return movies;
  };

  return (
    <section className="app-searched-items">
      <div className="items">{movies(popularMovies)}</div>
    </section>
  );
};

export default AppSearchedItemsByName;
