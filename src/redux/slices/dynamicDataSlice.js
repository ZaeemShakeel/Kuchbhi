import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDynamicData = createAsyncThunk(
  "dynamicData/fetchDynamicData",
  async (category) => {
    const apiURL = `https://4824.kuchbhi.io/ads/fetchAllSpecificAds/${category}`;
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return { category, data: await response.json() };
  }
);

const dynamicDataSlice = createSlice({
  name: "dynamicData",
  initialState: {
    data: {},
    loading: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDynamicData.pending, (state, action) => {
        const category = action.meta.arg;
        state.loading[category] = true;
        state.error[category] = null;
      })
      .addCase(fetchDynamicData.fulfilled, (state, action) => {
        const { category, data } = action.payload;
        state.loading[category] = false;
        state.data[category] = data;
      })
      .addCase(fetchDynamicData.rejected, (state, action) => {
        const category = action.meta.arg;
        state.loading[category] = false;
        state.error[category] = action.error.message;
      });
  },
});

export default dynamicDataSlice.reducer;
