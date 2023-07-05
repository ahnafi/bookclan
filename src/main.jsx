import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Library from "./pages/Library";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/addBook";
import UpdatePage from "./pages/updatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/library/detail/:id",
    element: <DetailPage />,
  },
  {
    path: "/library/add",
    element: <AddPage/>,
  },
  {
    path: "//library/update/:id",
    element: <UpdatePage/>,
  },
  {
    path: "*",
    element: <h1>404 page not found</h1>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
