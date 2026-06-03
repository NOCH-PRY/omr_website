import { appConfig } from "../../config/appConfig";
import "./index.css";

export default function HomePage() {
  return (
    <div className="hero-page">
      <div className="hero-backdrop" />

      <main className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">{appConfig.appName}</p>
          <h1>{appConfig.heroHeading}</h1>
          <p className="hero-text">{appConfig.heroText}</p>
          <div className="hero-actions">
            <a href="/menu" className="button button-primary">
              Explore our menu
            </a>
            <a href="/reservation" className="button button-secondary">
              Book Your Dining
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
