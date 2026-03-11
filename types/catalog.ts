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
