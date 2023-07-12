import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/todos");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createTodo = createAsyncThunk(
  "todo/createTodo",
  async (payload) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/todos",
        payload
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (payload) => {
    try {
      const { data } = axios.delete(
        `http://localhost:5000/api/todos/${payload}`
      );
      window.location.reload();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, task }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/todos/${id}`,
        { task }
      );
      window.location.reload();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    ///////////////////////////////////////////////////////////////////////////
    builder.addCase(createTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.newTodo = action.payload;
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    /////////////////////////////////////////////////////////////
    builder.addCase(deleteTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.deletedTodo = action.payload;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    //////////////////////////////////////////////////////////
    builder.addCase(updateTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.upadtedTodo = action.payload;
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default todoSlice.reducer;
