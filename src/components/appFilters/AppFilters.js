import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import arror from "../../resources/icons8-forward-26.png";
import "./AppFilters.scss";

const AppFilters = () => {
  const [sortVisible, setSortVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const onHandleClickSort = () => {
    setSortVisible(!sortVisible);
  };
  const onHandleClickFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <Formik>
      <section className="app-filters">
        <h2>Popular movies</h2>
        {/*Sort******/}
        <div
          className="sort"
          style={{ height: !sortVisible ? "50px" : "auto" }}
        >
          <div className="sort-header" onClick={onHandleClickSort}>
            <div className="sort-header__title">Sort</div>
            <img
              className="sort-header__img"
              src={arror}
              alt="arrow"
              style={{ transform: sortVisible ? "rotate(90deg)" : "none" }}
            />
          </div>
          <hr />
          <h8 className="sort_label">Sort Results By</h8>
          <form action="" className="sort_form">
            <select name="sort_select" id="sort_select" className="sort_select">
              <option value="Popularity Descending" className="first_option">
                Popularity Descending
              </option>
              <option value="Popularity Ascending">Popularity Ascending</option>
              <option value="Rating Descending">Rating Descending</option>
              <option value="Rating Ascending">Rating Ascending</option>
              <option value="Release Date Descending">
                Release Date Descending
              </option>
              <option value="Release Date Ascending">
                Release Date Ascending
              </option>
              <option value="Title(A-Z)">Title (A-Z)</option>
              <option value="Title(Z-A)">Title (Z-A)</option>
            </select>
          </form>
        </div>
        {/*Sort******/}

        {/* Filters */}
        <div
          className="filters"
          style={{ height: !filtersVisible ? "50px" : "auto" }}
        >
          <div className="filters-header" onClick={onHandleClickFilters}>
            <div className="filters-header__title">Filters</div>
            <img
              className="filters-header__img"
              src={arror}
              alt="arrow"
              style={{ transform: filtersVisible ? "rotate(90deg)" : "none" }}
            />
          </div>
          <hr />
          <form action="" className="filters__form">
            <h8 className="filters__genres_label">Genres</h8>
            <div className="filters__genres">
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span>Action</span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox" />
                <span>Adventure</span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox" />
                <span>Animation</span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox" />
                <span>Comedy</span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox" />
                <span>Crime</span>
              </label>
            </div>
            <hr />
            <h8 className="filters__genres_label">Language</h8>
            <select
              name="filters_select"
              id="filters_select"
              className="filters_select"
            >
              <option value="English">English</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Polish">Polish</option>
            </select>
          </form>
        </div>
        {/* Filters */}
        <button className="search">Search</button>
      </section>
    </Formik>
  );
};

export default AppFilters;
