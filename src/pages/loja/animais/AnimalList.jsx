import React from "react";
import { Outlet } from "react-router-dom";

const AnimalList = () => {
  return (
    <>
      {/* <Loja category="gato" /> */}
      <Outlet />
    </>
  );
};

export default AnimalList;
