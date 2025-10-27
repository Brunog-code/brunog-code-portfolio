import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { Home } from "../pages/Home/Home";
import { ProjectDetails } from "../pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projeto/:id",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "*",
    element:<Navigate to="/" />,
  },
]);
