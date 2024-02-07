import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, fetchLanguages } from "./filtersSlice";
import { fetchPopularMoviesByFilters } from "../appSearchedItemsByName/moviesSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import arror from "../../resources/icons8-forward-26.png";
import "./AppFilters.scss";

const AppFilters = () => {
  const dispatch = useDispatch();
  const [sortVisible, setSortVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const genres = useSelector((state) => state.filters.genres);
  const languages = useSelector((state) => state.filters.languages);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchLanguages());
  }, []);

  const onHandleClickSort = () => {
    setSortVisible(!sortVisible);
  };
  const onHandleClickFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const renderGenres = (arr) => {
    const genres = arr.map((item) => {
      return (
        <label className="checkbox-btn" key={item.id}>
          <Field type="checkbox" name={item.id} key={item.id} />
          <span>{item.name}</span>
        </label>
      );
    });

    return genres;
  };

  const renderLanguages = (arr) => {
    const languages = arr.map((item) => {
      return (
        <option value={item.iso_639_1} key={item.iso_639_1}>
          {item.english_name}
        </option>
      );
    });

    return languages;
  };

  return (
    <section className="app-filters">
      <Formik
        initialValues={{
          sort_select: "popularity.desc",
          language: "en",
        }}
        onSubmit={(values) => {
          let stringOfGenres = "";

          for (const k in values) {
            if (
              values[k] !== false &&
              values[k] !== values.sort_select &&
              values[k] !== values.language
            ) {
              stringOfGenres += k + "%2C%20";
            }
          }

          dispatch(
            fetchPopularMoviesByFilters({
              lang: values.language,
              genres: stringOfGenres,
              sortBy: values.sort_select,
            })
          );
        }}
      >
        <Form>
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
            <h6 className="sort_label">Sort Results By</h6>
            {/* <form action="" className="sort_form"> */}
            <Field
              name="sort_select"
              id="sort_select"
              className="sort_select"
              as="select"
            >
              <option value="popularity.desc">Popularity Descending</option>
              <option value="popularity.asc">Popularity Ascending</option>
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
            </Field>
            {/* </form> */}
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
            {/* <form action="" className="filters__form"> */}
            <h6 className="filters__genres_label">Genres</h6>
            <div className="filters__genres">{renderGenres(genres)}</div>
            <hr />
            <h6 className="filters__genres_label">Language</h6>
            <Field
              name="language"
              id="language"
              className="language"
              as="select"
            >
              {renderLanguages(languages)}
            </Field>
            {/* </form> */}
          </div>
          {/* Filters */}
          <button className="search" type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default AppFilters;
