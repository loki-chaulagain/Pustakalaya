import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllEventBanner = createAsyncThunk("eventBanner/getAll", async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/eventBanner");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const createEventBanner = createAsyncThunk("eventBanner/create", async (newEventBanner: any) => {
  try {
    const res = await axios.post("http://localhost:4000/api/eventBanner", newEventBanner);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteEventBanner = createAsyncThunk("eventBanner/delete", async (id: any) => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/eventBanner/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
