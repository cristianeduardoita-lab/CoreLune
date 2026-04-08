import React from 'react';
import { motion } from 'motion/react';
import { Plus, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl bg-brand-cream mb-4">
        <ImageWithFallback 
          src={product.image} 
          alt={product.name}
          className="transition-transform duration-1000 group-hover:scale-105"
        />
        {product.featured && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm text-[8px] font-bold tracking-[0.2em] uppercase text-brand-coffee z-10">
            Featured
          </div>
        )}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute bottom-3 right-3 bg-brand-terracotta text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg z-10"
        >
          <Plus size={20} />
        </button>
      </div>
      
      <div className="cursor-pointer" onClick={() => onSelect(product)}>
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-serif text-lg text-brand-coffee group-hover:text-brand-terracotta transition-colors">
            {product.name}
          </h3>
          <span className="text-sm font-bold text-brand-terracotta">${product.price}</span>
        </div>
        <p className="text-brand-coffee/50 text-xs mb-3 line-clamp-1 font-light">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-brand-terracotta font-bold">
            {product.isCustomizable ? 'Custom Available' : 'Ready to Ship'}
          </span>
          <span className="text-brand-terracotta font-bold text-[10px] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Details <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};
