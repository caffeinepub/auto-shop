import { useState } from 'react';
import CarCard from './CarCard';
import { Car } from 'lucide-react';

interface CarItem {
  id: string;
  name: string;
  type: 'car' | 'engine';
  image: string;
  price: number;
  description: string;
}

const carInventory: CarItem[] = [
  {
    id: '1',
    name: 'Luxury Sports Coupe',
    type: 'car',
    image: '/assets/generated/car-1.dim_800x600.png',
    price: 89999,
    description: 'Premium performance with stunning design'
  },
  {
    id: '2',
    name: 'High-Performance Engine',
    type: 'engine',
    image: '/assets/generated/engine-1.dim_800x600.png',
    price: 15999,
    description: 'Turbocharged power unit with advanced technology'
  },
  {
    id: '3',
    name: 'Executive Sedan',
    type: 'car',
    image: '/assets/generated/car-2.dim_800x600.png',
    price: 67500,
    description: 'Elegant comfort meets cutting-edge innovation'
  },
  {
    id: '4',
    name: 'V8 Performance Engine',
    type: 'engine',
    image: '/assets/generated/engine-2.dim_800x600.png',
    price: 22999,
    description: 'Raw power with precision engineering'
  },
  {
    id: '5',
    name: 'Classic Muscle Car',
    type: 'car',
    image: '/assets/generated/car-3.dim_800x600.png',
    price: 125000,
    description: 'Timeless American muscle with modern upgrades'
  },
  {
    id: '6',
    name: 'Turbo Engine System',
    type: 'engine',
    image: '/assets/generated/engine-3.dim_800x600.png',
    price: 18500,
    description: 'Advanced turbo technology for maximum efficiency'
  }
];

export default function CarGallery() {
  const [filter, setFilter] = useState<'all' | 'car' | 'engine'>('all');

  const filteredInventory = filter === 'all' 
    ? carInventory 
    : carInventory.filter(item => item.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">AUTO SHOP</h1>
                <p className="text-xs text-muted-foreground">Premium Collection</p>
              </div>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('car')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === 'car'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                Cars
              </button>
              <button
                onClick={() => setFilter('engine')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === 'engine'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                Engines
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {filter === 'all' ? 'Our Collection' : filter === 'car' ? 'Vehicles' : 'Engines'}
          </h2>
          <p className="text-muted-foreground">
            Discover premium automotive excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInventory.map((item) => (
            <CarCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Auto Shop. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                Built with ❤️ using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                    typeof window !== 'undefined' ? window.location.hostname : 'auto-shop'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
