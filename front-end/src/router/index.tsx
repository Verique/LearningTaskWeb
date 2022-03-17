import { Navigate, RouteProps } from "react-router-dom";
import { LoginPage } from "../components/LoginPage";
import { MainPage } from "../components/MainPage";

export const privateRoutes: RouteProps[] = [
    { element: <MainPage />, path: "/employee" },
    { element: <Navigate replace to="/employee" />, path: "*" },
];
export const publicRoutes: RouteProps[] = [
    { element: <LoginPage />, path: "/login" },
    { element: <Navigate replace to="/login" />, path: "*" },
];