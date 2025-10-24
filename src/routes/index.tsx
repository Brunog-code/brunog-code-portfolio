import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { Home } from "../pages/Home";
import { ProjectDetails } from "../pages/ProjectDetails";

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
]);
