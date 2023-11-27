import { useHttp } from "../../hooks/http.hook";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movies: { total_results: "", results: [] },
  tvShows: { total_results: "", results: [] },
  people: { total_results: "", results: [] },
  collections: { total_results: "", results: [] },
  companies: { total_results: "", results: [] },
  keywords: { total_results: "", results: [] },
  networks: { total_results: "", results: [] },
  multies: { total_results: "", results: [] },
  switcher: "",
  activeFilter: "movies",
  counter: 0,
};

export const fetchMovies = createAsyncThunk(
  "filtersByName/fetchMovies",
  (name) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`
    );
  }
);

export const fetchTvShows = createAsyncThunk(
  "filtersByName/fetchTvShows",
  (name) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&language=en-US&page=1`
    );
  }
);

export const fetchCollections = createAsyncThunk(
  "filtersByName/fetchCollections",
  (name) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/search/collection?query=${name}&include_adult=false&language=en-US&page=1`
    );
  }
);

export const fetchCompanies = createAsyncThunk(
  "filtersByName/fetchCompanies",
  (name) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/search/company?query=${name}&include_adult=false&language=en-US&page=1`
    );
  }
);

export const fetchKeywords = createAsyncThunk(
  "filtersByName/fetchKeywords",
  (name) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/search/keyword?query=${name}&include_adult=false&language=en-US&page=1`
    );
  }
);

export const fetchMulties = createAsyncThunk(
  "filtersByName/fetchMulties",
  (name) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1`
    );
  }
);

export const fetchPersons = createAsyncThunk(
  "filtersByName/fetchPersons",
  (name) => {
    const { request } = useHttp();
    return request(
      `https://api.themoviedb.org/3/search/person?query=${name}&include_adult=false&language=en-US&page=1`
    );
  }
);

const filtersByNameSlice = createSlice({
  name: "filtersByName",
  initialState,
  reducers: {
    setSwitcher: (state, action) => {
      state.switcher = action.payload;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.tvShows = action.payload;
      })
      .addCase(fetchCollections.fulfilled, (state, action) => {
        state.collections = action.payload;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.companies = action.payload;
      })
      .addCase(fetchKeywords.fulfilled, (state, action) => {
        state.keywords = action.payload;
      })
      .addCase(fetchMulties.fulfilled, (state, action) => {
        state.multies = action.payload;
      })
      .addCase(fetchPersons.fulfilled, (state, action) => {
        state.people = action.payload;
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = filtersByNameSlice;

export const { setSwitcher, setActiveFilter, setCounter } = actions;

export default reducer;
