import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout";
import Course from "../components/Course";
import ChangePassword from "../components/ChangePassword";
import { ErrorPage } from "../pages/404";
import { Profile } from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/profile/userinfo" replace />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/profile/userinfo",
        element: <ChangePassword />,
      },
      {
        path: "/profile/course",
        element: <Course />,
      },
    ],
  },
]);
