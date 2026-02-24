import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Zap } from 'lucide-react';

interface CarItem {
  id: string;
  name: string;
  type: 'car' | 'engine';
  image: string;
  price: number;
  description: string;
}

interface CarCardProps {
  item: CarItem;
}

export default function CarCard({ item }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <Badge 
              variant={item.type === 'car' ? 'default' : 'secondary'}
              className="shadow-lg backdrop-blur-sm"
            >
              {item.type === 'car' ? 'Vehicle' : 'Engine'}
            </Badge>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-3">
        <div>
          <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight">
            {formatPrice(item.price)}
          </span>
          {item.type === 'car' && (
            <span className="text-xs text-muted-foreground">MSRP</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button 
          className="flex-1 gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
          size="lg"
        >
          <ShoppingCart className="h-4 w-4" />
          Buy Now
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="gap-2 hover:bg-accent hover:text-accent-foreground"
        >
          <Zap className="h-4 w-4" />
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
