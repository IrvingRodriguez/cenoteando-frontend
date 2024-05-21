import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./Pages/Register/Register.tsx";
import { Login } from "./Pages/Login/Login.tsx";
import { Dashboard } from "./Pages/Dashboard/DashboardData.tsx";
import ProtectedRoute from "./Auth/ProtectedRoute.tsx";
import { AuthProvider } from "./Auth/AuthProvider.tsx";
import { Users } from "./Pages/Users/Users.tsx";
import { Home } from "./Pages/Home/Admin/Home.tsx";
import { CenoteProfile } from "./Pages/Cenotes/CenoteProfile/CenoteProfile.tsx";
import { List_cenotes } from "./Pages/Cenotes/CenotesList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/",
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cenote",
        element: <CenoteProfile />,
      },
      {
        path: "/cenotes",
        element: <List_cenotes />,
      },
    ],
  },
]);
/* {
    path: "/data",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/Users",
        element: <Users />,
      },
    ],
  },*/
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
