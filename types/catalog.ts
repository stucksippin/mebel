export interface Subcategory {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Category {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  subcategories: Subcategory[];
}

export interface Product {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  material?: string;
  term?: string;
  size?: string;
  priceFrom?: number;
  badge?: string;
}
