export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Review {
  _id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
