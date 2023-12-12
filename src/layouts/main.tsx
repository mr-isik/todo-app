import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { toggleMode } from "~/store/theme";
import Input from "~/components/input";
import Todos from "~/components/todos";
import { useMediaQuery } from "react-responsive";

const MainLayout = () => {
  const isDarkMode = useSelector(
    (state: React.ComponentState) => state.theme.theme
  );
  const isMobile = useMediaQuery({ query: "(max-width: 375px)" });
  const dispatch = useDispatch();

  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };

  return (
    <main
      className={classNames("w-full min-h-screen pb-12", {
        "bg-[#161722] text-white": isDarkMode,
        "bg-[#fafafa] text-black": !isDarkMode,
      })}
    >
      <img
        src={
          isDarkMode && !isMobile
            ? "/bg-desktop-dark.jpg"
            : isDarkMode && isMobile
            ? "/bg-mobile-dark.jpg"
            : !isDarkMode && !isMobile
            ? "/bg-desktop-light.jpg"
            : "/bg-mobile-light.jpg"
        }
        alt="Background"
        className="z-10"
      />

      <aside className="max-w-[500px] px-6 md:px-0 -mt-24 sm:-mt-16 md:-mt-44 w-full z-30 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white tracking-[0.5em]">
            TODO
          </h1>

          <button
            onClick={toggleModeHandler}
            className="bg-transparent outline-none border-none"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26}>
                <path
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26}>
                <path
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex flex-col gap-6 mt-8">
          <Input />
          <Todos />
        </div>
      </aside>
    </main>
  );
};

export default MainLayout;
