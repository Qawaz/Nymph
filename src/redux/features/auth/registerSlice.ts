import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $axios from "@/utilities/axios";

export interface RegisterState {
  status: "idle" | "loading" | "failed";
  errors: string | undefined;
}

export interface SignUpPayload {
  username: string;
  email: string;
  password: string;
}

type ServerResponse = {
  user_id: number;
  solana_pubkey: string | null;
  ethereum_pubkey: string | null;
  username: string;
  email: string | null;
  avatar: string | null;
  created_at: string;
};

const initialState: RegisterState = {
  status: "idle",
  errors: "",
};

export const registerAccount = createAsyncThunk<
  ServerResponse,
  SignUpPayload,
  { rejectValue: string }
>("auth/signup", async (payload: SignUpPayload, thunkAPI) => {
  try {
    const response = await $axios.post("/auth/signup", payload);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err as any);
  }
});

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
      .addCase(registerAccount.rejected, (state, { payload }) => {
        state.status = "failed";
        state.errors = payload;
      });
  },
});

export default registerSlice.reducer;
