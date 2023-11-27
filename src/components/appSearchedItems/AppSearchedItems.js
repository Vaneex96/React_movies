import { useParams, Link } from "react-router-dom";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  fetchMovieByName,
  fetchPopularMoviesByFilters,
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
import "./AppSearchedItems.scss";
import play from "../../resources/icons8-play-50.png";
import movie from "../../resources/icons8-picture.svg";

const AppSearchedItems = () => {
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

  //////end///////Get items from filtersByName state
  const params = useParams();

  const searchByName = useSelector((state) => state.filters.searchByName);

  const localStorageSearchByName = localStorage.getItem("37Eh8sh");

  console.log("render");

  useEffect(() => {
    if (params.id === "search") {
      dispatch(setActiveFilter("movies"));
      dispatch(fetchMovieByName(localStorageSearchByName));

      dispatch(fetchMovies(localStorageSearchByName));
      dispatch(fetchTvShows(localStorageSearchByName));
      dispatch(fetchCollections(localStorageSearchByName));
      dispatch(fetchCompanies(localStorageSearchByName));
      dispatch(fetchKeywords(localStorageSearchByName));
      dispatch(fetchMulties(localStorageSearchByName));
      dispatch(fetchPersons(localStorageSearchByName));
    } else {
      dispatch(setActiveFilter("movies"));
      dispatch(fetchPopularMovies());
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

export default AppSearchedItems;
