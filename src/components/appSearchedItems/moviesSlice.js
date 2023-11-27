import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
  popularMovies: { results: [] },
  loadingStatus: "idle",
  genreMatch: {},
  // movieByNameLoadingStatus: "idle",
  objectOfFilters: {
    12: "Adventure",
    14: "Fantasy",
    16: "Animation",
    18: "Drama",
    27: "Horror",
    28: "Action",
    35: "Comedy",
    36: "History",
    37: "Western",
    53: "Thriller",
    80: "Crime",
    99: "Documentary",
    878: "Science Fiction",
    9648: "Mystery",
    10402: "Music",
    10749: "Romance",
    10751: "Family",
    10752: "War",
    10770: "TV Movie",
  },
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  () => {
    const { request } = useHttp();
    return request(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );
  }
);

export const fetchPopularMoviesByFilters = createAsyncThunk(
  "movies/fetchPopularMoviesByFilters",
  ({ lang, genres, sortBy }) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${lang}&page=1&sort_by=${sortBy}&with_genres=${genres}`
    );
  }
);

export const fetchMovieByName = createAsyncThunk(
  "movies/fetchMovieByName",
  (name) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`
    );
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  redusers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.popularMovies = action.payload;

        state.popularMovies.results.forEach((item) => {
          if (item.genre_ids) {
            item.genre_ids = item.genre_ids.map(
              (item) => state.objectOfFilters[item]
            );
          } else {
            return item;
          }
        });
      })
      .addCase(fetchPopularMovies.rejected, (state) => {
        state.loadingStatus = "error";
      })
      .addCase(fetchMovieByName.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchMovieByName.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.popularMovies = action.payload;
        state.popularMovies.results.forEach((item) => {
          item.genre_ids = item.genre_ids.map(
            (item) => state.objectOfFilters[item]
          );
        });
      })
      .addCase(fetchMovieByName.rejected, (state) => {
        state.loadingStatus = "error";
      })

      .addCase(fetchPopularMoviesByFilters.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchPopularMoviesByFilters.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.popularMovies = action.payload;
        state.popularMovies.results.forEach((item) => {
          item.genre_ids = item.genre_ids.map(
            (item) => state.objectOfFilters[item]
          );
        });
      })
      .addCase(fetchPopularMoviesByFilters.rejected, (state) => {
        state.loadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = moviesSlice;

// export const { setPopularMovies } = actions;

export default reducer;
