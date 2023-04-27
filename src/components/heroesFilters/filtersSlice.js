import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { nanoid } from "nanoid";

const heroesFiltersAdapter = createEntityAdapter({
  selectId: (filter) => {
    return (filter.id = nanoid());
  },
});

const initialState = heroesFiltersAdapter.getInitialState({
  filtersLoadingStatus: "idle",
  activeFilter: "all",
});

export const fetchFilters = createAsyncThunk("heroesFilters/fetchFilters", async () => {
  const { request } = useHttp();
  return await request("http://localhost:3001/filters");
});

const heroesFiltersSlice = createSlice({
  name: `heroesFilters`,
  initialState,
  reducers: {
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.filtersLoadingStatus = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        heroesFiltersAdapter.setAll(state, action.payload);
        state.filtersLoadingStatus = "idle";
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.filtersLoadingStatus = "error";
      });
  },
});

export const { selectAll } = heroesFiltersAdapter.getSelectors((state) => state.filters);

const { actions, reducer } = heroesFiltersSlice;
export default reducer;
export const { activeFilterChanged } = actions;
