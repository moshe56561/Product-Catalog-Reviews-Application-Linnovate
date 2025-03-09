"use client";
import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import { fetchReviews, submitReview as submitReviewApi } from "@/lib/fetcher";
import { Review } from "@/types";

export default function useReviews(productId: string) {
  const { reviews, setReviews, addReview } = useStore();

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchReviews(productId);
        setReviews(productId, data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    if (productId && !reviews[productId]) {
      loadReviews();
    }
  }, [productId, reviews, setReviews]);

  const submitReview = async (review: Omit<Review, "_id" | "date">) => {
    try {
      const newReview = await submitReviewApi(productId, review);
      addReview(productId, newReview);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return { reviews: reviews[productId] || [], submitReview };
}
