import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const API_URL = 'http://localhost:5000/disasters'

export const loginUser = createAsyncThunk({})
export const registerUser = createAsyncThunk({})
export const userSlice = createSlice({})

export const {logout} = userSlice.actions
export default userSlice.reducer