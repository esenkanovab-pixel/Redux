import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Твой асинхронный запрос (READ)
export const fetchArtifacts = createAsyncThunk(
  'artifacts/fetchArtifacts',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
    return await response.json();
  }
);

const artifactSlice = createSlice({
  name: 'artifacts',
  initialState: { items: [], loading: false },
  reducers: {
    // CREATE: Добавляем новый артефакт в начало списка
    addArtifact: (state, action) => {
      state.items.unshift(action.payload);
    },
    // DELETE: Убираем объект по его ID
    deleteArtifact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // UPDATE: Редактируем существующий артефакт
    updateArtifact: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtifacts.pending, (state) => { 
        state.loading = true; 
      })
      .addCase(fetchArtifacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

// Экспортируем экшены для использования в компонентах
export const { addArtifact, deleteArtifact, updateArtifact } = artifactSlice.actions;
export default artifactSlice.reducer;