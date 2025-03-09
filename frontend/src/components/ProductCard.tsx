import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Product } from "@/types";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link href={`/product/${product._id}`} passHref>
        <Card
          sx={{
            cursor: "pointer", // Makes the card clickable
            "&:hover": {
              boxShadow: 6, // Optional: adds a shadow effect on hover
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            {/* View Details Button */}
            <Link href={`/product/${product._id}`} passHref>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
              >
                View Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
