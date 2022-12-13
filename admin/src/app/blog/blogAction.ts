import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllBlog = createAsyncThunk("blog/getAll", async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/blog");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const createBlog = createAsyncThunk("blog/create", async (newBlog: any) => {
  try {
    const res = await axios.post("http://localhost:4000/api/blog", newBlog);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteBlog = createAsyncThunk("blog/delete", async (id: any) => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/blog/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateBlog = createAsyncThunk("blog/update", async ({ id, updatedBlog }: any) => {
  try {
    const res = await axios.put(`http://localhost:4000/api/blog/${id}`, updatedBlog);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
