import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllSubscriber = createAsyncThunk("subscriber/getAll", async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/subscriber");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteSubscriber = createAsyncThunk("subscriber/delete", async (id: any) => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/subscriber/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
