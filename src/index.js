import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import router from "./routes";
import Header from "./components/Header/Header.jsx";
import { GlobalStyle } from "./Style.js";

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
    <Header>
      <RouterProvider router={router} />
    </Header>
    <GlobalStyle />
  </React.StrictMode>
);