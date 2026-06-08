import { Link } from "react-router-dom";

import SiteNav from "../../app/layouts/SiteNav";
import { Button } from "../../components/ui/button";
import ScrollDownButton from "../../components/ui/ScrollDownButton";

import { homeAssets } from "../home/homeAsset";
import { aboutAssets } from "./aboutAsset";
import SiteFooter from "../../app/layouts/SiteFooter";


import "./index.css";

const { imgLogo } = homeAssets;
const { imgAboutHeader } = aboutAssets;

function Header() {
  return (
    <header className="about-header relative w-full overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0">
        <img
          alt="One More Restaurant About Us"
          className="about-header-bg absolute left-0 object-cover"
          src={imgAboutHeader}
        />
        <div className="about-header-overlay absolute inset-0" />
      </div>

      <SiteNav logo={imgLogo} sectionPrefix="/" />

      <div className="about-hero-content">
        <h1 className="about-hero-title">About One More Restaurant</h1>

        <p className="about-hero-text">
          Discover the story behind One More Restaurant, where authentic Khmer
          cuisine, warm hospitality, and meaningful dining experiences come
          together.
        </p>

        <div className="about-hero-actions">
          <Button asChild className="about-primary-button">
            <a href="#about-story">Our Story</a>
          </Button>

          <Button asChild variant="outline" className="about-outline-button">
            <Link to="/reservation">Book Your Dining</Link>
          </Button>
        </div>
      </div>

      <ScrollDownButton targetId="about-story" />
    </header>
  );
}

export default function AboutUsPage() {
  return (
    <div className="w-full flex flex-col items-stretch">
      <Header />

      <section id="about-story" className="about-green-section">
        {/* About Us content goes here */}
      </section>

      <SiteFooter />
    </div>
  );
}