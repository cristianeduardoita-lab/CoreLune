import React from 'react';
import { motion } from 'motion/react';
import { Trash2, Minus, Plus, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface CartProps {
  onNavigate: (view: string) => void;
}

export const Cart: React.FC<CartProps> = ({ onNavigate }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const itemsList = cart.map(item => `- ${item.name} x ${item.quantity}`).join('\n');
    const message = `Hi! I’d like to place an order from Cora Lune:\n${itemsList}\n\nTotal: $${totalPrice}\n\nMy name is: `;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encoded}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="pt-8 pb-32 px-6 text-center max-w-xl mx-auto">
        <div className="flex justify-center mb-8 text-brand-sand/30">
          <ShoppingBag size={64} strokeWidth={1} />
        </div>
        <h1 className="font-serif text-3xl text-brand-coffee mb-4">{t('cart.empty.title')}</h1>
        <p className="text-brand-coffee/60 mb-10 leading-relaxed font-light text-sm">
          {t('cart.empty.desc')}
        </p>
        <button 
          onClick={() => onNavigate('catalog')}
          className="bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-coffee transition-all shadow-lg shadow-brand-terracotta/10"
        >
          {t('cart.empty.cta')}
        </button>
      </div>
    );
  }

  return (
    <div className="pt-4 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="font-serif text-4xl text-brand-coffee mb-12">{t('cart.title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* List */}
        <div className="lg:col-span-8 space-y-6">
          {cart.map(item => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col sm:flex-row gap-6 p-6 bg-brand-cream/50 rounded-2xl border border-brand-sand/10"
            >
              <div className="w-full sm:w-28 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <ImageWithFallback 
                  src={item.image} 
                  alt={item.name} 
                  aspectRatio="aspect-square sm:aspect-[3/4]"
                />
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-brand-terracotta font-bold mb-1 block">
                      {t('detail.badge')}
                    </span>
                    <h3 className="font-serif text-lg text-brand-coffee">{item.name}</h3>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-brand-coffee/20 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center gap-4 bg-brand-beige px-4 py-2 rounded-full border border-brand-sand/10">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-brand-terracotta hover:opacity-50 transition-opacity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-bold text-xs w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-brand-terracotta hover:opacity-50 transition-opacity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="text-lg font-bold text-brand-terracotta">${item.price * item.quantity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-4">
          <div className="bg-brand-coffee text-brand-beige p-8 rounded-3xl sticky top-24 shadow-xl">
            <h2 className="font-serif text-2xl mb-8">{t('cart.summary.title')}</h2>
            
            <div className="space-y-4 mb-8 border-b border-brand-beige/10 pb-8">
              <div className="flex justify-between text-brand-beige/60 text-sm">
                <span>{t('cart.summary.items')} ({totalItems})</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-brand-beige/60 text-sm">
                <span>{t('cart.summary.shipping')}</span>
                <span className="italic">{t('cart.summary.shipping.desc')}</span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{t('cart.summary.total')}</span>
              <span className="text-3xl font-serif">${totalPrice}</span>
            </div>

            <button 
              onClick={handleWhatsApp}
              className="w-full bg-brand-terracotta text-white py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-beige hover:text-brand-terracotta transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/10"
            >
              <MessageCircle size={18} /> {t('cart.summary.cta')}
            </button>
            
            <p className="text-center text-[9px] uppercase tracking-[0.2em] text-brand-beige/40 mt-6 leading-relaxed">
              {t('cart.summary.footer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
