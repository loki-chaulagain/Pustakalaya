import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./bannerAction";

const initialState = {
  loading: false,
  banners: [],
  error: "",
};

export const bannerSlice = createSlice({
  name: "banner",
  initialState,

  extraReducers: (builder: any) => {
    builder.addCase(actions.fetchAllBanner.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.fetchAllBanner.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.banners = action.payload;
        state.error = null;
      }),
      builder.addCase(actions.fetchAllBanner.rejected, (state: any, action: any) => {
        state.loading = false;
        state.banners = [];
        state.error = action.error.message;
      });
  },
} as any);

export const { reducer: bannerReducer, actions: bannerActions } = bannerSlice;
