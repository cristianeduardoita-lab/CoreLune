import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Heart Candle',
    category: 'Candles',
    price: 32,
    description: 'A delicate heart-shaped candle for special moments.',
    longDescription: 'Hand-poured with premium soy wax in North Austin. This aesthetic heart candle is designed to bring warmth and love to any space. Perfect as a gift or a centerpiece for your most cherished moments.',
    aroma: 'Wild Rose & Vanilla',
    size: '4.5" x 4.5"',
    duration: '25-30 hours',
    suggestedUse: 'Gift',
    isCustomizable: true,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: '2',
    name: 'Daisy Candle',
    category: 'Candles',
    price: 28,
    description: 'Cheerful floral design to brighten your home.',
    longDescription: 'Inspired by the simplicity of nature, our Daisy Candle features intricate petal details and a fresh, uplifting scent. Each candle is individually crafted to ensure the highest quality aesthetic.',
    aroma: 'Fresh Linen & Daisy',
    size: '3.5" diameter',
    duration: '20-25 hours',
    suggestedUse: 'Decor',
    isCustomizable: false,
    image: 'https://images.unsplash.com/photo-1602874801007-4c5f9c1f1b2c?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: '3',
    name: 'Rose Candle',
    category: 'Candles',
    price: 35,
    description: 'Elegant rose sculpture with a timeless scent.',
    longDescription: 'A true work of art. This rose-shaped candle captures the elegance of a blooming flower. Made with a specialized wax blend to maintain its beautiful form while providing a long-lasting fragrance.',
    aroma: 'English Garden Rose',
    size: '4" height',
    duration: '30-35 hours',
    suggestedUse: 'Special Moments',
    isCustomizable: true,
    image: 'https://images.unsplash.com/photo-1616628182507-1f3e0f97958a?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: '4',
    name: 'Bloom Candle',
    category: 'Candles',
    price: 30,
    description: 'Minimalist geometric bloom for modern spaces.',
    longDescription: 'The Bloom Candle combines modern geometric lines with the soft glow of candlelight. A perfect addition to any minimalist decor, providing a subtle yet sophisticated atmosphere.',
    aroma: 'White Tea & Sage',
    size: '4" x 4"',
    duration: '35-40 hours',
    suggestedUse: 'Decor',
    isCustomizable: false,
    image: 'https://images.unsplash.com/photo-1602872022544-0c2b5f3c1c58?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '5',
    name: 'Custom Gift Candle',
    category: 'Candles',
    price: 45,
    description: 'Personalized candle tailored to your vision.',
    longDescription: 'Create something truly unique. Our Custom Gift Candle allows you to choose specific colors, scents, and even add a personalized message. Ideal for weddings, birthdays, or corporate gifts.',
    aroma: 'Custom Selection',
    size: 'Varies',
    duration: '40-50 hours',
    suggestedUse: 'Gift',
    isCustomizable: true,
    image: 'https://images.unsplash.com/photo-1602872022594-8e2b5c2c1b7c?auto=format&fit=crop&q=80&w=1200'
  }
];
