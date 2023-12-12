import { nanoid } from "@reduxjs/toolkit";
import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "~/store";

const Input = () => {
  const isDarkMode = useSelector(
    (state: React.ComponentState) => state.theme.theme
  );
  const dispatch = useAppDispatch();

  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "todos/addTodo", payload: { id: nanoid(), content } });
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(
        "flex gap-4 items-center px-6 h-16 rounded-md shadow-lg",
        {
          "bg-[#25273c]": isDarkMode,
          "bg-[#fff]": !isDarkMode,
        }
      )}
    >
      <div
        className={classNames("w-6 h-6 rounded-full border-2 ", {
          "border-[#4d5066]": isDarkMode,
          "border-[#d2d3db]": !isDarkMode,
        })}
      ></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={classNames(
          "flex-1 bg-transparent outline-none border-none",
          {
            "text-[#e4e5f1]": isDarkMode,
            "text-black": !isDarkMode,
          }
        )}
      />
    </form>
  );
};

export default Input;
