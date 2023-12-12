import { animated, useSpring } from "@react-spring/web";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "~/store";

interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

const Todo: React.FC<Todo> = ({ id, content, completed }) => {
  const isDarkMode = useSelector(
    (state: React.ComponentState) => state.theme.theme
  );

  const dispatch = useAppDispatch();
  const [isCompleted, setIsCompleted] = useState(completed);

  useEffect(() => {
    setIsCompleted(completed);
  }, [completed]);

  const springs = useSpring({
    from: { x: -50 },
    to: { x: 0 },
  });

  return (
    <div
      className={classNames(
        "h-16 flex items-center group justify-between px-6 border-b",
        {
          "text-[#e4e5f1] border-[#4d5066]": isDarkMode,
          "text-black border-[#d2d3db]": !isDarkMode,
        }
      )}
    >
      <animated.div style={{ ...springs }} className="flex gap-4">
        <button
          type="button"
          onClick={() =>
            dispatch({ type: "todos/toggleTodo", payload: { id } })
          }
          className={classNames(
            "flex items-center justify-center w-6 h-6 rounded-full border-2",
            {
              "border-[#4d5066]": isDarkMode,
              "border-[#d2d3db]": !isDarkMode,
              "checked-bg border-none": isCompleted,
            }
          )}
        >
          {isCompleted && (
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          )}
        </button>
        <span
          className={classNames({
            "line-through": isCompleted,
            "text-[#393a4c]": isDarkMode && isCompleted,
            "text-[#d2d3db]": !isDarkMode && isCompleted,
          })}
        >
          {content}
        </span>
      </animated.div>
      <button
        onClick={() => dispatch({ type: "todos/removeTodo", payload: { id } })}
        type="button"
        className="hidden group-hover:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18}>
          <path
            fill={isDarkMode ? "#4d5066" : "#484b6a"}
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Todo;
