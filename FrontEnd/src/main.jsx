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

const router = createBrowserRouter([
  {
    path: "/home",
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
    element: <Layout />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
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
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/hello" element={<Hello />}></Route>
//       <Route path="/user" element={<Layout />}>
//         <Route path="signUp" element={<Signup />} />
//         {/* <Route path="login" element={<Login />} /> */}
//         <Route path="dashboard" element={<DashBoard />} />
//         <Route path="all" element={<AllUser />} />
//       </Route>
//       <Route path="profile" element={<Layout />}>
//         <Route path="all" element={<AllProfile />} />
//         <Route path=":userId" element={<Profile />} />
//         <Route path="update/:userId" element={<UpdateProfile />} />
//       </Route>
//       <Route path="/home" element={<App />}></Route>
//     </>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
