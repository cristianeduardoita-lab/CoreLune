import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, ShoppingBag, X, Instagram, MessageCircle, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { totalItems } = useCart();
  const { language, setLanguage, t } = useLanguage();

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.shop'), id: 'catalog' },
    { name: t('nav.custom'), id: 'custom', action: () => {
      const message = encodeURIComponent(t('cart.whatsapp.msg'));
      window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    }},
    { name: t('nav.story'), id: 'about' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  const handleNavClick = (item: any) => {
    if (item.action) {
      item.action();
    } else {
      onNavigate(item.id);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Micro Top Bar */}
      <div className="fixed top-0 w-full z-[60] bg-brand-beige/80 backdrop-blur-md border-b border-brand-sand/5 h-6 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-end items-center">
          <div className="flex items-center text-[8px] font-bold tracking-[0.25em] text-brand-coffee/30">
            <button 
              onClick={() => setLanguage('en')}
              className={`transition-colors hover:text-brand-terracotta ${language === 'en' ? 'text-brand-terracotta' : ''}`}
            >
              EN
            </button>
            <span className="mx-3 opacity-10">|</span>
            <button 
              onClick={() => setLanguage('es')}
              className={`transition-colors hover:text-brand-terracotta ${language === 'es' ? 'text-brand-terracotta' : ''}`}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      <nav className="fixed top-6 w-full z-50 bg-brand-beige border-b border-brand-sand/10 h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center relative">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-brand-coffee p-2 -ml-2 hover:text-brand-terracotta transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* Desktop Left Nav */}
          <div className="hidden lg:flex gap-10 items-center">
            {navItems.slice(0, 2).map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all hover:text-brand-terracotta ${
                  currentView === item.id ? 'text-brand-terracotta' : 'text-brand-coffee/60'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Logo - Centered */}
          <button 
            onClick={() => onNavigate('home')}
            className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif tracking-tighter text-brand-coffee hover:text-brand-terracotta transition-colors"
          >
            Cora Lune
          </button>

          {/* Desktop Right Nav + Cart */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex gap-10 items-center">
              {navItems.slice(2).map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all hover:text-brand-terracotta ${
                    currentView === item.id ? 'text-brand-terracotta' : 'text-brand-coffee/60'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button 
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-brand-coffee hover:text-brand-terracotta transition-colors"
              aria-label="View Cart"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-brand-terracotta text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-beige z-[100] lg:hidden flex flex-col h-screen w-screen"
          >
            {/* Menu Header */}
            <div className="h-20 px-6 flex justify-between items-center border-b border-brand-sand/10 flex-shrink-0">
              <span className="font-serif text-xl tracking-tighter text-brand-coffee">Cora Lune</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 -mr-2 text-brand-coffee hover:text-brand-terracotta transition-colors"
                aria-label="Close Menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu Body */}
            <div className="flex-grow flex flex-col px-10 py-12 overflow-y-auto no-scrollbar">
              <div className="flex flex-col gap-8 md:gap-10 mb-auto">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    onClick={() => handleNavClick(item)}
                    className={`text-3xl md:text-5xl font-serif text-left transition-all ${
                      currentView === item.id ? 'text-brand-terracotta' : 'text-brand-coffee'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Menu Footer / Secondary Links */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-10 border-t border-brand-sand/10 flex-shrink-0"
              >
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10 sm:gap-12">
                  <div className="space-y-4 sm:space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coffee/40">Language</h4>
                    <div className="flex gap-6 text-[11px] uppercase tracking-[0.2em] font-bold">
                      <button 
                        onClick={() => setLanguage('en')}
                        className={`transition-colors ${language === 'en' ? 'text-brand-terracotta' : 'text-brand-coffee/40'}`}
                      >
                        English
                      </button>
                      <button 
                        onClick={() => setLanguage('es')}
                        className={`transition-colors ${language === 'es' ? 'text-brand-terracotta' : 'text-brand-coffee/40'}`}
                      >
                        Español
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coffee/40">Connect</h4>
                    <div className="flex gap-8 text-brand-terracotta">
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                        <Instagram size={22} strokeWidth={1.5} />
                      </a>
                      <button 
                        onClick={() => {
                          onNavigate('cart');
                          setIsOpen(false);
                        }}
                        className="hover:scale-110 transition-transform relative"
                      >
                        <ShoppingBag size={22} strokeWidth={1.5} />
                        {totalItems > 0 && (
                          <span className="absolute -top-1 -right-1 bg-brand-terracotta text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                            {totalItems}
                          </span>
                        )}
                      </button>
                      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                        <MessageCircle size={22} strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-[8px] uppercase tracking-[0.4em] text-brand-coffee/30 flex justify-between items-center">
                  <span>North Austin, US</span>
                  <span>Handmade with Love</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-brand-cream py-24 px-6 border-t border-brand-sand/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <h2 className="font-serif text-2xl text-brand-coffee mb-8">Cora Lune</h2>
          <p className="text-brand-coffee/60 max-w-sm leading-relaxed text-sm font-light">
            {t('footer.desc')}
          </p>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-8">{t('footer.explore')}</h4>
          <ul className="space-y-4 text-xs text-brand-coffee/60">
            <li><button onClick={() => onNavigate('catalog')} className="hover:text-brand-terracotta transition-colors">{t('footer.shopAll')}</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-brand-terracotta transition-colors">{t('nav.story')}</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-terracotta transition-colors">{t('nav.contact')}</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-8">{t('footer.follow')}</h4>
          <div className="flex gap-6 text-brand-terracotta">
            <Instagram size={18} className="cursor-pointer hover:opacity-70 transition-opacity" />
            <MessageCircle size={18} className="cursor-pointer hover:opacity-70 transition-opacity" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-brand-sand/10 text-center text-[10px] uppercase tracking-[0.3em] text-brand-coffee/30">
        {t('footer.rights')}
      </div>
    </footer>
  );
};
