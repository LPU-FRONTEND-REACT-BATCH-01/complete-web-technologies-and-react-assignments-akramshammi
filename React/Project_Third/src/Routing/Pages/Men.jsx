import React from "react";
import { Link, Outlet } from "react-router";

const Men = () => {
  return (
    <>
      <h1>Men Page</h1>

      <Link to="shirt">Shirt</Link> |{" "}
      <Link to="shoes">Shoes</Link>

      <Outlet />
    </>
  );
};

export default Men;