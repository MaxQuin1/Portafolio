import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import CondicionAtmosferica from "../Pages/CondicionAtmosferica";
import Login from "../components/login";

export const rutas = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/condicionAtmosferica",
      element: <CondicionAtmosferica />,
    },
    {
      path: "/login",
      element: <Login />,
    }
]);
