import * as React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import { Button } from "../../components/ui/button";
import ScrollDownButton from "../../components/ui/ScrollDownButton";
import svgPaths from "../../assets/svgPaths";

import {
  companies,
  menuData,
  stats,
  testimonials,
  venues,
  type MenuCategory,
} from "./homeData";

import { homeAssets } from "./homeAsset";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";

const {
  imgHeader30,
  imgLogo,
  imgSignatureDish,
  imgImg,
  imgImg1,
  imgImg2,
  imgGlossImg,
  imgOneMoreTk,
  imgMenu,
  imgFrame909,
  imgRectangle36,
  imgTestimonial12,
  imgTestImg,
  imgQrCode,
  imgQrCode1,
} = homeAssets;

function StarRating({ paths }: { paths: string[] }) {
  return (
    <svg
      className="block"
      fill="none"
      viewBox="0 0 107.414 15.57"
      width="107"
      height="16"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} fill="#E3A56B" />
      ))}
    </svg>
  );
}

function QuoteIcon({ d }: { d: string }) {
  return (
    <svg fill="none" viewBox="0 0 19.9111 14.2222" width="20" height="15">
      <path d={d} fill="#E3A56B" />
    </svg>
  );
}

function Header() {

  return (
    <header className="home-header relative w-full overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0">
        <img
          alt=""
          className="home-header-bg absolute left-0 object-cover"
          src={imgHeader30}
        />
        <div className="home-header-overlay absolute inset-0" />
      </div>

      <nav className="home-nav relative z-[1000] flex items-center justify-between px-5 sm:px-10 pt-6 pb-4">
        <img
          alt="One More Restaurant"
          className="h-10 sm:h-14 lg:h-[72px] w-auto object-contain flex-shrink-0"
          src={imgLogo}
        />

        {/* Desktop nav */}
        <NavigationMenu
          viewport={false}
          className="home-desktop-navigation hidden lg:flex"
        >
          <NavigationMenuList className="home-desktop-nav-list">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#menu" className="home-nav-link">
                  Menu
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger
              className="
                !h-auto !min-h-0 !w-auto !min-w-0
                !bg-transparent !p-0 !m-0
                !rounded-none !border-0 !shadow-none
                !text-[#fafaf9] !text-[18px] !font-light !leading-normal
                hover:!bg-transparent hover:!text-[#8bb974]
                focus:!bg-transparent focus:!text-[#8bb974]
                data-[state=open]:!bg-transparent data-[state=open]:!text-[#8bb974]
                [&>svg]:!hidden
              "
            >
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
                <a href="#branches" className="home-nav-link">
                  Branches
                </a>
              </NavigationMenuLink>
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
                <a href="#gallery" className="home-nav-link">
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
            <a href="#menu" className="home-mobile-link">
              Menu
            </a>

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

            <a href="#branches" className="home-mobile-link">
              Branches
            </a>

            <Link to="/aboutus" className="home-mobile-link">
              About Us
            </Link>

            <a href="#gallery" className="home-mobile-link">
              Gallery
            </a>

            <a href="#contact" className="home-mobile-link">
              Contact
            </a>

            <Button asChild variant="outline" className="home-mobile-reservation-link">
              <Link to="/reservation">Reservation</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="home-hero-content relative z-10 flex flex-col items-start px-5 sm:px-16 pt-16 sm:pt-24 pb-20 sm:pb-32">
        <h1 className="home-hero-title text-[#fafaf9] text-4xl sm:text-5xl lg:text-[71px] leading-none text-left mb-6">
          One More Restaurant
        </h1>

        <p className="home-hero-text text-[#fbfbfb] text-sm leading-relaxed max-w-lg mb-8">
          Immerse yourself in the rich flavors of authentic Khmer cuisine, where
          tradition meets a warm and inviting dining experience.
        </p>

        <div className="home-hero-actions flex flex-wrap gap-4">
          <Button asChild className="home-primary-button">
            <a href="#menu">Explore our menu</a>
          </Button>

          <Button asChild variant="outline" className="home-outline-button">
            <Link to="/reservation">Book Your Dining</Link>
          </Button>
        </div>
      </div>

      <ScrollDownButton targetId="signature-section" />
    </header>
  );
}

function SignatureTitle() {
  return (
    <div
      id="signature-section"
      className="home-section-title-wrapper home-section-title-dark"
    >
      <h2 className="home-section-title">Our Signature Dishes</h2>
    </div>
  );
}

function SignatureDish() {
  return (
    <section className="relative w-full py-16 px-5 sm:px-14">
      <div className="absolute inset-0">
        <img
          alt=""
          className="home-section-bg-img absolute left-0 object-cover"
          src={imgSignatureDish}
        />
        <div className="signature-overlay absolute backdrop-blur-[3px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        <p className="font-inter text-white text-xl sm:text-2xl text-center max-w-2xl leading-relaxed">
          Discover our most beloved authentic Khmer cuisine
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[imgImg1, imgImg2, imgImg].map((image, index) => (
            <div
              key={index}
              className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <img
                alt={`Signature dish ${index + 1}`}
                className="w-full h-full object-cover"
                src={image}
              />
            </div>
          ))}
        </div>

        <button className="browse-button">Browse More</button>
      </div>
    </section>
  );
}

function BranchesTitle() {
  return (
    <div
      id="branches"
      className="home-section-title-wrapper home-section-title-dark"
    >
      <h2 className="home-section-title reservation-title">Branches</h2>
    </div>
  );
}

function BranchCard({ isFirst }: { isFirst: boolean }) {
  const details = isFirst
    ? {
        branch: "Toul Kork",
        phone: "+855 15 821 888",
        address: "#37, Street 315, Toul Kork, Phnom Penh",
        mapUrl:
          "https://www.google.com/maps/search/One+More+Restaurant+Toul+Kork",
      }
    : {
        branch: "BKK1",
        phone: "+855 23 223 888",
        address: "162 Preah Norodom Blvd, BKK1, Phnom Penh",
        mapUrl: "https://maps.app.goo.gl/QNh2DUu7QbqMTSkv6",
      };

  return (
    <div className="reservation-card relative border-4 border-white flex-1 min-w-[280px] max-w-[450px] w-full rounded-[47px] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
      <div className="absolute inset-0 opacity-70">
        <img
          alt=""
          className="reservation-card-bg-img absolute inset-0 w-full h-full object-cover opacity-80"
          src={imgGlossImg}
        />
      </div>

      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[60%] h-[25%]">
        <img
          alt="One More Logo"
          className="w-full h-full object-contain"
          src={imgOneMoreTk}
        />
      </div>

      <div className="absolute text-center text-white top-[46%] left-1/2 -translate-x-1/2 w-[90%]">
        <p className="font-gloock text-3xl sm:text-4xl leading-tight font-normal mb-2">
          One More
        </p>

        <p className="font-inter text-lg sm:text-xl underline leading-relaxed font-light">
          {details.branch}
        </p>
      </div>

      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] max-w-[280px]">
        <Link to="/reservation" className="reserve-now-button block text-center">
          RESERVE NOW
        </Link>
      </div>

      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[90%] text-center">
        <a
          href={`tel:${details.phone.replace(/\s+/g, "")}`}
          className="block text-white text-xs sm:text-sm underline leading-normal hover:text-[#8bb974] transition-colors"
        >
          {details.phone}
        </a>

        <a
          href={details.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-[10px] sm:text-xs underline leading-normal mt-1 hover:text-[#8bb974] transition-colors px-2"
        >
          {details.address}
        </a>
      </div>
    </div>
  );
}

function BranchesContent() {
  return (
    <section className="reservation-section-bg w-full py-16 px-5 sm:px-14 flex flex-wrap justify-center items-center gap-10">
      <BranchCard isFirst />
      <BranchCard isFirst={false} />
    </section>
  );
}

function MenuSection() {
  const [activeTab, setActiveTab] = React.useState<MenuCategory>("breakfast");

  const tabs: { id: MenuCategory; label: string }[] = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "sets", label: "Meal Sets" },
  ];

  return (
    <section id="menu" className="relative w-full py-12">
      <div className="absolute inset-0">
        <img
          alt=""
          className="home-section-bg-img absolute left-0 object-cover"
          src={imgMenu}
        />
        <div className="menu-overlay absolute" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-center py-10">
          <h2 className="home-section-title text-white">Our Menu</h2>
        </div>

        <div className="flex justify-center gap-6 sm:gap-16 py-4 border-t border-b border-white/20 mx-6 sm:mx-20 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`menu-tab font-semibold text-sm sm:text-lg cursor-pointer transition-all duration-300 relative pb-2 ${
                  isActive ? "menu-tab-active" : "menu-tab-inactive"
                }`}
              >
                {tab.label}

                {isActive && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-[#8bb974] rounded-full transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-20 pb-10 max-w-6xl mx-auto">
          {menuData[activeTab].map((item, i) => (
            <div
              key={i}
              className="menu-card flex gap-4 items-start p-4 rounded-xl"
            >
              <div className="relative shrink-0 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-[13px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(195,181,181,0.25)]">
                <div className="absolute inset-0 opacity-65 overflow-hidden rounded-[25px] pointer-events-none">
                  <img
                    alt=""
                    className="absolute w-[190%] h-[191%] -left-[42%] -top-[47%]"
                    src={imgFrame909}
                  />
                </div>

                <img
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={item.img}
                />
              </div>

              <div className="flex flex-col gap-1 pt-1 flex-1">
                <p className="font-inter text-[#f6fdf2] font-semibold text-base sm:text-lg leading-snug">
                  {item.name}
                </p>

                <p className="font-inter text-white/80 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>

                <p className="font-inter text-[#8bb974] font-extrabold text-base mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pb-12">
          <button className="view-menu-button">View Full Menu</button>
        </div>
      </div>
    </section>
  );
}

function VenueSection() {
  return (
    <section className="relative w-full bg-[#426232] overflow-hidden">
      <div className="hidden lg:block absolute left-[-60px] top-0 opacity-50 rotate-[3.79deg]">
        <div className="blur-[1.5px] w-[212px] h-[465px]">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgRectangle36}
          />
        </div>
      </div>

      <div className="hidden lg:block absolute right-[-60px] top-[40%] opacity-50 rotate-[176.62deg] scale-y-[-1]">
        <div className="blur-[1.5px] w-[210px] h-[455px]">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgRectangle36}
          />
        </div>
      </div>

      <div className="home-section-title-wrapper home-section-title-light">
        <h2 className="home-section-title large">Our Venues</h2>
      </div>

      <div className="flex flex-col gap-16 py-16 px-5 sm:px-12 max-w-6xl mx-auto">
        {venues.map((venue, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              venue.side === "left" ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 items-center`}
          >
            <div className="w-full md:w-1/2 aspect-[474/285] overflow-hidden rounded-xl shadow-2xl">
              <img
                alt={venue.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src={venue.img}
              />
            </div>

            <div
              className={`w-full md:w-1/2 text-white ${
                venue.side === "left" ? "md:text-right" : "md:text-left"
              }`}
            >
              <h3 className="font-gloock text-3xl sm:text-[35px] leading-[38px] mb-4">
                {venue.title}
              </h3>

              <p className="font-inter text-base sm:text-lg lg:text-[22px] leading-relaxed">
                {venue.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative w-full py-24 px-5 sm:px-16">
      <div className="absolute inset-0">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          src={imgSignatureDish}
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <p className="font-gloock text-white text-3xl sm:text-[40px] leading-[48px]">
              Our Commitment to a Greener Future
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-7">
            <p className="font-inter text-white text-lg leading-[26px] font-medium">
              At Samanea, we believe in luxury that nurtures the earth. Our
              sustainability initiatives are designed to create a positive
              impact on the local community and environment. Join us in our
              journey towards a harmonious coexistence with nature.
            </p>

            <div className="flex flex-wrap gap-5 items-center">
              <button className="learn-more-button">Learn More</button>

              <button className="get-involved-button">
                Get Involved
                <svg
                  width="6"
                  height="11"
                  fill="none"
                  viewBox="0 0 5.94808 10.3259"
                >
                  <path d={svgPaths.p21bc19f0} fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex-1 pt-6 md:pt-0 md:pl-10 first:pt-0 first:pl-0"
            >
              <p className="font-inter text-white font-semibold text-5xl sm:text-[71px] leading-[1.2]">
                {stat.value}
              </p>

              <p className="font-inter text-white/80 font-bold text-sm sm:text-[18px] leading-[1.4] tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsTitle() {
  return (
    <div className="home-section-title-wrapper home-section-title-dark">
      <h2 className="home-section-title large">Guest Testimonials</h2>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative w-full py-16 px-5 sm:px-10 overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt=""
          className="testimonial-bg-img absolute object-cover"
          src={imgTestimonial12}
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card relative rounded-[8.889px] overflow-hidden"
            >
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-[8.889px]"
                src={imgTestImg}
              />

              <div
                className="absolute inset-0 rounded-[8.889px]"
                style={{ backgroundColor: t.bg, opacity: 0.88 }}
              />

              <div className="testimonial-content relative z-10 p-6 sm:p-7 flex flex-col h-full">
                <div className="mb-2">
                  <QuoteIcon d={svgPaths.pb219d80} />
                </div>

                <p className="testimonial-text text-[#fef9ed] text-[14px] leading-relaxed text-justify flex-1 mb-4">
                  {t.text}
                </p>

                <div className="flex justify-end mb-4">
                  <QuoteIcon d={svgPaths.p2df8ba40} />
                </div>

                <p className="testimonial-date text-[#e3a56b] text-[12px] tracking-widest mb-4">
                  {t.date}
                </p>

                <div className="mb-4">
                  <StarRating paths={t.ratingPaths} />
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <img
                    alt={t.name}
                    src={t.avatar}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <p className="testimonial-name text-[#e3a56b] text-[14px]">
                    {t.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="opacity-70">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 23.8932 23.8932"
            className="rotate-[43deg]"
          >
            <path
              d={svgPaths.p3906f400}
              stroke="#FAD795"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.888889"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <div className="bg-[#304625] w-full py-12 px-5 sm:px-12">
      <div className="flex items-center justify-center mb-8">
        <h2 className="home-section-title large">Our Companies</h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        {companies.map((company, i) => (
          <div
            key={i}
            className="relative w-[120px] h-[80px] sm:w-[145px] sm:h-[90px] overflow-hidden rounded"
            style={{ backgroundColor: company.bg }}
          >
            <img
              alt={company.label}
              className="absolute inset-0 w-full h-full object-contain p-2"
              src={company.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const socials = [
    {
      icon: svgPaths.p1c80b500,
      label: "Facebook",
      vb: "0 0 17.7778 17.7778",
    },
    {
      icon: svgPaths.p1a6ed600,
      label: "Instagram",
      vb: "0 0 16 16",
    },
    {
      icon: svgPaths.p816ba00,
      label: "LinkedIn",
      vb: "0 0 16 16",
    },
    {
      icon: svgPaths.pad1dc00,
      label: "YouTube",
      vb: "0 0 17.7904 12.4551",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative w-full px-5 sm:px-14 py-16 overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
    >
      <div className="absolute inset-0">
        <img
          alt=""
          className="footer-bg-img absolute left-0 object-cover"
          src={imgHeader30}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[rgba(102,102,102,0)]" />
      </div>

      <div className="relative z-10 max-w-none mx-auto flex flex-col gap-16">
        <div className="flex flex-col sm:flex-row gap-10 justify-between">
          <div className="flex flex-col gap-5 max-w-sm">
            <div className="w-24 h-24 overflow-hidden">
              <img
                alt="Telegram QR code"
                className="w-full h-full object-contain"
                src={imgQrCode}
              />
            </div>

            <p className="font-inter text-white text-sm leading-relaxed">
              Scan to join our Telegram channel for bookings, menu updates, and
              the latest promotions.
            </p>

            <div className="w-24 h-24 overflow-hidden">
              <img
                alt="QR code 2"
                className="w-full h-full object-cover"
                src={imgQrCode1}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-gloock text-white text-lg">Contact Us</p>

            {socials.map((social, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg fill="none" viewBox={social.vb} className="w-full h-full">
                    <path
                      clipRule="evenodd"
                      d={social.icon}
                      fill="white"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>

                <span className="footer-small-text text-white text-xs">
                  {social.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white w-full" />

        <div className="footer-small-text flex flex-col sm:flex-row justify-between gap-4 text-[#d9fcdf] text-xs">
          <p>© 2026 ONE MORE. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <span className="cursor-pointer hover:text-white transition-colors">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Cookie Settings
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-stretch">
      <Header />
      <SignatureTitle />
      <SignatureDish />
      <BranchesTitle />
      <BranchesContent />
      <MenuSection />
      <VenueSection />
      <StatsSection />
      <TestimonialsTitle />
      <TestimonialsSection />
      <FooterSection />
      <Footer />
    </div>
  );
}