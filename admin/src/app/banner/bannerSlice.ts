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

    //update
    builder.addCase(actions.updateBanner.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.updateBanner.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.currentTeam = action.payload;
      state.error = null;
    }),
      builder.addCase(actions.updateBanner.rejected, (state: any, action: any) => {
        state.loading = false;
        state.teamMembers = [];
        state.error = action.error.message;
      });

    //delete
    builder.addCase(actions.deleteBanner.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.deleteBanner.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.teamMembers = [...state.teamMembers.filter((team: { id: any }) => team.id !== action.payload)];
      state.error = null;
    });
    builder.addCase(actions.deleteBanner.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //create
    builder.addCase(actions.createBanner.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.createBanner.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.teamMember = [action.payload];
      state.error = null;
    });
    builder.addCase(actions.createBanner.rejected, (state: any, action: any) => {
      state.loading = false;
      state.teamMembers = [];
      state.error = action.error.message;
    });
  },
} as any);

export const { reducer: bannerReducer, actions: bannerActions } = bannerSlice;
