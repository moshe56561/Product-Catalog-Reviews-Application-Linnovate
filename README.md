# Product Catalog & Reviews Application

This is a **Next.js** application that provides a product catalog with reviews functionality. It features a modern UI built with **Material-UI (MUI)** and manages state using **Zustand**.

## Features
- Display a list of products with images, descriptions, and prices.
- View product details on a dedicated page.
- Submit and view product reviews.
- Infinite scrolling for product listing.
- Fully typed with **TypeScript**.
- API calls managed via **Axios**.

## Tech Stack
- **Frontend:** Next.js 15, React 19, TypeScript
- **State Management:** Zustand
- **UI Components:** MUI (Material-UI)
- **Data Fetching:** Axios

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/product-catalog.git
cd product-catalog
npm install
```

## Running the Project

To start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production-ready app |
| `npm run start` | Run the built app |
| `npm run lint` | Run ESLint for code quality |

## Project Structure

```
📂 src/
 ├── 📂 components/    # Reusable UI components
 ├── 📂 hooks/         # Custom React hooks
 ├── 📂 pages/         # Next.js pages
 ├── 📂 store/         # Zustand state management
 ├── 📂 types/         # TypeScript interfaces and types
 ├── 📂 lib/           # Helper functions (e.g., API fetchers)
```

## Environment Variables
Ensure you have a `.env.local` file with the necessary API configurations:

```sh
NEXT_PUBLIC_API_BASE_URL=http://your-api-url.com
```

## Contributing
Feel free to submit issues or pull requests to improve the project!

## License
This project is licensed under the **MIT License**.

