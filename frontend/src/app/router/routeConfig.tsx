import HomePage from "../../pages/home/index";
import MenuPage from "../../pages/menu/index";
import EventsPage from "../../pages/events/index";
import ContactPage from "../../pages/contact/index";
import ServicesPage from "../../pages/services/index";
import ReservationPage from "../../pages/reservation/index";
import type { JSX } from "react/jsx-runtime";

export type NavRoute = {
  path: string;
  label: string;
};

export type RouteDefinition = {
  path: string;
  element: JSX.Element;
};

export const navRoutes: NavRoute[] = [
  { path: "/", label: "Home" },
  { path: "menu", label: "Menu" },
  { path: "events", label: "Event" },
  { path: "contact", label: "About us" },
  { path: "services", label: "Services" },
];

export const routeDefinitions: RouteDefinition[] = [
  { path: "/", element: <HomePage /> },
  { path: "menu", element: <MenuPage /> },
  { path: "events", element: <EventsPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "services", element: <ServicesPage /> },
  { path: "reservation", element: <ReservationPage /> },
];
