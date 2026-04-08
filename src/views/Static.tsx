import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-24 pb-24 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-terracotta font-bold mb-4 block">{t('about.badge')}</span>
        <h1 className="font-serif text-4xl md:text-7xl text-brand-coffee mb-8 tracking-tight">Cora Lune</h1>
        <p className="text-brand-coffee/60 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          {t('about.desc')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
        <div className="rounded-2xl overflow-hidden editorial-shadow">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" 
            alt="Handmade Process" 
            aspectRatio="aspect-square"
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-coffee leading-tight">{t('about.process.title')}</h2>
          <p className="text-brand-coffee/60 leading-relaxed font-light text-sm md:text-base">
            {t('about.process.p1')}
          </p>
          <p className="text-brand-coffee/60 leading-relaxed font-light text-sm md:text-base">
            {t('about.process.p2')}
          </p>
        </div>
      </div>

      <div className="bg-brand-cream/50 p-10 md:p-16 rounded-[2rem] text-center border border-brand-sand/10">
        <h2 className="font-serif text-3xl text-brand-coffee mb-6">{t('about.gift.title')}</h2>
        <p className="text-brand-coffee/60 leading-relaxed max-w-xl mx-auto mb-10 font-light text-sm md:text-base">
          {t('about.gift.desc')}
        </p>
        <div className="flex justify-center gap-10 text-brand-terracotta/40">
          <div className="text-2xl">🎁</div>
          <div className="text-2xl">✨</div>
          <div className="text-2xl">🏡</div>
        </div>
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-terracotta font-bold mb-4 block">{t('contact.badge')}</span>
          <h1 className="font-serif text-3xl md:text-5xl text-brand-coffee mb-8 leading-tight">{t('contact.title')}</h1>
          <p className="text-brand-coffee/60 text-sm mb-12 leading-relaxed font-light">
            {t('contact.desc')}
          </p>

          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-terracotta border border-brand-sand/10">
                <MessageCircle size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{t('contact.whatsapp')}</h4>
                <p className="text-brand-coffee/60 text-sm font-light">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-terracotta border border-brand-sand/10">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{t('contact.email')}</h4>
                <p className="text-brand-coffee/60 text-sm font-light">hello@coralune.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-terracotta border border-brand-sand/10">
                <Instagram size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{t('contact.insta')}</h4>
                <p className="text-brand-coffee/60 text-sm font-light">@atelier.coralune</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream/50 p-10 md:p-12 rounded-3xl border border-brand-sand/10">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-coffee/40">{t('contact.form.name')}</label>
              <input type="text" className="w-full bg-transparent border-b border-brand-sand/30 py-3 focus:border-brand-terracotta outline-none transition-colors text-sm font-light" placeholder={t('contact.form.name.ph')} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-coffee/40">{t('contact.form.email')}</label>
              <input type="email" className="w-full bg-transparent border-b border-brand-sand/30 py-3 focus:border-brand-terracotta outline-none transition-colors text-sm font-light" placeholder={t('contact.form.email.ph')} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-coffee/40">{t('contact.form.msg')}</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-brand-sand/30 py-3 focus:border-brand-terracotta outline-none transition-colors resize-none text-sm font-light" placeholder={t('contact.form.msg.ph')} />
            </div>
            <button className="w-full bg-brand-terracotta text-white py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-coffee transition-all shadow-lg shadow-brand-terracotta/10">
              {t('contact.form.cta')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
