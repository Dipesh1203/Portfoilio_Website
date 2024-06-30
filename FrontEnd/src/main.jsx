import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/outfit";
import "@fontsource/roboto";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Signup from "./pages/LoginSignup/Signup.jsx";
import Login from "./pages/LoginSignup/Login.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import AllUser from "./pages/AllUser/AllUser.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import AllProfile from "./pages/AllProfile/AllProfile.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import Hello from "./components/Hello.jsx";
import Home from "./pages/Home/Home.jsx";
import UserDashBoard from "./pages/UserDashBoard/UserDashBoard.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import theme from "./theme.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CreateNewProfile from "./pages/CreateNewProfile/CreateNewProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "test1",
        element: <App />,
      },
    ],
  },
  {
    path: "/user",
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "createprofile",
        element: <CreateNewProfile />,
      },
      {
        path: "dashboard",
        element: <UserDashBoard />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Layout />,
    children: [
      {
        path: ":userId",
        element: <Profile />,
      },
      {
        path: "all",
        element: <AllProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
