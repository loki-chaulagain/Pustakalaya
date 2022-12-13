import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllMail = createAsyncThunk("contact/getAll", async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/contact");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteMail = createAsyncThunk("contact/delete", async (id: any) => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/contact/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
