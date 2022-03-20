import { RouteObject, useRoutes } from "react-router-dom";

export const RouteElements = (props: { routes: RouteObject[]; }) => {
    const routes = useRoutes(props.routes)
    return routes;
};
