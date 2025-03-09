// components/ReviewForm.tsx
"use client";

import { useState } from "react";
import { TextField, Button } from "@mui/material";

interface ReviewFormProps {
  productId: string; // Add productId as a prop
  onSubmit: (review: {
    author: string;
    rating: number;
    comment: string;
    productId: string;
  }) => void;
}

export default function ReviewForm({ productId, onSubmit }: ReviewFormProps) {
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    const currentReview = {
      author: "Anonymous", // Replace with actual user data if available
      rating: 5, // Replace with actual rating input if available
      comment: reviewText,
      productId, // Include the productId in the review object
    };
    onSubmit(currentReview);
    setReviewText("");
  };

  return (
    <div>
      <TextField
        label="Your Review"
        multiline
        rows={4}
        fullWidth
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        style={{ marginTop: "10px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: "10px" }}
      >
        Submit Review
      </Button>
    </div>
  );
}
