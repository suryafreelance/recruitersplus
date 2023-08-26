import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import appRoutes from "./appRoutes";
import Navbar from "./components/Navbar";

const MainLayout = (props) => {
  console.log(props)
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <Routes>
        <Route path="/login" element={<Navigate to="/dashboard" />} />
          {appRoutes?.map((eachRoute) => (
            <Route
              key={eachRoute.path}
              path={eachRoute.path}
              element={<eachRoute.component />}
            />
          ))}
        </Routes>
      </div>

    </div>
  );
};

export default MainLayout;
