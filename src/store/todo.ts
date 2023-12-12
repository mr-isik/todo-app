import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

interface Todos {
  todos: Todo[];
}

const initialState: Todos = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) => {
      state.todos.push({
        ...action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});
