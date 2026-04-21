import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import HomeLayout from "../Layouts/HomeLayout";

import Landing from "../Pages/Landing";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Shirt from "../Pages/Shirt";
import Shoes from "../Pages/Shoes";
import Kurta from "../Pages/Kurta";
import WomenShoes from "../Pages/WomenShoes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="landing" element={<Landing />} />

          <Route path="men" element={<Men />}>
            <Route path="shirt" element={<Shirt />} />
            <Route path="shoes" element={<Shoes />} />
          </Route>

          <Route path="women" element={<Women />}>
            <Route path="kurta" element={<Kurta />} />
            <Route path="shoes" element={<WomenShoes />} />
          </Route>

          <Route path="cart" element={<h1>Cart Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;