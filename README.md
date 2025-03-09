# Product Catalog & Reviews Application

This is a **Next.js** application that provides a product catalog with reviews functionality. It features a modern UI built with **Material-UI (MUI)** and manages state using **Zustand**. The backend is built with **Node.js**, **Express**, and **MongoDB**.

## Features
- Display a list of products with images, descriptions, and prices.
- View product details on a dedicated page.
- Submit and view product reviews.
- Infinite scrolling for product listing.
- Fully typed with **TypeScript**.
- API calls managed via **Axios**.
- **Backend**: Fetch and submit product reviews, product details, and pagination for products.

## Tech Stack

### Frontend:
- **Frontend:** Next.js 15, React 19, TypeScript
- **State Management:** Zustand
- **UI Components:** MUI (Material-UI)
- **Data Fetching:** Axios

### Backend:
- **Backend:** Node.js, Express
- **Database:** MongoDB (with Mongoose)
- **Environment Variables:** dotenv
- **CORS:** Enabled via the `cors` library

## Installation

### Clone the repository and install dependencies:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Backend:**
   Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. **Frontend:**
   Navigate to the frontend folder and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

## Running the Project

To start the development server, **do not use any start commands except `npm run dev`**, as the other commands are not supported in development mode.

1. **Backend:**
   Navigate to the backend folder and run:
   ```bash
   npm run dev
   ```

2. **Frontend:**
   Navigate to the frontend folder and run:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Project Structure

### Frontend:
```
📂 src/
 ├── 📂 components/    # Reusable UI components
 ├── 📂 hooks/         # Custom React hooks
 ├── 📂 pages/         # Next.js pages
 ├── 📂 store/         # Zustand state management
 ├── 📂 types/         # TypeScript interfaces and types
 ├── 📂 lib/           # Helper functions (e.g., API fetchers)
```

### Backend:
```
/backend
  /config
    db.js                # Database connection setup
  /controllers
    productController.js   # Controller for handling product-related requests
    reviewController.js    # Controller for handling review-related requests
  /models
    Product.js             # Mongoose model for products
    Review.js              # Mongoose model for reviews
  /routes
    productRoutes.js       # Routes for product-related endpoints
    reviewRoutes.js        # Routes for review-related endpoints
  .env                     # Environment variables file
  server.js                # Entry point for the backend app
  package.json             # Backend project dependencies and scripts
```

## Environment Variables

### Backend:
Ensure you have a `.env` file in the backend folder with the necessary MongoDB URI and port configuration:

```sh
MONGO_URI=your_mongo_db_connection_string
PORT=5000
```

### Frontend:
Ensure you have a `.env` file in the frontend folder with the necessary API base URL:

```sh
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

> **Important:** Make sure to **add `/api`** to the API URL, like `NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api`, to ensure proper API routing.
