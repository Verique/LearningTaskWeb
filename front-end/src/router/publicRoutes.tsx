import { Navigate, RouteObject } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const publicRoutes: RouteObject[] = [
  { element: <LoginPage />, path: "login" },
  { element: <Navigate replace to="login" />, path: "*" },
];
