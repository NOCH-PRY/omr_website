import { useState, useEffect } from "react";
import { Search, Flame, ShieldAlert, Award } from "lucide-react";
import { appConfig } from "../../config/appConfig";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_featured: boolean;
  is_spicy?: boolean;
  is_organic?: boolean;
  allergens?: string;
}

type BackendMenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category_name?: string;
  category?: string;
  image_url?: string;
  is_featured?: boolean;
};

// Full premium mock menu data for fallback/offline mode
const mockMenuItems: MenuItem[] = [
  // Breakfast
  { id: 1, name: "Pork Blood Porridge", description: "Traditional clear pork porridge slow-cooked with fresh local herbs, blood pudding, and offal slices.", price: 2.00, category: "Breakfast", image_url: "https://images.unsplash.com/photo-1598515214211-89d3e73ae83b?auto=format&fit=crop&w=400&q=80", is_featured: true, is_organic: true },
  { id: 2, name: "Bai Sach Chrouk", description: "Charcoal-grilled marinated sweet pork loin served with broken rice, light egg soup, and pickled cucumbers.", price: 2.50, category: "Breakfast", image_url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80", is_featured: true },
  { id: 3, name: "Kuy Teav (Noodle Soup)", description: "Fragrant rice noodles in sweet pork broth, topped with minced pork, shrimp, and aromatic herbs.", price: 3.00, category: "Breakfast", image_url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80", is_featured: false },
  { id: 4, name: "Num Banh Chok", description: "Cambodian rice noodles topped with a rich, fragrant green fish lemongrass gravy and fresh wild veggies.", price: 2.50, category: "Breakfast", image_url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80", is_featured: false },

  // Lunch
  { id: 5, name: "Fish Amok", description: "Cambodia's legendary national dish. Creamy steamed catfish cooked in coconut milk, egg, and Kroeung curry paste.", price: 8.00, category: "Lunch", image_url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80", is_featured: true, is_organic: true },
  { id: 6, name: "Beef Lok Lak", description: "Wok-seared beef cubes marinated in dark soy and oyster sauce, served on lettuce, tomatoes, and lime-pepper dip.", price: 9.00, category: "Lunch", image_url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80", is_featured: true },
  { id: 7, name: "Khmer Chicken Curry", description: "Slow-simmered red curry with sweet potatoes, coconut cream, lemongrass, and chicken.", price: 7.50, category: "Lunch", image_url: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=80", is_featured: false, is_spicy: true },
  { id: 8, name: "Somlor Kako", description: "Nutritious Khmer vegetable soup cooked with fish, roasted ground rice, pumpkin, and green papaya.", price: 6.50, category: "Lunch", image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", is_featured: false },

  // Dinner
  { id: 9, name: "Kampot Pepper Crab", description: "Wok-fried blue crab tossed with sweet garlic oyster glaze and heaps of authentic green Kampot peppercorns.", price: 15.00, category: "Dinner", image_url: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=400&q=80", is_featured: true, is_spicy: true, allergens: "Shellfish" },
  { id: 10, name: "Grilled River Prawns", description: "Giant local freshwater river prawns grilled over coals, served with a rich garlic butter dipping sauce.", price: 14.00, category: "Dinner", image_url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80", is_featured: true, allergens: "Shellfish" },
  { id: 11, name: "Khmer BBQ Ribs", description: "Tender glazed pork spare ribs grilled over open flame, served with pickled papaya salad.", price: 12.00, category: "Dinner", image_url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80", is_featured: false },
  { id: 12, name: "Somlor Machu Kroeung", description: "Robust beef lemongrass sour soup, cooked with water spinach and local sour leaf.", price: 8.00, category: "Dinner", image_url: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80", is_featured: false, is_spicy: true },

  // Sets
  { id: 13, name: "Royal Khmer Tasting Menu", description: "Multi-course feast: Fish Amok, Lok Lak, Mango Salad, chicken soup, rice, and mung bean dessert.", price: 25.00, category: "Sets", image_url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80", is_featured: true, allergens: "Fish, Nuts" },
  { id: 14, name: "Family Gathering Feast", description: "Sharing platter of BBQ ribs, charcoal chicken, grilled seafood, soup bowls, and dessert for 4-6 people.", price: 45.00, category: "Sets", image_url: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=400&q=80", is_featured: false, allergens: "Shellfish" },
  
  // Drinks & Desserts
  { id: 15, name: "Khmer Iced Coffee", description: "Strong dark roasted robusta coffee beans, slow-dripped and mixed with sweet condensed milk over ice.", price: 1.80, category: "Drinks", image_url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80", is_featured: false },
  { id: 16, name: "Fresh Young Coconut", description: "Chilled organic green coconut harvested from local farms, opened fresh to order.", price: 1.50, category: "Drinks", image_url: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=400&q=80", is_featured: false, is_organic: true },
  { id: 17, name: "Mango Sticky Rice", description: "Sweet ripe local yellow mangoes served with steamed glutinous sticky rice, coconut cream syrup, and sesame.", price: 3.50, category: "Desserts", image_url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80", is_featured: false },
];

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(mockMenuItems);
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Sets", "Drinks", "Desserts"];
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Fetch menu from FastAPI backend
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${appConfig.apiUrl}/api/menu`);
        if (response.ok) {
          const data = await response.json();
          // If backend returns items, map database schema to UI schema
          if (data && data.items && data.items.length > 0) {
            const mapped: MenuItem[] = (data.items as BackendMenuItem[]).map((item) => ({
              id: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
              category: item.category_name || item.category || "All",
              image_url: item.image_url || "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80",
              is_featured: item.is_featured || false,
            }));
            setMenuItems(mapped);
          }
        }
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.warn(`Backend API not reachable: ${message}. Using premium local menu fallback.`);
      }
    };

    fetchMenu();
  }, []);

  // Filter logic
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Gastronomy</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-brand-dark mt-2 mb-4 font-semibold">Our Khmer Menu</h1>
        <p className="text-stone-600 font-light leading-relaxed">
          Savor the tastes of Angkor. Our menu showcases original dishes hand-crafted from heirloom family recipes and premium Kampot spices.
        </p>
      </div>

      {/* Filter and Search Bar Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-stone-200">
        
        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-brand-primary text-white shadow-md"
                  : "bg-white hover:bg-stone-100 border border-stone-200 text-stone-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input bar */}
        <div className="relative w-full md:max-w-xs shrink-0">
          <input
            type="text"
            placeholder="Search our dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-full pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
          />
          <Search className="absolute left-3.5 top-3.5 text-stone-400" size={14} />
        </div>
      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-stone-50 border border-dashed border-stone-300 rounded-3xl">
          <p className="text-stone-500 font-light">No menu items match your search filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl border border-brand-sage/10 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Food Image with tags */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    alt={item.name}
                    src={item.image_url}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Badges container */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {item.is_featured && (
                      <span className="bg-brand-gold text-white text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <Award size={10} /> Signature
                      </span>
                    )}
                    {item.is_organic && (
                      <span className="bg-brand-primary text-white text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full shadow-sm">
                        Organic
                      </span>
                    )}
                  </div>
                  {item.is_spicy && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white p-1 rounded-full shadow-sm">
                      <Flame size={12} fill="white" />
                    </div>
                  )}
                </div>

                {/* Food Info */}
                <div className="p-6 text-left">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-lg font-serif font-semibold text-brand-dark leading-snug group-hover:text-brand-accent transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-brand-primary shrink-0">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-stone-500 text-xs font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom Card detail triggers */}
              <div className="px-6 pb-6 pt-2 text-left">
                <span className="text-[10px] text-brand-accent font-semibold underline tracking-wider">
                  View Detail Info
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Food Detail Modal Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setSelectedItem(null)} 
          />
          {/* Modal Card */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full z-10 border border-brand-sage/20 animate-in fade-in zoom-in-95 duration-200">
            <div className="aspect-16/10 overflow-hidden bg-stone-100 relative">
              <img 
                alt={selectedItem.name} 
                src={selectedItem.image_url} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 text-white text-left">
                <span className="text-[10px] text-brand-gold font-semibold uppercase tracking-widest">{selectedItem.category}</span>
                <h3 className="text-2xl font-serif font-bold mt-1">{selectedItem.name}</h3>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 text-left space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">Description</h4>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 items-center justify-between border-t border-b border-stone-100 py-4">
                <div className="flex flex-col">
                  <span className="text-xs text-stone-400">Price</span>
                  <span className="text-2xl font-bold text-brand-primary">${selectedItem.price.toFixed(2)}</span>
                </div>
                
                <div className="flex gap-2">
                  {selectedItem.is_organic && (
                    <span className="bg-brand-sage/20 border border-brand-accent/20 text-brand-primary text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full">
                      100% Organic
                    </span>
                  )}
                  {selectedItem.is_spicy && (
                    <span className="bg-red-50 border border-red-200 text-red-700 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full flex items-center gap-1">
                      <Flame size={10} fill="currentColor" /> Spicy
                    </span>
                  )}
                </div>
              </div>

              {selectedItem.allergens && (
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-800 p-3.5 rounded-xl text-xs font-light">
                  <ShieldAlert className="shrink-0" size={14} />
                  <p><strong>Contains Allergens:</strong> {selectedItem.allergens}</p>
                </div>
              )}

              <button 
                onClick={() => setSelectedItem(null)} 
                className="w-full py-3 rounded-xl bg-brand-primary hover:bg-brand-dark text-white font-bold text-sm shadow-md transition-colors"
              >
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
