import { create } from "zustand";
import { Product, Review } from "@/types";

interface StoreState {
  products: Product[];
  reviews: Record<string, Review[]>; // Key: productId, Value: reviews
  page: number;
  hasMore: boolean;
  isLoading: boolean;

  setProducts: (products: Product[]) => void;
  appendProducts: (products: Product[]) => void;
  setPage: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;

  setReviews: (productId: string, reviews: Review[]) => void;
  addReview: (productId: string, review: Review) => void;
}

export const useStore = create<StoreState>((set) => ({
  products: [],
  reviews: {},
  page: 1,
  hasMore: true,
  isLoading: false,

  setProducts: (products) => set({ products }),

  appendProducts: (newProducts) =>
    set((state) => ({
      products: [
        ...state.products,
        ...newProducts.filter(
          (product) => !state.products.some((p) => p._id === product._id)
        ),
      ],
    })),

  setPage: (page) => set({ page }),
  setHasMore: (hasMore) => set({ hasMore }),
  setIsLoading: (isLoading) => set({ isLoading }),

  setReviews: (productId, reviews) =>
    set((state) => ({
      reviews: { ...state.reviews, [productId]: reviews },
    })),
  addReview: (productId, review) =>
    set((state) => ({
      reviews: {
        ...state.reviews,
        [productId]: [...(state.reviews[productId] || []), review],
      },
    })),
}));
