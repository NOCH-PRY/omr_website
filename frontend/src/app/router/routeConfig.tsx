import HomePage from "../../pages/home";
import MenuPage from "../../pages/menu";
import EventsPage from "../../pages/events";
import ContactPage from "../../pages/contact";
import ServicesPage from "../../pages/services";
import ReservationPage from "../../pages/reservation";
import type { ReactElement } from "react";

export type NavRoute = {
  path: string;
  label: string;
};

export type RouteDefinition = {
  path?: string;
  index?: boolean;
  element: ReactElement;
};

export const navRoutes: NavRoute[] = [
  { path: "/", label: "Home" },
  { path: "/menu", label: "Menu" },
  { path: "/events", label: "Event" },
  { path: "/contact", label: "About us" },
  { path: "/services", label: "Services" },
];

export const routeDefinitions: RouteDefinition[] = [
  { index: true, element: <HomePage /> },
  { path: "menu", element: <MenuPage /> },
  { path: "events", element: <EventsPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "services", element: <ServicesPage /> },
  { path: "reservation", element: <ReservationPage /> },
];
