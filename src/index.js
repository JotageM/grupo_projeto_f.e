import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import router from "./routes";

import { GlobalStyle } from "./Style.js";
import ScrollToTop from "./components/Scroll-to-top/Scroll-to-top";

import './i18n';


const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
      <GlobalStyle />
    </RouterProvider>
  </React.StrictMode>
);