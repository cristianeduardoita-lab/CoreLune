import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-8 pb-32 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-terracotta font-bold mb-6 block">{t('about.badge')}</span>
        <h1 className="font-serif text-5xl md:text-8xl text-brand-coffee mb-10 tracking-tighter leading-none">Cora Lune</h1>
        <p className="text-brand-coffee/60 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-light italic">
          {t('about.desc')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-40">
        <div className="rounded-3xl overflow-hidden editorial-shadow bg-brand-cream">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" 
            alt="Handmade Process" 
            aspectRatio="aspect-square"
            className="hover:scale-105 transition-transform duration-1000"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-serif text-4xl text-brand-coffee leading-tight">{t('about.process.title')}</h2>
          <div className="space-y-6 text-brand-coffee/70 leading-relaxed font-light text-base">
            <p>{t('about.process.p1')}</p>
            <p>{t('about.process.p2')}</p>
          </div>
        </div>
      </div>

      <div className="bg-brand-cream/40 p-12 md:p-20 rounded-[3rem] text-center border border-brand-sand/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <h2 className="font-serif text-4xl text-brand-coffee mb-8">{t('about.gift.title')}</h2>
        <p className="text-brand-coffee/60 leading-relaxed max-w-xl mx-auto mb-12 font-light text-base italic">
          {t('about.gift.desc')}
        </p>
        <div className="flex justify-center gap-12 text-3xl opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <span>🎁</span>
          <span>✨</span>
          <span>🏡</span>
        </div>
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-8 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-terracotta font-bold mb-6 block">{t('contact.badge')}</span>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-coffee mb-10 leading-tight tracking-tighter">{t('contact.title')}</h1>
          <p className="text-brand-coffee/60 text-base mb-16 leading-relaxed font-light max-w-md italic">
            {t('contact.desc')}
          </p>

          <div className="space-y-12">
            <div className="flex items-center gap-8 group cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-terracotta border border-brand-sand/10 shadow-sm group-hover:bg-brand-terracotta group-hover:text-white transition-all duration-500">
                <MessageCircle size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-1.5 text-brand-coffee/40">{t('contact.whatsapp')}</h4>
                <p className="text-brand-coffee text-base font-light">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-center gap-8 group cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-terracotta border border-brand-sand/10 shadow-sm group-hover:bg-brand-terracotta group-hover:text-white transition-all duration-500">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-1.5 text-brand-coffee/40">{t('contact.email')}</h4>
                <p className="text-brand-coffee text-base font-light">hello@coralune.com</p>
              </div>
            </div>
            <div className="flex items-center gap-8 group cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-terracotta border border-brand-sand/10 shadow-sm group-hover:bg-brand-terracotta group-hover:text-white transition-all duration-500">
                <Instagram size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-1.5 text-brand-coffee/40">{t('contact.insta')}</h4>
                <p className="text-brand-coffee text-base font-light">@atelier.coralune</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] editorial-shadow border border-brand-sand/5">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coffee/40">{t('contact.form.name')}</label>
              <input type="text" className="w-full bg-transparent border-b border-brand-sand/20 py-4 focus:border-brand-terracotta outline-none transition-all text-base font-light placeholder:text-brand-coffee/20" placeholder={t('contact.form.name.ph')} />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coffee/40">{t('contact.form.email')}</label>
              <input type="email" className="w-full bg-transparent border-b border-brand-sand/20 py-4 focus:border-brand-terracotta outline-none transition-all text-base font-light placeholder:text-brand-coffee/20" placeholder={t('contact.form.email.ph')} />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coffee/40">{t('contact.form.msg')}</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-brand-sand/20 py-4 focus:border-brand-terracotta outline-none transition-all resize-none text-base font-light placeholder:text-brand-coffee/20" placeholder={t('contact.form.msg.ph')} />
            </div>
            <button className="w-full bg-brand-terracotta text-white py-5 rounded-full font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-brand-coffee transition-all shadow-xl shadow-brand-terracotta/20 active:scale-[0.98]">
              {t('contact.form.cta')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
