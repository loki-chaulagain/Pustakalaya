import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./blogAction";

const initialState = {
  loading: false,
  blogs: [],
  error: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,

  extraReducers: (builder: any) => {
    builder.addCase(actions.fetchAllBlog.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.fetchAllBlog.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.blogs = action.payload;
        state.error = null;
      }),
      builder.addCase(actions.fetchAllBlog.rejected, (state: any, action: any) => {
        state.loading = false;
        state.blogs = [];
        state.error = action.error.message;
      });

    //update
    builder.addCase(actions.updateBlog.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.updateBlog.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.blog = action.payload;
      state.error = null;
    }),
      builder.addCase(actions.updateBlog.rejected, (state: any, action: any) => {
        state.loading = false;
        state.blogs = [];
        state.error = action.error.message;
      });

    //delete
    builder.addCase(actions.deleteBlog.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.deleteBlog.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.blogs = [...state.blogs.filter((blog: { id: any }) => blog.id !== action.payload)];
      state.error = null;
    });
    builder.addCase(actions.deleteBlog.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //create
    builder.addCase(actions.createBlog.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(actions.createBlog.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.blog = [action.payload];
      state.error = null;
    });
    builder.addCase(actions.createBlog.rejected, (state: any, action: any) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message;
    });
  },
} as any);

export const { reducer: blogReducer, actions: blogActions } = blogSlice;
