import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const COUNTRIES_URL = 'https://restcountries.com/v3.1/all';

export const countriesItem = createAsyncThunk('country', async () => {
  const response = await fetch(COUNTRIES_URL);
  const result = await response.json();

  const countryItemData = result.map((item) => ({
    name: item.name.common,
    capital: item.capital,
    continent: item.continents[0],
    flag: item.flags.png,
    population: item.population,
    map: item.maps.googleMaps,
    area: item.area,

  }));

  return countryItemData;
});

const initialState = {
  countryData: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countriesItem.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(countriesItem.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        countryData: action.payload,
      }))
      .addCase(countriesItem.rejected, (state) => ({
        ...state,
        loading: true,
      }));
  },
});

export default countriesSlice.reducer;
