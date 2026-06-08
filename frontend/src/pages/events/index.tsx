import { Link } from "react-router-dom";

import SiteNav from "../../app/layouts/SiteNav";
import { Button } from "../../components/ui/button";
import ScrollDownButton from "../../components/ui/ScrollDownButton";

import { homeAssets } from "../home/homeAsset";
import { eventAssets } from "./eventAsset";
import SiteFooter from "../../app/layouts/SiteFooter";


import "./index.css";

const { imgLogo } = homeAssets;
const { imgHeader31 } = eventAssets;

function Header() {
  return (
    <header className="event-header relative w-full overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0">
        <img
          alt="One More Restaurant Venue"
          className="event-header-bg absolute left-0 object-cover"
          src={imgHeader31}
        />
        <div className="event-header-overlay absolute inset-0" />
      </div>

      <SiteNav logo={imgLogo} sectionPrefix="/" />

      <div className="event-hero-content">
        <h1 className="event-hero-title">One More Restaurant Venue</h1>

        <p className="event-hero-text">
          Immerse yourself in the rich flavors of authentic Khmer cuisine, where
          tradition meets a warm and inviting dining experience.
        </p>

        <div className="event-hero-actions">
          <Button asChild className="home-primary-button">
            <a href="#private-rooms">Explore our menu</a>
          </Button>

          <Button asChild variant="outline" className="home-outline-button">
            <Link to="/reservation">Book Your Dining</Link>
          </Button>
        </div>
      </div>

      <ScrollDownButton targetId="private-rooms" />
    </header>
  );
}

export default function EventsPage() {
  return (
    <div className="w-full flex flex-col items-stretch">
      <Header />

      <section id="private-rooms" className="event-green-section">
        {/* next event section goes here */}
      </section>
      <SiteFooter/>
    </div>
  );
}