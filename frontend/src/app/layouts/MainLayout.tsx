import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800">
      {/* Sticky Header with Glassmorphism */}
      <header className="sticky top-0 z-50 w-full bg-brand-dark/95 backdrop-blur-md border-b border-brand-light/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Branding */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img 
              alt={appConfig.appName} 
              src={imgLogo} 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="text-white text-lg font-semibold tracking-wider font-serif group-hover:text-brand-gold transition-colors duration-300">
                {appConfig.appName}
              </span>
              <span className="text-[10px] text-brand-gold tracking-widest uppercase">
                Khmer Culinary Art
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navRoutes.map((route: NavRoute) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative py-2 ${
                    isActive 
                      ? "text-brand-gold font-semibold" 
                      : "text-white/80 hover:text-brand-gold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {route.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full transition-all duration-300" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Reservation Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <NavLink 
              to="reservation" 
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-accent hover:bg-brand-light text-white text-sm font-semibold tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-brand-sage/20"
            >
              Book a Table
            </NavLink>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:text-brand-gold hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Navigation panel */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-brand-dark border-l border-brand-light/20 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <span className="text-white text-lg font-serif font-semibold tracking-wider">Navigation</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-white hover:text-brand-gold hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-5">
              {navRoutes.map((route: NavRoute) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    `text-lg font-medium py-2 px-3 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? "text-brand-gold bg-white/5 font-semibold" 
                        : "text-white/80 hover:text-brand-gold hover:bg-white/5"
                    }`
                  }
                >
                  {route.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/10">
            <NavLink 
              to="reservation" 
              className="w-full inline-flex items-center justify-center py-3.5 rounded-full bg-brand-accent hover:bg-brand-light text-white text-base font-bold shadow-lg transition-all"
            >
              Book a Table
            </NavLink>
            <p className="text-center text-xs text-white/40 mt-4 font-light">
              One More Restaurant © 2026
            </p>
          </div>
        </div>
      </div>

      {/* Main Page Content */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Global Brand Footer */}
      <footer className="bg-brand-dark text-white border-t border-brand-light/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Telegram Booking QR */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-brand-gold text-lg font-serif font-semibold tracking-wider">Join Telegram</span>
            <div className="w-28 h-28 bg-white p-2 rounded-xl overflow-hidden shadow-md">
              <img 
                alt="Telegram QR code" 
                className="w-full h-full object-contain" 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://t.me/onemorerestaurant" 
              />
            </div>
            <p className="text-white/60 text-xs leading-relaxed font-light max-w-5">
              Scan to join our Telegram channel for direct reservations, menus, and special promos.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-brand-gold text-lg font-serif font-semibold tracking-wider">Explore</span>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70 font-light text-left">
              <li><NavLink to="/" className="hover:text-brand-gold transition-colors">Home</NavLink></li>
              <li><NavLink to="/menu" className="hover:text-brand-gold transition-colors">Our Menu</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-gold transition-colors">Our Services</NavLink></li>
              <li><NavLink to="/events" className="hover:text-brand-gold transition-colors">Private Events</NavLink></li>
              <li><NavLink to="/reservation" className="hover:text-brand-gold transition-colors">Make Reservation</NavLink></li>
            </ul>
          </div>

          {/* Col 3: Toul Kork Branch */}
          <div className="flex flex-col items-start gap-4 text-left">
            <span className="text-brand-gold text-lg font-serif font-semibold tracking-wider">Toul Kork Branch</span>
            <div className="text-sm text-white/70 flex flex-col gap-1.5 font-light">
              <p className="font-semibold text-white">One More Toul Kork</p>
              <p>#37, Street 315, Toul Kork, Phnom Penh</p>
              <p className="mt-1">Tel: <a href="tel:+85515821888" className="underline hover:text-brand-gold">+855 15 821 888</a></p>
              <p className="text-xs text-white/40">Open Daily: 6:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Col 4: BKK1 Branch */}
          <div className="flex flex-col items-start gap-4 text-left">
            <span className="text-brand-gold text-lg font-serif font-semibold tracking-wider">BKK1 Branch</span>
            <div className="text-sm text-white/70 flex flex-col gap-1.5 font-light">
              <p className="font-semibold text-white">One More BKK1</p>
              <p>162 Preah Norodom Blvd, BKK1, Phnom Penh</p>
              <p className="mt-1">Tel: <a href="tel:+85523223888" className="underline hover:text-brand-gold">+855 23 223 888</a></p>
              <p className="text-xs text-white/40">Open Daily: 6:00 AM - 10:00 PM</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
          <p>© 2026 ONE MORE RESTAURANT. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Settings</span>
          </div>
        </div>
      </footer>
    <div className="site-shell">
      <Outlet />
    </div>
  );
}
