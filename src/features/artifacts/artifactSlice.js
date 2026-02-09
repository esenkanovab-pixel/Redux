import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Функция для загрузки данных с задержкой 2 сек
export const fetchArtifacts = createAsyncThunk(
  'artifacts/fetchArtifacts',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Задержка
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
    return await response.json();
  }
);

const artifactSlice = createSlice({
  name: 'artifacts',
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtifacts.pending, (state) => { state.loading = true; })
      .addCase(fetchArtifacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export default artifactSlice.reducer;