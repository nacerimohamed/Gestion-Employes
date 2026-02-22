import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// État initial
const initialState = {
  list: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

// Action asynchrone pour récupérer les employés depuis l'API
export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await axios.get('https://serverApi/employes');
    return response.data; // retourne la liste des employés
  }
);

// Slice
const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const { numero, ...updatedData } = action.payload;
      const existingEmployee = state.list.find(emp => emp.numero === numero);
      if (existingEmployee) {
        Object.assign(existingEmployee, updatedData);
      }
    },
    deleteEmployee: (state, action) => {
      const numero = action.payload;
      state.list = state.list.filter(emp => emp.numero !== numero);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Export des actions créées automatiquement
export const { addEmployee, updateEmployee, deleteEmployee } = employeesSlice.actions;

// Export du reducer
export default employeesSlice.reducer;