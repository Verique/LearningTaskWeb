import { Navigate, RouteObject } from "react-router-dom";
import { AddPage } from "../pages/AddPage";
import { EditPage } from "../pages/EditPage";
import { MainPage } from "../pages/MainPage";

export const privateRoutes: RouteObject[] = [
  { element: <MainPage />, path: "employee" },
  { element: <EditPage />, path: "employee/:id" },
  { element: <AddPage />, path: "employee/new" },
  { element: <Navigate replace to="employee" />, path: "*" },
];
