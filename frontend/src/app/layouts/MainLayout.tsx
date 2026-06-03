import { NavLink, Outlet } from "react-router-dom";
import { appConfig } from "../../config/appConfig";
import { navRoutes } from "../router/routeConfig.tsx";
import type { NavRoute } from "../router/routeConfig.tsx";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="logo" href={appConfig.baseUrl}>
          <span className="logo-mark"></span>
          <span className="logo-text">{appConfig.appName}</span>
        </a>

        <nav className="site-nav">
          {navRoutes.map((route: NavRoute) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `site-link${isActive ? " active" : ""}`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="reservation" className="nav-button">
          Reservation
        </NavLink>
      </header>

      <main className="site-main">
        <Outlet />
      </main>
    </div>
  );
}
