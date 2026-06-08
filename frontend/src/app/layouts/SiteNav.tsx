import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";

import "./SiteNav.css";

type SiteNavProps = {
  logo: string;
  sectionPrefix?: string;
};

export default function SiteNav({ logo, sectionPrefix = "" }: SiteNavProps) {
  const sectionHref = (id: string) => `${sectionPrefix}#${id}`;

  return (
    <nav className="home-nav relative z-[1000] flex items-center justify-between px-5 sm:px-10 pt-6 pb-4">
      {/* Logo routes to homepage */}
      <Link to="/" aria-label="Go to homepage">
        <img
          alt="One More Restaurant"
          className="h-10 sm:h-14 lg:h-[72px] w-auto object-contain flex-shrink-0"
          src={logo}
        />
      </Link>

      {/* Desktop nav */}
      <NavigationMenu
        viewport={false}
        className="home-desktop-navigation hidden lg:flex"
      >
        <NavigationMenuList className="home-desktop-nav-list">
          {/* Menu routes to Menu page */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/menu" className="home-nav-link">
                Menu
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="home-nav-link home-nav-trigger">
              Event
            </NavigationMenuTrigger>

            <NavigationMenuContent className="home-event-menu-content">
              <div className="home-event-menu-list">
                <NavigationMenuLink asChild>
                  <Link to="/events" className="home-event-menu-link">
                    Room Booking
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link to="/services" className="home-event-menu-link">
                    Services
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/aboutus" className="home-nav-link">
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href={sectionHref("gallery")} className="home-nav-link">
                Gallery
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="#contact" className="home-nav-link">
                Contact
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Desktop reservation button */}
      <Button
        asChild
        variant="outline"
        className="home-reservation-link hidden lg:inline-flex"
      >
        <Link to="/reservation">Reservation</Link>
      </Button>

      {/* Mobile / tablet hamburger */}
      <div className="home-mobile-nav-wrapper">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="home-mobile-menu-button"
          aria-label="Open navigation menu"
        >
          <span className="home-mobile-menu-icon">
            <span />
            <span />
            <span />
          </span>
        </Button>

        <div className="home-mobile-menu">
          {/* Menu routes to Menu page */}
          <Link to="/menu" className="home-mobile-link">
            Menu
          </Link>

          <div className="home-mobile-event-wrapper">
            <button type="button" className="home-mobile-event-button">
              Event
            </button>

            <div className="home-mobile-subgroup">
              <Link to="/events" className="home-mobile-sublink">
                Room Booking
              </Link>

              <Link to="/services" className="home-mobile-sublink">
                Services
              </Link>
            </div>
          </div>

          <Link to="/aboutus" className="home-mobile-link">
            About Us
          </Link>

          <a href={sectionHref("gallery")} className="home-mobile-link">
            Gallery
          </a>

          <a href="#contact" className="home-mobile-link">
            Contact
          </a>

          <Button
            asChild
            variant="outline"
            className="home-mobile-reservation-link"
          >
            <Link to="/reservation">Reservation</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}