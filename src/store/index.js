import { configureStore } from "@reduxjs/toolkit";
import filters from "../components/appFilters/filtersSlice";
import movies from "../components/appSearchedItemsByName/moviesSlice";
import filtersByName from "../components/appFiltersByName/filtersByNameSlice";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: { filters, movies, filtersByName },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
