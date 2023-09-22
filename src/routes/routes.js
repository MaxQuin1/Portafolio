import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import CondicionAtmosferica from "../Pages/weather";

export const rutas = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/weather",
      element: <CondicionAtmosferica />,
    }
]);
