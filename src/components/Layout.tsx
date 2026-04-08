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

  const navItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.shop'), id: 'catalog' },
    { name: t('nav.story'), id: 'about' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-beige/90 backdrop-blur-sm border-b border-brand-sand/10">
      {/* Discrete Top Bar for Language */}
      <div className="h-8 bg-brand-coffee text-brand-beige/40 text-[9px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 border-b border-brand-beige/5">
        <button 
          onClick={() => setLanguage('en')}
          className={`hover:text-brand-beige transition-colors ${language === 'en' ? 'text-brand-beige font-bold' : ''}`}
        >
          English
        </button>
        <span className="opacity-20">|</span>
        <button 
          onClick={() => setLanguage('es')}
          className={`hover:text-brand-beige transition-colors ${language === 'es' ? 'text-brand-beige font-bold' : ''}`}
        >
          Español
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <button 
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-brand-coffee p-2"
        >
          <Menu size={20} />
        </button>

        <div className="hidden lg:flex gap-10">
          {navItems.slice(0, 2).map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${
                currentView === item.id ? 'text-brand-terracotta' : 'text-brand-coffee/60 hover:text-brand-terracotta'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button 
          onClick={() => onNavigate('home')}
          className="absolute left-1/2 -translate-x-1/2 text-xl font-serif tracking-tighter text-brand-coffee"
        >
          Cora Lune
        </button>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-10 mr-10">
            {navItems.slice(2).map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${
                  currentView === item.id ? 'text-brand-terracotta' : 'text-brand-coffee/60 hover:text-brand-terracotta'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <button 
            onClick={() => onNavigate('cart')}
            className="relative p-2 text-brand-coffee"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-brand-terracotta text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-coffee/20 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-brand-beige z-[70] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="p-8 flex justify-between items-center border-b border-brand-sand/10">
                <span className="font-serif text-lg tracking-tighter text-brand-coffee">Cora Lune</span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-cream text-brand-coffee hover:bg-brand-sand/20 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 py-12">
                <div className="flex flex-col gap-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        onNavigate(item.id);
                        setIsOpen(false);
                      }}
                      className={`text-2xl font-serif text-left transition-colors ${
                        currentView === item.id ? 'text-brand-terracotta' : 'text-brand-coffee'
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-brand-sand/10 space-y-10">
                  <div className="space-y-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-coffee/40">Language</h4>
                    <div className="flex gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-coffee">
                      <button 
                        onClick={() => setLanguage('en')}
                        className={`px-3 py-1 rounded-full border ${language === 'en' ? 'bg-brand-coffee text-white border-brand-coffee' : 'border-brand-sand/30'}`}
                      >
                        EN
                      </button>
                      <button 
                        onClick={() => setLanguage('es')}
                        className={`px-3 py-1 rounded-full border ${language === 'es' ? 'bg-brand-coffee text-white border-brand-coffee' : 'border-brand-sand/30'}`}
                      >
                        ES
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-coffee/40">Connect</h4>
                    <div className="flex gap-6 text-brand-terracotta">
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
                        <Instagram size={20} />
                      </a>
                      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
                        <MessageCircle size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-brand-sand/10 text-[8px] uppercase tracking-[0.3em] text-brand-coffee/30">
                North Austin, US • Handmade with Love
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
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
