import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeConfig } from "./routeConfig";

export function AppRoutes() {
  <BrowserRouter>
    <Routes>
      {routeConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  </BrowserRouter>;
}
