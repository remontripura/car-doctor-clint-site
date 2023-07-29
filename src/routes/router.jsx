import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Service from "../pages/Services/Service";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "service",
          element: <Service />
        }
      ]
    }
  ]);
  export default router;