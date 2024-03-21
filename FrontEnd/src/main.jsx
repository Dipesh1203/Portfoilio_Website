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
import Signup from "./components/LoginSignup/Signup.jsx";
import Login from "./components/LoginSignup/Login.jsx";
import Profile from "./components/Profile/Profile.jsx";
import AllUser from "./components/AllUser/AllUser.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import AllProfile from "./components/AllProfile/AllProfile.jsx";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/signUp",
//         element: <Signup />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/user" element={<Layout />}>
        <Route path="signUp" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="all" element={<AllUser />} />
      </Route>
      <Route path="profile" element={<Layout />}>
        <Route path="all" element={<AllProfile />} />
        <Route path=":userId" element={<Profile />} />
        <Route path="update/:userId" element={<UpdateProfile />} />
      </Route>
      <Route path="/home" element={<App />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
