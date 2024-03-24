import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
  serverAddress: "http://localhost:8080",
  sort: "",
  whereToWatch: [],
  genres: [],
  genresLoadingStatus: "idle",
  objectOfGenres: {},
  languagesLoadingStatus: "idle",
  languages: [],
  searchByName: "",
  filtrationGenres: [],
  sortingType: "",
};

export const fetchGenres = createAsyncThunk("filters/fetchGenres", () => {
  const { request } = useHttp();
  return request(initialState.serverAddress + "/movies/all_genres");
});

export const fetchLanguages = createAsyncThunk("filters/fetchLanguages", () => {
  const { request } = useHttp();
  return request("https://api.themoviedb.org/3/configuration/languages");
});

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchByName: (state, action) => {
      state.searchByName = action.payload;
    },
    filtersAddFiltrationGenres: (state, action) => {
      state.filtrationGenres = action.payload;
    },
    filtersAddSortingType: (state, action) => {
      state.sortingType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.genresLoadingStatus = "loading";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genresLoadingStatus = "idle";
        state.genres = action.payload;
        // action.payload.genres.forEach((item) => {
        //   state.objectOfGenres[item.id] = item.name;
        // });
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.genresLoadingStatus = "error";
      })
      .addCase(fetchLanguages.pending, (state) => {
        state.languagesLoadingStatus = "loading";
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.languagesLoadingStatus = "idle";
        state.languages = action.payload.sort((a, b) =>
          a.english_name.localeCompare(b.english_name)
        );
      })
      .addCase(fetchLanguages.rejected, (state) => {
        state.languagesLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = filtersSlice;

export default reducer;

export const {
  setSearchByName,
  filtersAddFiltrationGenres,
  filtersAddSortingType,
} = actions;
