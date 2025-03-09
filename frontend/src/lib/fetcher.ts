import axios from "axios";
import { Product, Review } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchProducts = async (
  page: number,
  limit: number
): Promise<Product[]> => {
  const response = await axios.get(`${API_BASE_URL}/products`, {
    params: { page, limit },
  });
  return response.data;
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

export const fetchReviews = async (productId: string): Promise<Review[]> => {
  const response = await axios.get(`${API_BASE_URL}/reviews/${productId}`);
  return response.data;
};

export const submitReview = async (
  productId: string,
  review: Omit<Review, "_id" | "date">
): Promise<Review> => {
  const response = await axios.post(
    `${API_BASE_URL}/reviews/${productId}`,
    review
  );
  return response.data;
};
