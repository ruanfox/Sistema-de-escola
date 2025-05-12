import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./routes/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";
import PersonalInfo from "./pages/PersonalInfo";
import Teaches from "./pages/Teaches";
import Students from "./pages/Students";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <Dashboard />},
      { path: "informacaoPessoal", element: <PersonalInfo />},
      { path: "professores", element: <Teaches />},
      { path: "estudantes", element: <Students />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);