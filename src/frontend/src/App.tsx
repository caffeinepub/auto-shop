import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CarGallery from './components/CarGallery';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial app setup
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <CarGallery />;
}

export default App;
