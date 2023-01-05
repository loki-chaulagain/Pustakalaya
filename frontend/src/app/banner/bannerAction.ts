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
