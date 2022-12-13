import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./mailAction";

const initialState = {
  loading: false,
  mails: [],
  error: "",
};

export const mailSlice = createSlice({
  name: "contact",
  initialState,

  extraReducers: (builder: any) => {
    builder.addCase(actions.fetchAllMail.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.fetchAllMail.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.mails = action.payload;
        state.error = null;
      }),
      builder.addCase(actions.fetchAllMail.rejected, (state: any, action: any) => {
        state.loading = false;
        state.mails = [];
        state.error = action.error.message;
      });

    //delete
    builder.addCase(actions.deleteMail.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.deleteMail.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.mails = [...state.mails.filter((mail: { id: any }) => mail.id !== action.payload)];
      state.error = null;
    });
    builder.addCase(actions.deleteMail.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
} as any);

export const { reducer: mailReducer, actions: mailActions } = mailSlice;
