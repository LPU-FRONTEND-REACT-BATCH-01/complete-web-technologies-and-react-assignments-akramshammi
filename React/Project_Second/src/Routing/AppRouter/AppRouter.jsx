import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import HomeLayout from "../Layouts/HomeLayout";

import Landing from "../Pages/Landing";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Shirt from "../Pages/Shirt";
import Shoes from "../Pages/Shoes";
import Kurta from "../Pages/Kurta";
import WomenShoes from "../Pages/WomenShoes";
import Cart from "../Pages/Cart";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <h1>Home Page</h1>,
        },
        {
          path: "landing",
          element: <Landing />,
        },
        {
          path: "men",
          element: <Men />,
          children: [
            {
              path: "shirt",
              element: <Shirt />,
            },
            {
              path: "shoes",
              element: <Shoes />,
            },
          ],
        },
        {
          path: "women",
          element: <Women />,
          children: [
            {
              path: "kurta",
              element: <Kurta />,
            },
            {
              path: "shoes",
              element: <WomenShoes />,
            },
          ],
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