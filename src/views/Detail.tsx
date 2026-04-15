import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Minus, Plus, ShoppingBag, ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface DetailProps {
  product: Product;
  onNavigate: (view: string, params?: any) => void;
}

export const Detail: React.FC<DetailProps> = ({ product, onNavigate }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleCustomOrder = () => {
    const message = encodeURIComponent(`${t('cart.whatsapp.msg')} - ${product.name}`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="pt-4 pb-24 px-6 max-w-7xl mx-auto">
      <button 
        onClick={() => onNavigate('catalog')}
        className="flex items-center gap-2 text-brand-terracotta font-bold text-[10px] uppercase tracking-[0.2em] mb-12 hover:-translate-x-1 transition-transform"
      >
        <ArrowLeft size={14} /> {t('detail.back')}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-2xl overflow-hidden bg-brand-cream editorial-shadow"
        >
          <ImageWithFallback 
            src={product.image} 
            alt={product.name}
          />
        </motion.div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-terracotta font-bold block">
              {t('detail.badge')}
            </span>
            {product.isCustomizable && (
              <span className="bg-brand-gold/10 text-brand-gold text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em]">
                {t('detail.customizable')}
              </span>
            )}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-brand-coffee mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-brand-terracotta mb-8">${product.price}</p>
          
          <div className="space-y-8 mb-12">
            <p className="text-brand-coffee/60 leading-relaxed text-sm md:text-base font-light">
              {product.longDescription}
            </p>
            
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-y border-brand-sand/10 py-10">
              {product.aroma && (
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.2em] text-brand-coffee/40 font-bold mb-2">{t('detail.aroma')}</h4>
                  <p className="text-sm font-medium">{product.aroma}</p>
                </div>
              )}
              {product.size && (
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.2em] text-brand-coffee/40 font-bold mb-2">{t('detail.dimensions')}</h4>
                  <p className="text-sm font-medium">{product.size}</p>
                </div>
              )}
              {product.duration && (
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.2em] text-brand-coffee/40 font-bold mb-2">{t('detail.burnTime')}</h4>
                  <p className="text-sm font-medium">{product.duration}</p>
                </div>
              )}
              {product.suggestedUse && (
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.2em] text-brand-coffee/40 font-bold mb-2">{t('detail.perfectFor')}</h4>
                  <p className="text-sm font-medium">{product.suggestedUse}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-between bg-brand-cream px-6 py-3 rounded-full border border-brand-sand/10 min-w-[120px]">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="text-brand-terracotta hover:opacity-50 transition-opacity"
                >
                  <Minus size={16} />
                </button>
                <span className="font-bold text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="text-brand-terracotta hover:opacity-50 transition-opacity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button 
                onClick={() => {
                  for(let i=0; i<quantity; i++) addToCart(product);
                  onNavigate('cart');
                }}
                className="flex-1 bg-brand-terracotta text-white px-8 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-coffee transition-all shadow-lg shadow-brand-terracotta/10 flex items-center justify-center gap-3"
              >
                <ShoppingBag size={18} /> {t('detail.addToBag')}
              </button>
            </div>
            
            {product.isCustomizable && (
              <button 
                onClick={handleCustomOrder}
                className="w-full border border-brand-terracotta/30 text-brand-terracotta px-8 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-terracotta hover:text-white transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle size={18} /> {t('detail.requestCustom')}
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section>
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl text-brand-coffee">{t('detail.related')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onSelect={(p) => onNavigate('detail', p)} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
