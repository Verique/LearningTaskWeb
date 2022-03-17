import { Route, RouteProps, Routes } from "react-router-dom";

export const RouteElements = (props: { routes: RouteProps[]; }): JSX.Element => {
    return (
        <Routes>
            {props.routes.map((route) =>
                <Route
                    path={route.path}
                    key={route.path}
                    element={route.element}
                />
            )}
        </Routes >
    );
};
