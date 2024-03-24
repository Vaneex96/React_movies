import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import {
  fetchPopularMovies,
  fetchMovieByName,
  fetchPopularMoviesByFilters,
  fetchNowPlayingMovies,
  fetchUpcommingMovies,
  fetchTopRatedMovies,
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

const AppSearchedItemsByName = () => {
  const dispatch = useDispatch();
  let popularMovies = useSelector((state) => state.movies.popularMovies);
  let isSearchingByFilters = useSelector(
    (state) => state.movies.isSearchingByFilters
  );

  let filtrationGenres = useSelector((state) => state.filters.filtrationGenres);
  let sortingType = useSelector((state) => state.filters.sortingType);

  const pagination = useSelector((state) => state.movies.pagination);
  const totalItems = useSelector((state) => state.movies.totalItems);
  const clientAddress = useSelector((state) => state.movies.clientAddress);
  const [activePage, setActivePage] = useState(1);

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

  const arrOfActions = [
    fetchMovieByName,
    // fetchMovies,
    // fetchTvShows,
    // fetchCollections,
    // fetchCompanies,
    // fetchKeywords,
    // fetchMulties,
    // fetchPersons,
  ];

  useEffect(() => {
    switch (params.id) {
      case "search":
        dispatch(setActiveFilter("movies"));
        arrOfActions.forEach((action) => {
          if (action === fetchMovieByName) {
            dispatch(
              action({ title: localStorageSearchByName, paginateBy: 4 })
            );
            return;
          }
          dispatch(action(localStorageSearchByName));
        });
        break;

      case "popular":
        if (popularMovies.length !== 0) {
          dispatch(fetchPopularMovies({ pageNumber: 1, pagination: 12 }));
        }
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

  const renderPaginationBar = (movies) => {
    const totalPages = Math.ceil(movies.total_pages / pagination);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      const btnClass = classNames("page", {
        active: i === activePage,
      });
      pages.push(
        <li className={btnClass} key={i}>
          <div
            className="href"
            onClick={(e) => {
              if (isSearchingByFilters) {
                dispatch(
                  fetchPopularMoviesByFilters({
                    page: i,
                    genres: filtrationGenres,
                    sortingType: sortingType,
                  })
                );
              }

              if (!isSearchingByFilters) {
                dispatch(fetchPopularMovies({ pageNumber: i, pagination: 12 }));
              }
              setActivePage(i);
            }}
          >
            {i}
          </div>
        </li>
      );
    }

    return pages;
  };

  // if (loadingStatus === "loading") {
  //   return (
  //     <div
  //       style={{
  //         width: "896px",
  //         display: "flex",
  //         justifyContent: "center",
  //         padding: "200px 0 0 0px",
  //       }}
  //     >
  //       <Spinner />
  //     </div>
  //   );
  // }

  if (loadingStatus === "error") {
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
      return <AppMovieTemplate item={item} addClass={"modify"} key={item.id} />;
    });

    return movies;
  };

  return (
    <section className="app-searched-items">
      <div className="items">{movies(popularMovies.movie_list)}</div>
      <div className="pagination-bar">
        <ul className="pagination-bar__pages">
          {renderPaginationBar(popularMovies)}
        </ul>
      </div>
    </section>
  );
};

export default AppSearchedItemsByName;
