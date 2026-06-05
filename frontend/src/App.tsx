import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from 'sonner';
import RestaurantWebsite from './components/RestaurantPage';
import ReservationPage from './pages/reservation';
import ScrollToTop from './components/ScrollToTop';

function ScrollToTopOnNavigation() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <ScrollToTopOnNavigation />
        <Routes>
          <Route path="/" element={<RestaurantWebsite />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTop />
    </div>
  );
}