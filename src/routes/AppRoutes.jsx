import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Team from "../pages/Team";
import Products from "../pages/products/Products";
import Sustainability from "../pages/sustain/Sustainability";
import Values from "../pages/Values";
import Investors from "../pages/Investors";
import Contact from "../pages/getInTouch/Contact";
import Homeroute from "../pages/Homeroute";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Homeroute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/sustainability",
          element: <Sustainability />,
        },
        {
          path: "/values",
          element: <Values />,
        },
        {
          path: "/investors",
          element: <Investors />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
