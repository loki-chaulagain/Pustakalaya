import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllBanner = createAsyncThunk("banner/getAll", async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/banner");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const createBanner = createAsyncThunk("banner/create", async (newBanner: any) => {
  try {
    const res = await axios.post("http://localhost:4000/api/banner", newBanner);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteBanner = createAsyncThunk("banner/delete", async (id: any) => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/banner/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateBanner = createAsyncThunk("banner/update", async ({ id, updatedBanner }: any) => {
  try {
    const res = await axios.put(`http://localhost:4000/api/banner/${id}`, updatedBanner);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
