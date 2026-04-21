import React from "react";
import { Link, Outlet } from "react-router";

const Women = () => {
  return (
    <>
      <h1>Women Page</h1>

      <Link to="kurta">Kurta</Link> |{" "}
      <Link to="shoes">Shoes</Link>

      <Outlet />
    </>
  );
};

export default Women;