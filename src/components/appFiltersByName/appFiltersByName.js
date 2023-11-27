import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSwitcher,
  setActiveFilter,
} from "../appFiltersByName/filtersByNameSlice";
import classNames from "classnames";

import {
  fetchMovies,
  fetchTvShows,
  fetchCollections,
  fetchCompanies,
  fetchKeywords,
  fetchMulties,
  fetchPersons,
} from "../appFiltersByName/filtersByNameSlice";

import "./AppFiltersByName.scss";

const AppFiltersByName = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.filtersByName);
  const switcher = useSelector((state) => state.filtersByName.switcher);
  const activeFilter = useSelector((state) => state.filtersByName.activeFilter);

  const buttonsNames = [
    { name: "Movies", stateName: "movies" },
    { name: "TV Shows", stateName: "tvShows" },
    { name: "Multies", stateName: "multies" },
    { name: "Collections", stateName: "collections" },
    { name: "Companies", stateName: "companies" },
    { name: "Keywords", stateName: "keywords" },
  ];

  useEffect(() => {}, [switcher]);

  const renderButtons = (arr) => {
    const buttons = arr.map((item) => {
      const btnClass = classNames("app-filters-by-name__li", {
        active: item.stateName === activeFilter,
      });

      return (
        <li
          key={item.stateName}
          className={btnClass}
          onClick={() => {
            dispatch(setSwitcher(item.stateName));
            dispatch(setActiveFilter(item.stateName));
          }}
        >
          <h5 className="app-filters-by-name__name">{item.name}</h5>
          <div className="app-filters-by-name__counter">
            {count[item.stateName].total_results}
          </div>
        </li>
      );
    });

    return buttons;
  };

  return (
    <section className="app-filters-by-name">
      <div className="app-filters-by-name__header">
        <h2>Search results</h2>
      </div>
      <div className="app-filters-by-name__filters">
        <ul className="app-filters-by-name__list">
          {renderButtons(buttonsNames)}
        </ul>
      </div>
    </section>
  );
};

export default AppFiltersByName;
