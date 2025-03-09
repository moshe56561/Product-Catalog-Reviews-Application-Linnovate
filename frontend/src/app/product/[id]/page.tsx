"use client";

import { useParams } from "next/navigation";
import {
  Typography,
  CircularProgress,
  Alert,
  Grid,
  Paper,
  Card,
  CardMedia,
} from "@mui/material";
import useProduct from "@/hooks/useProduct";
import useReviews from "@/hooks/useReviews";
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList"; // Import the ReviewList component

export default function ProductDetail() {
  const params = useParams();
  const id = (params?.id as string) || ""; // Get the `id` from the URL

  const {
    product,
    loading: productLoading,
    error: productError,
  } = useProduct(id);
  const { submitReview } = useReviews(id); // Use the submitReview function from useReviews

  if (productLoading) {
    return (
      <CircularProgress style={{ margin: "20px auto", display: "block" }} />
    );
  }
  if (productError) {
    return <Alert severity="error">Error: {productError?.message}</Alert>;
  }

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ padding: 2 }}>
      <Grid item xs={12} md={8}>
        {/* Product Details */}
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom align="center">
            {product?.name || ""}
          </Typography>

          {/* Responsive Image Container using MUI CardMedia */}
          <Card
            sx={{
              width: "100%",
              maxHeight: "300px",
              aspectRatio: "16/9",
              mb: 3,
            }}
          >
            <CardMedia
              component="img"
              image={product?.image || "/placeholder.jpg"}
              alt={product?.name || "Product image"}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image fills the card completely
              }}
            />
          </Card>

          <Typography variant="h6" gutterBottom align="center">
            ${product?.price || ""}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {product?.description || ""}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        {/* Reviews Section */}
        <Paper sx={{ padding: 3, mt: 3 }}>
          <Typography variant="h6" gutterBottom align="center">
            Reviews
          </Typography>

          {/* Use the ReviewList component */}
          <ReviewList productId={id} />

          {/* Reusable ReviewForm with productId */}
          <ReviewForm productId={id} onSubmit={submitReview} />
        </Paper>
      </Grid>
    </Grid>
  );
}
