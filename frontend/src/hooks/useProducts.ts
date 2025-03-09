"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import { fetchProducts } from "@/lib/fetcher";

export default function useProducts() {
  const {
    products,
    page,
    hasMore,
    isLoading,
    appendProducts,
    setPage,
    setHasMore,
    setIsLoading,
  } = useStore();

  const loadMoreProducts = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {
      const newProducts = await fetchProducts(page, 20); // Fetch 20 products per page
      if (newProducts.length > 0) {
        appendProducts(newProducts);
        setPage(page + 1);
      } else {
        setHasMore(false); // No more products to fetch
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      const threshold = 100; // Load more products when 100px from the bottom

      if (scrollHeight - (scrollTop + clientHeight) < threshold) {
        loadMoreProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, hasMore, isLoading]);

  useEffect(() => {
    if (products.length === 0) {
      loadMoreProducts(); // Fetch the first batch of products
    }
  }, []);

  return { products, isLoading, hasMore };
}
