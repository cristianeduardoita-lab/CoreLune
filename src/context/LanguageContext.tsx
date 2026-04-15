import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.shop': 'Shop Collection',
    'nav.custom': 'Custom Order',
    'nav.story': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.cart': 'Bag',
    'nav.more': 'More',
    // Home
    'home.hero.badge': 'North Austin, US',
    'home.hero.title': 'Aesthetic Handmade Candles',
    'home.hero.subtitle': 'Crafted for your most cherished moments and cozy spaces.',
    'home.hero.cta.shop': 'Shop Collection',
    'home.hero.cta.custom': 'Custom Order',
    'home.featured.badge': 'Boutique Selection',
    'home.featured.title': 'Hand-poured with intention',
    'home.featured.viewAll': 'View All',
    'home.custom.badge': 'Personalized Pieces',
    'home.custom.title': 'Custom Candles',
    'home.custom.desc': 'Looking for a unique gift or a specific scent for your event? We specialize in custom aesthetic candles for weddings, birthdays, and corporate gifts.',
    'home.custom.li1': 'Bespoke jar styles & color palettes',
    'home.custom.li2': 'Premium curated scent library',
    'home.custom.li3': 'Personalized labels & floral toppings',
    'home.custom.cta': 'Request Custom Candle',
    'home.moments.badge': 'Gifts & Special Moments',
    'home.moments.title': 'Thoughtful details for every occasion',
    'home.moments.desc': 'From intimate dinners to grand celebrations, our candles add the perfect touch of warmth.',
    'home.moments.wedding': 'Weddings',
    'home.moments.wedding.desc': 'Elegant favors and centerpieces.',
    'home.moments.birthday': 'Birthdays',
    'home.moments.birthday.desc': 'Personalized gifts they\'ll cherish.',
    'home.moments.decor': 'Home Decor',
    'home.moments.decor.desc': 'Aesthetic accents for your space.',
    'home.insta.title': 'Follow our process @atelier.coralune',
    'home.insta.cta': 'DM us on Instagram',
    // Catalog
    'catalog.badge': 'The Collection',
    'catalog.title': 'Handmade Aesthetic Candles',
    'catalog.desc': 'Each candle is hand-poured in North Austin with premium soy wax and curated scents, designed to bring warmth and beauty to your most special moments.',
    'catalog.empty': 'No candles found at the moment.',
    // Detail
    'detail.back': 'Back to Collection',
    'detail.badge': 'Handmade Candle',
    'detail.customizable': 'Customizable',
    'detail.aroma': 'Aroma',
    'detail.dimensions': 'Dimensions',
    'detail.burnTime': 'Burn Time',
    'detail.perfectFor': 'Perfect For',
    'detail.addToBag': 'Add to Bag',
    'detail.requestCustom': 'Request Customization',
    'detail.related': 'You might also like',
    // Cart
    'cart.title': 'Your Shopping Bag',
    'cart.empty.title': 'Your bag is empty',
    'cart.empty.desc': 'It looks like you haven\'t selected any candles yet. Explore our collection and find the perfect piece for your home or a special gift.',
    'cart.empty.cta': 'Explore Collection',
    'cart.summary.title': 'Order Summary',
    'cart.summary.items': 'Items',
    'cart.summary.shipping': 'Shipping',
    'cart.summary.shipping.desc': 'Calculated later',
    'cart.summary.total': 'Total',
    'cart.summary.cta': 'Checkout via WhatsApp',
    'cart.summary.footer': 'You will be redirected to WhatsApp to coordinate shipping and payment.',
    'cart.whatsapp.msg': 'Hi! I\'d like to place an order from Cora Lune ✨',
    // About
    'about.badge': 'Our Story',
    'about.title': 'Cora Lune',
    'about.desc': 'Hand-pouring aesthetic candles in North Austin. We believe in creating beautiful objects that bring warmth and style to your home.',
    'about.process.title': 'Hand-poured in North Austin',
    'about.process.p1': 'Every Cora Lune candle is hand-poured in small batches using 100% soy wax and premium fragrance oils. We focus on clean burns and aesthetic designs that serve as both a scent and a decorative piece.',
    'about.process.p2': 'Our mission is to provide high-quality, beautiful gifts that help you celebrate special moments or simply enjoy a quiet evening at home.',
    'about.gift.title': 'Perfect for Gifting',
    'about.gift.desc': 'From custom wedding favors to personalized birthday gifts, we love being part of your celebrations. Our aesthetic packaging makes every order ready to gift.',
    // Contact
    'contact.badge': 'Get in Touch',
    'contact.title': 'Let\'s connect',
    'contact.desc': 'Have a question about our products or want to discuss a custom order? We\'d love to hear from you.',
    'contact.whatsapp': 'WhatsApp Order',
    'contact.email': 'Email',
    'contact.insta': 'Instagram DM',
    'contact.form.name': 'Name',
    'contact.form.name.ph': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.email.ph': 'hello@example.com',
    'contact.form.msg': 'Message',
    'contact.form.msg.ph': 'How can we help you?',
    'contact.form.cta': 'Send Message',
    // Footer
    'footer.desc': 'Handmade aesthetic candles designed to bring warmth and beauty to your home. Crafted with care in North Austin, perfect for gifts and special moments.',
    'footer.explore': 'Explore',
    'footer.shopAll': 'Shop All',
    'footer.follow': 'Follow Us',
    'footer.rights': '© 2024 Cora Lune. Hand-poured in North Austin, US.',
    // Product Card
    'product.featured': 'Featured',
    'product.custom': 'Custom Available',
    'product.ready': 'Ready to Ship',
    'product.details': 'Details',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.shop': 'Colección',
    'nav.custom': 'Pedido Especial',
    'nav.story': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.cart': 'Bolsa',
    'nav.more': 'Más',
    // Home
    'home.hero.badge': 'North Austin, US',
    'home.hero.title': 'Velas Artesanales Estéticas',
    'home.hero.subtitle': 'Creadas para tus momentos más queridos y espacios acogedores.',
    'home.hero.cta.shop': 'Ver Colección',
    'home.hero.cta.custom': 'Pedido Especial',
    'home.featured.badge': 'Selección Boutique',
    'home.featured.title': 'Vertidas a mano con intención',
    'home.featured.viewAll': 'Ver Todo',
    'home.custom.badge': 'Piezas Personalizadas',
    'home.custom.title': 'Velas a Medida',
    'home.custom.desc': '¿Buscas un regalo único o un aroma específico para tu evento? Nos especializamos en velas estéticas personalizadas para bodas, cumpleaños y regalos corporativos.',
    'home.custom.li1': 'Estilos de frascos y paletas de colores a medida',
    'home.custom.li2': 'Biblioteca de aromas premium curada',
    'home.custom.li3': 'Etiquetas personalizadas y decoraciones florales',
    'home.custom.cta': 'Solicitar Vela Personalizada',
    'home.moments.badge': 'Regalos y Momentos Especiales',
    'home.moments.title': 'Detalles pensados para cada ocasión',
    'home.moments.desc': 'Desde cenas íntimas hasta grandes celebraciones, nuestras velas añaden el toque perfecto de calidez.',
    'home.moments.wedding': 'Bodas',
    'home.moments.wedding.desc': 'Recuerdos y centros de mesa elegantes.',
    'home.moments.birthday': 'Cumpleaños',
    'home.moments.birthday.desc': 'Regalos personalizados que atesorarán.',
    'home.moments.decor': 'Decoración',
    'home.moments.decor.desc': 'Acentos estéticos para tu espacio.',
    'home.insta.title': 'Sigue nuestro proceso @atelier.coralune',
    'home.insta.cta': 'Escríbenos por Instagram',
    // Catalog
    'catalog.badge': 'La Colección',
    'catalog.title': 'Velas Artesanales Estéticas',
    'catalog.desc': 'Cada vela es vertida a mano en North Austin con cera de soja premium y aromas curados, diseñada para brindar calidez y belleza a tus momentos más especiales.',
    'catalog.empty': 'No se encontraron velas por el momento.',
    // Detail
    'detail.back': 'Volver a la Colección',
    'detail.badge': 'Vela Artesanal',
    'detail.customizable': 'Personalizable',
    'detail.aroma': 'Aroma',
    'detail.dimensions': 'Dimensiones',
    'detail.burnTime': 'Duración',
    'detail.perfectFor': 'Perfecto Para',
    'detail.addToBag': 'Añadir a la Bolsa',
    'detail.requestCustom': 'Solicitar Personalización',
    'detail.related': 'También te puede gustar',
    // Cart
    'cart.title': 'Tu Bolsa de Compras',
    'cart.empty.title': 'Tu bolsa está vacía',
    'cart.empty.desc': 'Parece que aún no has seleccionado ninguna vela. Explora nuestra colección y encuentra la pieza perfecta para tu hogar o un regalo especial.',
    'cart.empty.cta': 'Explorar Colección',
    'cart.summary.title': 'Resumen del Pedido',
    'cart.summary.items': 'Productos',
    'cart.summary.shipping': 'Envío',
    'cart.summary.shipping.desc': 'Calculado después',
    'cart.summary.total': 'Total',
    'cart.summary.cta': 'Finalizar por WhatsApp',
    'cart.summary.footer': 'Serás redirigido a WhatsApp para coordinar el envío y el pago de tu pedido.',
    'cart.whatsapp.msg': '¡Hola! Me gustaría hacer un pedido de Cora Lune ✨',
    // About
    'about.badge': 'Nuestra Historia',
    'about.title': 'Cora Lune',
    'about.desc': 'Vertiendo velas estéticas a mano en North Austin. Creemos en crear objetos hermosos que brinden calidez y estilo a tu hogar.',
    'about.process.title': 'Vertidas a mano en North Austin',
    'about.process.p1': 'Cada vela de Cora Lune es vertida a mano en pequeños lotes usando cera de soja 100% y aceites de fragancia premium. Nos enfocamos en quemas limpias y diseños estéticos que sirven tanto como aroma como pieza decorativa.',
    'about.process.p2': 'Nuestra misión es proporcionar regalos hermosos y de alta calidad que te ayuden a celebrar momentos especiales o simplemente disfrutar de una noche tranquila en casa.',
    'about.gift.title': 'Perfecto para Regalar',
    'about.gift.desc': 'Desde recuerdos de boda personalizados hasta regalos de cumpleaños a medida, nos encanta ser parte de tus celebraciones. Nuestro empaque estético hace que cada pedido esté listo para regalar.',
    // Contact
    'contact.badge': 'Ponte en Contacto',
    'contact.title': 'Conectemos',
    'contact.desc': '¿Tienes alguna pregunta sobre nuestros productos o quieres hablar sobre un pedido personalizado? Nos encantaría saber de ti.',
    'contact.whatsapp': 'Pedido por WhatsApp',
    'contact.email': 'Correo Electrónico',
    'contact.insta': 'DM de Instagram',
    'contact.form.name': 'Nombre',
    'contact.form.name.ph': 'Tu nombre completo',
    'contact.form.email': 'Correo',
    'contact.form.email.ph': 'hola@ejemplo.com',
    'contact.form.msg': 'Mensaje',
    'contact.form.msg.ph': '¿Cómo podemos ayudarte?',
    'contact.form.cta': 'Enviar Mensaje',
    // Footer
    'footer.desc': 'Velas estéticas artesanales diseñadas para brindar calidez y belleza a tu hogar. Creadas con cuidado en North Austin, perfectas para regalos y momentos especiales.',
    'footer.explore': 'Explorar',
    'footer.shopAll': 'Comprar Todo',
    'footer.follow': 'Síguenos',
    'footer.rights': '© 2024 Cora Lune. Vertidas a mano en North Austin, US.',
    // Product Card
    'product.featured': 'Destacado',
    'product.custom': 'Personalización Disponible',
    'product.ready': 'Listo para Enviar',
    'product.details': 'Detalles',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
