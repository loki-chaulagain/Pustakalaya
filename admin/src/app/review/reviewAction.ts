import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllReview = createAsyncThunk("review/getAll", async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/review");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const createReview = createAsyncThunk("review/create", async (newReview: any) => {
  try {
    const res = await axios.post("http://localhost:4000/api/review", newReview);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteReview = createAsyncThunk("review/delete", async (id: any) => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/review/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateReview = createAsyncThunk("review/update", async ({ id, updatedReview }: any) => {
  try {
    const res = await axios.put(`http://localhost:4000/api/review/${id}`, updatedReview);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
