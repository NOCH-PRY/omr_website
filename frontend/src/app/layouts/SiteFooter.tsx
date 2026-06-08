import svgPaths from "../../assets/svgPaths";
import { homeAssets } from "../../pages/home/homeAsset";

import "./SiteFooter.css";

const { imgHeader30, imgQrCode, imgQrCode1 } = homeAssets;

export default function SiteFooter() {
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