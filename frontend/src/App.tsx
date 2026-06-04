import { Toaster } from 'sonner';
import RestaurantWebsite from './components/RestaurantPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <RestaurantWebsite />
      <ScrollToTop />
    </div>
  );
}