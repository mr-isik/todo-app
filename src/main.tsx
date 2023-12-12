import ReactDOM from "react-dom/client";
import MainLayout from "~/layouts/main";
import "~/assets/css/tailwind.css";
import { Provider } from "react-redux";
import { store } from "~/store";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <MainLayout />
  </Provider>
);
