import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $axios from "@/utils/axios";

export interface RegisterState {
  status: "idle" | "loading" | "failed";
  errors: string | undefined;
}

export interface SignUpPayload {
  username: string;
  email: string;
  password: string;
}

const initialState: RegisterState = {
  status: "idle",
  errors: "",
};

export const registerAccount = createAsyncThunk(
  "auth/signup",
  async (payload: SignUpPayload, thunkAPI) => {
    try {
      const response = await $axios.post("/auth/signup", payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  },
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAccount.pending, (state) => {
        state.status = "loading";
        state.errors = undefined;
      })
      .addCase(registerAccount.fulfilled, (state, action) => {
        state.status = "idle";
        console.warn(action);
      })
      .addCase(registerAccount.rejected, (state, action) => {
        state.status = "failed";
        console.warn(action);
        state.errors = action.error.message;
      });
  },
});

export default registerSlice.reducer;
