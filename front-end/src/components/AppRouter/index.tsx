import { useAppSelector } from "../../hooks/ReduxHooks";
import { privateRoutes, publicRoutes } from "../../router";
import { RouteElements } from "./RouteElements";

export const AppRouter = () => {
    const { isLogged } = useAppSelector(state => state.auth)


    return (
        <div className="AppRouter">
            {isLogged ?
                <RouteElements routes={privateRoutes} />
                :
                <RouteElements routes={publicRoutes} />
            }
        </div>
    );
}
