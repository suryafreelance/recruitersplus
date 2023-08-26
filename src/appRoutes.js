import React from "react";
const Login = React.lazy(() => import("./pages/login/Login"));
const Registration = React.lazy(() =>
  import("./pages/registration/Registration")
);
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));

const appRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  }
];
export default appRoutes;
