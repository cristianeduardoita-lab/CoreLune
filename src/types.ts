export interface Product {
  id: string;
  name: string;
  category: 'Candles';
  price: number;
  description: string;
  longDescription: string;
  aroma?: string;
  size?: string;
  duration?: string;
  suggestedUse?: string;
  isCustomizable: boolean;
  image: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
