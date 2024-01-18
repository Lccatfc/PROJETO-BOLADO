import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// src/main.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routers/Page/home/Home.jsx";
import { Menu } from "./layout/menu.jsx";
import { Box } from "@mui/material";
import Contato from "./routers/Page/contato/index.jsx";
import Info from "./routers/Page/info/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contato",
    element: <Contato />
  },
  {
    path: "/info",
    element: <Info />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Menu />
      <Box m={3}>
        <RouterProvider router={router} />
      </Box>
    </div>
  </React.StrictMode>
);
