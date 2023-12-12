import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { themeSlice } from "~/store/theme";
import { todoSlice } from "~/store/todo";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    todos: todoSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
