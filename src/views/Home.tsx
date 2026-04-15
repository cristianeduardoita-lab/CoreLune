import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Moon, MessageCircle } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface HomeProps {
  onNavigate: (view: string, params?: any) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  const handleCustomOrder = () => {
    const message = encodeURIComponent(t('cart.whatsapp.msg'));
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=2000" 
            alt="Handmade Candles"
            aspectRatio="h-full w-full"
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-beige/0 via-brand-beige/40 to-brand-beige" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-terracotta font-bold mb-4 block">{t('home.hero.badge')}</span>
            <h1 className="font-serif text-4xl md:text-7xl text-brand-coffee mb-6 tracking-tight leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-sm md:text-lg text-brand-coffee/70 mb-10 leading-relaxed max-w-xl mx-auto font-light">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('catalog')}
                className="bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-coffee transition-all shadow-lg shadow-brand-terracotta/10"
              >
                {t('home.hero.cta.shop')}
              </button>
              <button 
                onClick={handleCustomOrder}
                className="bg-white/50 backdrop-blur-sm text-brand-coffee border border-brand-coffee/10 px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-coffee hover:text-white transition-all"
              >
                {t('home.hero.cta.custom')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-md">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-terracotta font-bold mb-3 block">{t('home.featured.badge')}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-coffee leading-tight">{t('home.featured.title')}</h2>
          </div>
          <button 
            onClick={() => onNavigate('catalog')}
            className="text-[10px] uppercase tracking-[0.2em] text-brand-terracotta font-bold border-b border-brand-terracotta/20 pb-1 hover:border-brand-terracotta transition-all"
          >
            {t('home.featured.viewAll')}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={(p) => onNavigate('detail', p)} 
            />
          ))}
        </div>
      </section>

      {/* Custom Candles Section */}
      <section className="py-20 px-6 bg-brand-cream/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden editorial-shadow">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1596435700575-9296b3cdd2fd?auto=format&fit=crop&q=80&w=1000" 
              alt="Custom Candle Process"
              aspectRatio="aspect-[4/3] lg:aspect-square"
            />
          </div>
          <div className="space-y-6 lg:pl-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-terracotta font-bold block">{t('home.custom.badge')}</span>
            <h2 className="font-serif text-4xl text-brand-coffee leading-tight">{t('home.custom.title')}</h2>
            <p className="text-brand-coffee/60 text-base leading-relaxed font-light">
              {t('home.custom.desc')}
            </p>
            <ul className="space-y-3 text-brand-coffee/70 text-sm font-light">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {t('home.custom.li1')}
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {t('home.custom.li2')}
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {t('home.custom.li3')}
              </li>
            </ul>
            <button 
              onClick={handleCustomOrder}
              className="bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-coffee transition-all shadow-lg shadow-brand-terracotta/10 flex items-center gap-3 w-fit"
            >
              <MessageCircle size={16} /> {t('home.custom.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Gifts & Special Moments */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-terracotta font-bold mb-4 block">{t('home.moments.badge')}</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-coffee mb-6">{t('home.moments.title')}</h2>
          <p className="text-brand-coffee/60 font-light">{t('home.moments.desc')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: t('home.moments.wedding'), desc: t('home.moments.wedding.desc') },
            { title: t('home.moments.birthday'), desc: t('home.moments.birthday.desc') },
            { title: t('home.moments.decor'), desc: t('home.moments.decor.desc') }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-brand-sand/10 bg-white/30 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-brand-coffee mb-2">{item.title}</h3>
              <p className="text-brand-coffee/50 text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 px-6 border-t border-brand-sand/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-brand-coffee mb-10">{t('home.insta.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              "https://images.unsplash.com/photo-1602872030219-3df63824f5cd?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1596435700575-9296b3cdd2fd?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1572726710708-20bb9fa06337?auto=format&fit=crop&q=80&w=600"
            ].map((url, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-brand-cream">
                <ImageWithFallback 
                  src={url} 
                  alt="Instagram feed"
                  aspectRatio="aspect-square"
                  className="hover:scale-105 transition-transform duration-700 cursor-pointer"
                />
              </div>
            ))}
          </div>
          <button 
            onClick={() => window.open('https://instagram.com', '_blank')}
            className="bg-white text-brand-terracotta border border-brand-terracotta/20 px-8 py-3 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-terracotta hover:text-white transition-all"
          >
            {t('home.insta.cta')}
          </button>
        </div>
      </section>
    </div>
  );
};
