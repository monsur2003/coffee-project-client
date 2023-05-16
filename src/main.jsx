import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffe from "./components/AddCoffee/AddCoffe.jsx";
import UpdateCoffe from "./components/AddCoffee/UpdateCoffee/UpdateCoffe.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App></App>,
   },
   {
      path: "addCoffee",
      element: <AddCoffe></AddCoffe>,
   },
   ,
   {
      path: "updateCoffee",
      element: <UpdateCoffe></UpdateCoffe>,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);
