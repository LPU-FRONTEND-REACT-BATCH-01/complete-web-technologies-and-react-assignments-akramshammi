import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import HomeLayout from "../Layouts/HomeLayout";
import Landing from "../Pages/Landing";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "landing",
          element: <Landing />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;