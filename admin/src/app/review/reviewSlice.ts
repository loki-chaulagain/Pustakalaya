import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./reviewAction";

const initialState = {
  loading: false,
  reviews: [],
  error: "",
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,

  extraReducers: (builder: any) => {
    builder.addCase(actions.fetchAllReview.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.fetchAllReview.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.reviews = action.payload;
        state.error = null;
      }),
      builder.addCase(actions.fetchAllReview.rejected, (state: any, action: any) => {
        state.loading = false;
        state.reviews = [];
        state.error = action.error.message;
      });

    //update
    builder.addCase(actions.updateReview.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.updateReview.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.review = action.payload;
      state.error = null;
    }),
      builder.addCase(actions.updateReview.rejected, (state: any, action: any) => {
        state.loading = false;
        state.reviews = [];
        state.error = action.error.message;
      });

    //delete
    builder.addCase(actions.deleteReview.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.deleteReview.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.reviews = [...state.reviews.filter((review: { id: any }) => review.id !== action.payload)];
      state.error = null;
    });
    builder.addCase(actions.deleteReview.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //create
    builder.addCase(actions.createReview.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.createReview.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.teamMember = [action.payload];
      state.error = null;
    });
    builder.addCase(actions.createReview.rejected, (state: any, action: any) => {
      state.loading = false;
      state.teamMembers = [];
      state.error = action.error.message;
    });
  },
} as any);

export const { reducer:reviewReducer, actions:reviewActions } = reviewSlice;
