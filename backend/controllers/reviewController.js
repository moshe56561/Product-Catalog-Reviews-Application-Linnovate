const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching reviews", error: error.message });
  }
};

exports.submitReview = async (req, res) => {
  try {
    const { author, rating, comment } = req.body;
    const newReview = new Review({
      productId: req.params.productId,
      author,
      rating,
      comment,
    });
    await newReview.save();
    res.json(newReview);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting review", error: error.message });
  }
};
