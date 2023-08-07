import React from "react";
import { Routes, Route } from "react-router-dom";
import appRoutes from "./appRoutes";
import Navbar from "./components/Navbar";

const MainLayout = (children) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">children</div>
    </div>
  );
};

export default MainLayout;
