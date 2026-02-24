import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-accent/5 flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo/Brand */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            AUTO SHOP
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wider">
            Premium Automotive Collection
          </p>
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="text-sm text-muted-foreground tracking-wide">Loading showroom...</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
