import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";
import Todo from "~/components/todos/todo";
import { useAppDispatch, useAppSelector } from "~/store";

const Todos = () => {
  const isDarkMode = useSelector(
    (state: React.ComponentState) => state.theme.theme
  );
  const [filter, setFilter] = useState("all");

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.todos.todos);
  const todos = data.filter((todo) => {
    if (filter === "all") return todo;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  return (
    <div
      className={classNames("flex flex-col shadow-xl rounded-md", {
        "bg-[#25273c]": isDarkMode,
        "bg-[#fff]": !isDarkMode,
      })}
    >
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          content={todo.content}
          completed={todo.completed}
        />
      ))}

      <div className="h-[60px] flex font-bold items-center px-6 justify-center md:justify-between text-[#4d5066] text-sm">
        <span className="hidden md:inline">{todos.length} items left</span>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("all")}
            className={classNames({ "text-[#3a7bfd]": filter === "all" })}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={classNames({ "text-[#3a7bfd]": filter === "active" })}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={classNames({
              "text-[#3a7bfd]": filter === "completed",
            })}
          >
            Completed
          </button>
        </div>
        <button
          onClick={() => dispatch({ type: "todos/clearCompletedTodos" })}
          className="hidden md:inline"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Todos;
