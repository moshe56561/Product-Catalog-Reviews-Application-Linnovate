"use client";

import { Typography, Box } from "@mui/material";
import { useStore } from "@/store/useStore";

interface ReviewListProps {
  productId: string;
}

export default function ReviewList({ productId }: ReviewListProps) {
  const { reviews } = useStore(); // Get reviews from the store

  return (
    <Box>
      {reviews[productId]?.map((review) => (
        <Box key={review._id} mb={2}>
          <Typography variant="body2">
            <strong>{review.author}</strong> - {review.rating}/5
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {review.comment}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
