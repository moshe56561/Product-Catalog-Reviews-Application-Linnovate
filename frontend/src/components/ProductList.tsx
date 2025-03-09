import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Grid>
  );
}
