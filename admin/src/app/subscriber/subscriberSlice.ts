import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./subscriberAction";

const initialState = {
  loading: false,
  subscribers: [],
  error: "",
};

export const subscriberSlice = createSlice({
  name: "subscriber",
  initialState,

  extraReducers: (builder: any) => {
    builder.addCase(actions.fetchAllSubscriber.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.fetchAllSubscriber.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.subscribers = action.payload;
        state.error = null;
      }),
      builder.addCase(actions.fetchAllSubscriber.rejected, (state: any, action: any) => {
        state.loading = false;
        state.subscribers = [];
        state.error = action.error.message;
      });

    //delete
    builder.addCase(actions.deleteSubscriber.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.deleteSubscriber.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.subscribers = [...state.subscribers.filter((subscriber: { id: any }) => subscriber.id !== action.payload)];
      state.error = null;
    });
    builder.addCase(actions.deleteSubscriber.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
} as any);

export const { reducer: subscriberReducer, actions: subscriberActions } = subscriberSlice;
