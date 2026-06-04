import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { appConfig } from "../../config/appConfig";
import { routeDefinitions } from "./routeConfig";

export default function AppRouter() {
  return (
    <BrowserRouter basename={appConfig.baseUrl}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routeDefinitions.map((route) =>
            route.index ? (
              <Route index element={route.element} key="home" />
            ) : (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            )
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
