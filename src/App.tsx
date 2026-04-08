import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar, Footer } from './components/Layout';
import { Home } from './views/Home';
import { Catalog } from './views/Catalog';
import { Detail } from './views/Detail';
import { Cart } from './views/Cart';
import { About, Contact } from './views/Static';
import { Product } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [view, setView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedProduct]);

  const handleNavigate = (newView: string, params?: any) => {
    if (newView === 'detail' && params) {
      setSelectedProduct(params);
    }
    setView(newView);
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'catalog':
        return <Catalog onNavigate={handleNavigate} />;
      case 'detail':
        return selectedProduct ? (
          <Detail product={selectedProduct} onNavigate={handleNavigate} />
        ) : (
          <Catalog onNavigate={handleNavigate} />
        );
      case 'cart':
        return <Cart onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar onNavigate={handleNavigate} currentView={view} />
          
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={view + (selectedProduct?.id || '')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer onNavigate={handleNavigate} />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}
