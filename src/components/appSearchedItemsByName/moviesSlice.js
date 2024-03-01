import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { useHttps } from "../../hooks/http.hook copy";

const initialState = {
  serverAddress: "http://localhost:8080",
  clientAddress: "http://localhost:3000",
  activationAccountStatusLoading: "idle",
  isUserNameExist: false,
  isUserNameExistStatusLoading: "idle",
  loadingUserDataStatus: "idle",
  favoritesMovies: [],
  jwtToken: "",
  user: null,
  popularMovies: {
    results: [],
  },
  loadingStatus: "idle",
  genreMatch: {},
  // movieByNameLoadingStatus: "idle",
  imagesOfMovie: [],
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
  objectOfEmployees: {},
};

export const fetchConfirmEmail = createAsyncThunk(
  "movies/fetchConfirmEmail",
  (code) => {
    const { request } = useHttp();
    return request(initialState.serverAddress + `/account_activation/${code}`);
  }
);

export const fetchIsUserNameExist = createAsyncThunk(
  "movies/fetchIsUserNameExist",
  (userName) => {
    const { request } = useHttp();
    return request(
      initialState.serverAddress + `/is_user_exist_with_name/${userName}`
    );
  }
);

export const fetchJwtToken = createAsyncThunk(
  "movies/fetchJwtToken",
  (user) => {
    const { request } = useHttp();
    return request(
      initialState.serverAddress + "/auth",
      "POST",
      JSON.stringify(user)
    );
  }
);

export const fetchRegistration = createAsyncThunk(
  "movies/fetchRegistration",
  (user) => {
    const { request } = useHttp();
    return request(
      initialState.serverAddress + "/registration",
      "POST",
      JSON.stringify(user)
    );
  }
);

export const fetchFavoriteMovies = createAsyncThunk(
  "movies/fetchFavoriteMovies",
  (id) => {
    const { request } = useHttp();
    console.log(`Bearer ${localStorage.getItem(id)}`);
    return request(
      `${initialState.serverAddress}/id/${id}/favorites_movies`,
      "GET",
      null,
      {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem(id)}`,
      }
    );
  }
);

///////////////////////////////////////////////////////////////////////////////////////////////
export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  (movieList) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/movie/${movieList}?language=en-US&page=1`
    );
  }
);

// export const fetchNowPlayingMovies = createAsyncThunk(
//   "movies/fetchNowPlayingMovies",
//   () => {
//     const { request } = useHttp();
//     return request(
//       "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
//     );
//   }
// );

// export const fetchUpcommingMovies = createAsyncThunk(
//   "movies/fetchUpcommingMovies",
//   () => {
//     const { request } = useHttp();
//     return request(
//       "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
//     );
//   }
// );

// export const fetchTopRatedMovies = createAsyncThunk(
//   "movies/fetchTopRatedMovies",
//   () => {
//     const { request } = useHttp();
//     return request(
//       "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
//     );
//   }
// );

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

export const fetchImagesMovieById = createAsyncThunk(
  "movies/fetchImagesMovieById",
  (id) => {
    const { request } = useHttp();
    return request(`https://api.themoviedb.org/3/movie/${id}/images`);
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
      .addCase(fetchImagesMovieById.fulfilled, (state, action) => {
        console.log(action.payload);
        state.imagesOfMovie.push(action.payload.posters[0]);
      })
      .addCase(fetchJwtToken.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchJwtToken.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.jwtToken = action.payload.token;
        localStorage.setItem(action.payload.id, action.payload.token);

        if (state.jwtToken !== "") {
          window.location.href = `${initialState.clientAddress}/user/${action.payload.id}`;
        }
      })
      .addCase(fetchJwtToken.rejected, (state) => {
        state.loadingStatus = "error";
      })
      .addCase(fetchFavoriteMovies.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.favoritesMovies = action.payload;
      })
      .addCase(fetchFavoriteMovies.rejected, (state) => {
        state.loadingStatus = "error";
      })
      .addCase(fetchRegistration.pending, (state) => {
        state.loadingUserDataStatus = "loading";
      })
      .addCase(fetchRegistration.fulfilled, (state, action) => {
        state.loadingUserDataStatus = "idle";
        state.user = action.payload;

        console.log(state.loadingUserDataStatus);
      })
      .addCase(fetchRegistration.rejected, (state) => {
        state.loadingUserDataStatus = "error";
      })
      .addCase(fetchIsUserNameExist.pending, (state) => {
        state.isUserNameExistStatusLoading = "loading";
      })
      .addCase(fetchIsUserNameExist.fulfilled, (state, action) => {
        state.isUserNameExistStatusLoading = "idle";
        state.isUserNameExist = action.payload;

        console.log(state.loadingUserDataStatus);
      })
      .addCase(fetchIsUserNameExist.rejected, (state) => {
        state.isUserNameExistStatusLoading = "error";
      })
      .addCase(fetchConfirmEmail.pending, (state) => {
        state.activationAccountStatusLoading = "loading";
      })
      .addCase(fetchConfirmEmail.fulfilled, (state, action) => {
        state.activationAccountStatusLoading = "done";
      })
      .addCase(fetchConfirmEmail.rejected, (state) => {
        state.activationAccountStatusLoading = "error";
      })

      // .addCase(fetchUpcommingMovies.pending, (state) => {
      //   state.loadingStatus = "loading";
      // })
      // .addCase(fetchUpcommingMovies.fulfilled, (state, action) => {
      //   state.loadingStatus = "idle";
      //   state.popularMovies = action.payload;
      // })
      // .addCase(fetchUpcommingMovies.rejected, (state) => {
      //   state.loadingStatus = "error";
      // })
      // .addCase(fetchTopRatedMovies.pending, (state) => {
      //   state.loadingStatus = "loading";
      // })
      // .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
      //   state.loadingStatus = "idle";
      //   state.popularMovies = action.payload;
      // })
      // .addCase(fetchTopRatedMovies.rejected, (state) => {
      //   state.loadingStatus = "error";
      // })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = moviesSlice;

// export const { setPopularMovies } = actions;

export default reducer;
