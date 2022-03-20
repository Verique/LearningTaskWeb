import { Navigate, RouteObject } from "react-router-dom";
import { EditPage } from "../pages/EditPage";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";

export const privateRoutes: RouteObject[] = [
    { element: <MainPage />, path: "employee" },
    { element: <EditPage />, path: "employee/:id" },
    { element: <Navigate replace to="employee" />, path: "*" }]

export const publicRoutes: RouteObject[] = [
    { element: <LoginPage />, path: "login" },
    { element: <Navigate replace to="login" />, path: "*" }
]

