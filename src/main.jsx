import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./global.css";
import AppRouter from "./AppRouter.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Toaster position="top-right" />
      <StrictMode>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </StrictMode>
    </PersistGate>
  </Provider>,
);
