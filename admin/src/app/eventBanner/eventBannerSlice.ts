import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./eventBannerAction";

const initialState = {
  loading: false,
  eventBanners: [],
  error: "",
};

export const eventBannerSlice = createSlice({
  name: "event-banner",
  initialState,

  extraReducers: (builder: any) => {
    builder.addCase(actions.fetchAllEventBanner.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.fetchAllEventBanner.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.eventBanners = action.payload;
        state.error = null;
      }),
      builder.addCase(actions.fetchAllEventBanner.rejected, (state: any, action: any) => {
        state.loading = false;
        state.eventBanners = [];
        state.error = action.error.message;
      });

    //delete
    builder.addCase(actions.deleteEventBanner.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.deleteEventBanner.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.eventBanners = [...state.eventBanners.filter((team: { id: any }) => team.id !== action.payload)];
      state.error = null;
    });
    builder.addCase(actions.deleteEventBanner.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //create
    builder.addCase(actions.createEventBanner.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.createEventBanner.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.eventBanners = [action.payload];
      state.error = null;
    });
    builder.addCase(actions.createEventBanner.rejected, (state: any, action: any) => {
      state.loading = false;
      state.eventBanners = [];
      state.error = action.error.message;
    });
  },
} as any);

export const { reducer: eventBannerReducer, actions: eventBannerActions } = eventBannerSlice;
