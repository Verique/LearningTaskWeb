import { useRoutes } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";

export const AppRouter = () => {
  const { isLogged } = useAppSelector((state) => state.auth);
  const privateRoutesElement = useRoutes(privateRoutes);
  const publicRoutesElement = useRoutes(publicRoutes);

  return (
    <div className="AppRouter">
      {(() => (isLogged ? privateRoutesElement : publicRoutesElement))()}
    </div>
  );
};
