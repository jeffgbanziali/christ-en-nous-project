import React, { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import LoadingPage from './Components/LoadingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement, par exemple 3 secondes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Nettoyer le timer au démontage du composant
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <LoadingPage /> : <Navigation />}
    </div>
  );
}

export default App;
