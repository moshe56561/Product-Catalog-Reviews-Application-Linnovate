"use client";

import ProductList from "@/components/ProductList";
import useProducts from "@/hooks/useProducts";
import {
  Typography,
  CircularProgress,
  Alert,
  Container,
  Box,
} from "@mui/material";

export default function HomePage() {
  const { products, isLoading, hasMore } = useProducts();

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Product Catalog
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Browse our amazing collection of products
        </Typography>
      </Box>
      <ProductList products={products} />
      {isLoading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      )}
      {!hasMore && (
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="text.secondary">
            No more products to load.
          </Typography>
        </Box>
      )}
    </Container>
  );
}
