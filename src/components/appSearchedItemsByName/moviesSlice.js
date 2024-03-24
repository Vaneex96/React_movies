import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
  serverAddress: "http://localhost:8080",
  clientAddress: "http://localhost:3000",
  jwtLoadingStatus: "idle",
  isMovieInFavorite: null,
  movieAddingStatus: "idle",
  movieByIdLoadingStatus: "idle",
  movieById: {},
  isEmailInUsing: null,
  isEmailInUsingStatusLoading: "idle",
  activationAccountStatusLoading: "idle",
  isUserNameExist: null,
  isUserNameExistStatusLoading: "idle",
  loadingUserDataStatus: "idle",
  favoritesMovies: [],
  jwtToken: "",
  user: null,
  isSearchingByFilters: false,
  popularMovies: { movie_list: [], total_pages: 0 },
  freeToWatchMovies: [],
  filtrationGenres: [],
  pagination: 12,
  totalItems: null,
  loadingStatus: "idle",
  genreMatch: {},
  // movieByNameLoadingStatus: "idle",
  imagesOfMovie: [],
  objectOfEmployees: {},
};

// export const addFiltrationGenres = createAsyncThunk(
//   "movies/fetchMovieById",
//   (genresArr) => {
//     initialState.filtrationGenres = genresArr;
//   }
// );

// export const fetchCheckMovieInFavorite = createAsyncThunk(
//   "movies/fetchCheckMovieInFavorite",
//   ({ userId, movieId }) => {
//     const { request } = useHttp();
//     return request(
//       initialState.serverAddress +
//         `/id/${userId}/check_movie_in_favorite/movie_id/${movieId}`,
//       "GET",
//       null,
//       {
//         "Content-Type": "application/json",
//         accept: "application/json",
//         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//       }
//     );
//   }
// );

export const fetchCheckMovieInFavorite = createAsyncThunk(
  "movies/fetchCheckMovieInFavorite",
  ({ userId, movieId }) => {
    const { request } = useHttp();
    return request(
      initialState.serverAddress +
        `/id/${userId}/check_movie_in_favorite/movie_id/${movieId}`,
      "GET",
      null,
      {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    );
  }
);

export const fetchAddMovieToFavorite = createAsyncThunk(
  "movies/fetchAddMovieToFavorite",
  ({ userId, movieId }) => {
    const { request } = useHttp();
    return request(
      initialState.serverAddress +
        `/id/${userId}/add_movie_to_favorite/movie_id/${movieId}`,
      "POST",
      null,
      {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    );
  }
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  (id) => {
    const { request } = useHttp();
    return request(initialState.serverAddress + `/movies/movie/id/${id}`);
  }
);

export const fetchCheckEmailExist = createAsyncThunk(
  "movies/fetchCheckEmailExist",
  (email) => {
    const { request } = useHttp();
    return request(initialState.serverAddress + `/is_email_in_use/${email}`);
  }
);

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
    return request(
      `${initialState.serverAddress}/id/${id}/favorites_movies`,
      "GET",
      null,
      {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    );
  }
);

///////////////////////////////////////////////////////////////////////////////////////////////
export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  ({ pageNumber }) => {
    const { request } = useHttp();
    return request(
      `${initialState.serverAddress}/movies/popular_movies/page/${pageNumber}/pagination/${initialState.pagination}`
    );
  }
);

export const fetchFreeToWatchMovies = createAsyncThunk(
  "movies/fetchFreeToWatchMovies",
  ({ pageNumber }) => {
    const { request } = useHttp();
    return request(
      `${initialState.serverAddress}/movies/popular_movies/page/${pageNumber}/pagination/${initialState.pagination}`
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
  ({ genres, page, sortingType }) => {
    const { request } = useHttp();

    // initialState.filtrationGenres = genres;

    return request(
      initialState.serverAddress + `/movies/by_genres_ids/page/${page}`,
      "POST",
      JSON.stringify({ genresIds: genres, sortingType: sortingType })
    );
    // return request(
    //   `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${lang}&page=1&sort_by=${sortBy}&with_genres=${genres}`
    // );
  }
);

export const fetchMovieByName = createAsyncThunk(
  "movies/fetchMovieByName",
  ({ title, page, paginateBy }) => {
    if (!page) page = 1;
    if (!paginateBy) paginateBy = 12;

    console.log("page: " + page + " ,paginateBy: " + paginateBy);

    const { request } = useHttp();
    return request(
      initialState.serverAddress +
        `/movies/search_by_title/${title}/page/${page}/paginate_by/${paginateBy}/sort_by/popularity_desc`
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.popularMovies = action.payload;
        state.totalPages = action.payload.total_pages;
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
        // state.popularMovies.results.forEach((item) => {
        //   item.genre_ids = item.genre_ids.map(
        //     (item) => state.objectOfFilters[item]
        //   );
        // });
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
        state.isSearchingByFilters = true;

        // state.popularMovies.results.forEach((item) => {
        //   item.genre_ids = item.genre_ids.map(
        //     (item) => state.objectOfFilters[item]
        //   );
        // });
      })
      .addCase(fetchPopularMoviesByFilters.rejected, (state) => {
        state.loadingStatus = "error";
      })
      .addCase(fetchImagesMovieById.fulfilled, (state, action) => {
        state.imagesOfMovie.push(action.payload.posters[0]);
      })
      .addCase(fetchJwtToken.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchJwtToken.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.jwtToken = action.payload.token;
        localStorage.setItem("jwt", action.payload.token);
        localStorage.setItem("username", action.payload.userName);
        localStorage.setItem("id", action.payload.id);

        if (state.jwtToken !== "") {
          window.location.href = `${initialState.clientAddress}/user/${action.payload.id}`;
        }
      })
      .addCase(fetchJwtToken.rejected, (state) => {
        state.jwtLoadingStatus = "error";
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
      .addCase(fetchCheckEmailExist.pending, (state) => {
        state.isEmailInUsingStatusLoading = "loading";
      })
      .addCase(fetchCheckEmailExist.fulfilled, (state, action) => {
        state.isEmailInUsing = false;
        state.isEmailInUsingStatusLoading = "idle";
      })
      .addCase(fetchCheckEmailExist.rejected, (state, action) => {
        state.isEmailInUsing = true;
        state.isEmailInUsingStatusLoading = "error";
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.movieByIdLoadingStatus = "loading";
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.movieById = action.payload;
        state.movieByIdLoadingStatus = "idle";
      })
      .addCase(fetchMovieById.rejected, (state) => {
        state.movieByIdLoadingStatus = "error";
      })
      .addCase(fetchFreeToWatchMovies.pending, (state) => {
        // state.movieByIdLoadingStatus = "loading";
      })
      .addCase(fetchFreeToWatchMovies.fulfilled, (state, action) => {
        state.freeToWatchMovies = action.payload.movie_list;
        // state.movieByIdLoadingStatus = "idle";
      })
      .addCase(fetchFreeToWatchMovies.rejected, (state, action) => {
        // state.movieByIdLoadingStatus = "error";
      })
      .addCase(fetchAddMovieToFavorite.pending, (state) => {
        state.movieAddingStatus = "loading";
      })
      .addCase(fetchAddMovieToFavorite.fulfilled, (state, action) => {
        state.movieAddingStatus = "idle";
      })
      .addCase(fetchAddMovieToFavorite.rejected, (state, action) => {
        state.movieAddingStatus = "error";
      })
      .addCase(fetchCheckMovieInFavorite.pending, (state) => {
        // state.movieAddingStatus = "loading";
      })
      .addCase(fetchCheckMovieInFavorite.fulfilled, (state, action) => {
        state.isMovieInFavorite = action.payload;
      })
      .addCase(fetchCheckMovieInFavorite.rejected, (state, action) => {
        // state.movieAddingStatus = "error";
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

export const { setPopularMovies } = actions;

export default reducer;
