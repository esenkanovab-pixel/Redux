import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import artifactReducer from '../features/artifacts/artifactSlice'; // Добавь это

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    artifacts: artifactReducer, // Теперь данные доступны в state.artifacts
  },
});