import * as React from "react";
import "./index.css";

const AboutUsPage: React.FC = () => {
  return (
    <section className="aboutus-section min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed">
          Welcome to One More Restaurant! We are dedicated to serving authentic Khmer cuisine with a modern touch. Our story, values, and commitment to quality are reflected in every dish we offer.
        </p>
      </div>
    </section>
  );
};

export default AboutUsPage;
