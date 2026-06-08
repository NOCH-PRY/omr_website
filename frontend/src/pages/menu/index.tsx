import { Link } from "react-router-dom";

import SiteNav from "../../app/layouts/SiteNav";
import { Button } from "../../components/ui/button";
import ScrollDownButton from "../../components/ui/ScrollDownButton";

import { homeAssets } from "../home/homeAsset";
import { menuAssets } from "./menuAsset";
import SiteFooter from "../../app/layouts/SiteFooter";


import "./index.css";

const { imgLogo } = homeAssets;
const { imgMenuHeader } = menuAssets;

function Header() {
  return (
    <header className="menu-header relative w-full overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0">
        <img
          alt="One More Restaurant Menu"
          className="menu-header-bg absolute left-0 object-cover"
          src={imgMenuHeader}
        />
        <div className="menu-header-overlay absolute inset-0" />
      </div>

      <SiteNav logo={imgLogo} sectionPrefix="/" />

      <div className="menu-hero-content">
        <h1 className="menu-hero-title">One More Restaurant Menu</h1>

        <p className="menu-hero-text">
          Explore authentic Khmer dishes, signature meals, and carefully prepared
          flavors made for every dining moment.
        </p>

        <div className="menu-hero-actions">
          <Button asChild className="menu-primary-button">
            <a href="#menu-list">Explore Menu</a>
          </Button>

          <Button asChild variant="outline" className="menu-outline-button">
            <Link to="/reservation">Book Your Dining</Link>
          </Button>
        </div>
      </div>

      <ScrollDownButton targetId="menu-list" />
    </header>
  );
}

export default function MenuPage() {
  return (
    <div className="w-full flex flex-col items-stretch">
      <Header />

      <section id="menu-list" className="menu-green-section">
        {/* Put your menu content here */}
      </section>

      <SiteFooter />
    </div>
  );
}