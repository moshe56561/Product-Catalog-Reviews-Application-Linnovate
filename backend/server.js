// // backend/server.js
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const productRoutes = require("./routes/productRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/products", productRoutes);
// app.use("/api/reviews", reviewRoutes);

// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const Product = require("./models/Product");
const Review = require("./models/Review");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Insert demo data into the database
const insertDemoData = async () => {
  try {
    // Check if demo data already exists
    const productsCount = await Product.countDocuments();
    if (productsCount === 0) {
      // Tech product name generator
      const techPrefixes = ["Gamer", "Pro", "Ultra", "Tech", "Smart", "Neo"];
      const techTypes = [
        "Gaming PC",
        "Wireless Mouse",
        "Bluetooth Earphones",
        "Mechanical Keyboard",
        "Monitor",
        "SSD Drive",
        "Graphics Card",
        "Laptop",
        "Webcam",
        "Headset",
      ];
      const techBrands = ["Xtron", "Byte", "Pulse", "Nexis", "Core", "Vibe"];

      // Mapping of product types to specific Pexels image URLs (verified working as of March 08, 2025)
      const imageMap = {
        "Gaming PC":
          "https://images.pexels.com/photos/258895/pexels-photo-258895.jpeg",
        "Wireless Mouse":
          "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
        "Bluetooth Earphones":
          "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg",
        "Mechanical Keyboard":
          "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
        Monitor:
          "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
        "SSD Drive":
          "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg",
        "Graphics Card":
          "https://images.pexels.com/photos/316929/pexels-photo-316929.jpeg",
        Laptop:
          "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg",
        Webcam:
          "https://images.pexels.com/photos/5053741/pexels-photo-5053741.jpeg",
        Headset:
          "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg",
      };

      const demoProducts = [];
      for (let i = 4; i <= 103; i++) {
        // Generate random tech product name
        const prefix =
          techPrefixes[Math.floor(Math.random() * techPrefixes.length)];
        const type = techTypes[Math.floor(Math.random() * techTypes.length)];
        const brand = techBrands[Math.floor(Math.random() * techBrands.length)];
        const productName = `${prefix} ${brand} ${type}`;

        // Check if the product already exists by name
        const existingProduct = await Product.findOne({ name: productName });
        if (existingProduct) {
          continue; // Skip if product already exists
        }

        // Get the corresponding image URL based on product type
        const imageUrl = imageMap[type];

        const product = {
          name: productName,
          price: (Math.random() * 500 + 20).toFixed(2), // Prices between $20-$520
          image: imageUrl,
          description: `High-quality ${type.toLowerCase()} featuring ${prefix.toLowerCase()} technology from ${brand}.`,
        };
        demoProducts.push(product);
      }

      if (demoProducts.length > 0) {
        const insertedProducts = await Product.insertMany(demoProducts);
        console.log(
          `${insertedProducts.length} demo products inserted:`,
          insertedProducts
        );

        // Insert demo reviews for the first product
        const demoReviews = [
          {
            productId: insertedProducts[0]._id,
            author: "TechFan1",
            rating: 5,
            comment: "Amazing performance for the price!",
            date: new Date().toISOString(),
          },
          {
            productId: insertedProducts[0]._id,
            author: "GamerX",
            rating: 4,
            comment: "Solid tech, but shipping took a while.",
            date: new Date().toISOString(),
          },
        ];

        const insertedReviews = await Review.insertMany(demoReviews);
        console.log("Demo reviews inserted:", insertedReviews);
      }
    }
  } catch (error) {
    console.error("Error inserting demo data:", error);
  }
};

// Call the function to insert demo data
insertDemoData();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
