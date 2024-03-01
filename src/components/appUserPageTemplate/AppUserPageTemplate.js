import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteMovies } from "../appSearchedItemsByName/moviesSlice";
import AppLogin from "../appLogin/AppLogin";

import "./AppUserPageTemplate.scss";

function AppUserPageTemplate() {
  const clientAddress = useSelector((state) => state.movies.clientAddress);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem(params.id)) {
      dispatch(fetchFavoriteMovies(params.id));
    }
  }, []);

  if (localStorage.getItem(params.id)) {
    return (
      <div className="container">
        <section>
          <h2>User page</h2>
          <button
            onClick={() => {
              localStorage.removeItem(params.id);
              window.location.href = `${clientAddress}/login`;
            }}
          >
            Log out
          </button>
        </section>
      </div>
    );
  }

  return <AppLogin />;
}

export default AppUserPageTemplate;
