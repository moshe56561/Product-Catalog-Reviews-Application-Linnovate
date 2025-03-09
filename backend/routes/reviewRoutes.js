const express = require("express");
const { getReviews, submitReview } = require("../controllers/reviewController");
const router = express.Router();

router.get("/:productId", getReviews);
router.post("/:productId", submitReview);

module.exports = router;
