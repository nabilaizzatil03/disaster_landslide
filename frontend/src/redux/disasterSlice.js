import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/disasters';

export const fetchDisasters = createAsyncThunk('disasters/fetch', async (token, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || 'Failed to fetch disasters');
  }
});

export const addDisaster = createAsyncThunk('disasters/add', async ({ token, disaster }, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, disaster, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || 'Failed to add disaster');
  }
});

export const deleteDisaster = createAsyncThunk('disasters/delete', async ({ token, id }, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || 'Failed to delete disaster');
  }
});

const disasterSlice = createSlice({
  name: 'disasters',
  initialState: { data: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDisasters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDisasters.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDisasters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default disasterSlice.reducer;
