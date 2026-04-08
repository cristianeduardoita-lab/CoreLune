import React from 'react';
import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

interface CatalogProps {
  onNavigate: (view: string, params?: any) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-terracotta font-bold mb-4 block">{t('catalog.badge')}</span>
        <h1 className="font-serif text-4xl md:text-5xl text-brand-coffee mb-6 leading-tight">{t('catalog.title')}</h1>
        <p className="text-brand-coffee/60 text-sm md:text-base font-light leading-relaxed">
          {t('catalog.desc')}
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onSelect={(p) => onNavigate('detail', p)} 
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-brand-coffee/40 font-serif italic text-xl">{t('catalog.empty')}</p>
        </div>
      )}
    </div>
  );
};
