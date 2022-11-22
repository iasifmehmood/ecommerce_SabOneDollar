import { Product, ProductAddToCart, ProductImage } from "../../styles/Products";
import ProductMeta from "./ProductMeta";

export default function SingleProduct({
  product,
  matches,
  theme,
}: {
  product: any;
  matches: any;
  theme: any;
}) {
  return (
    <>
      <Product>
        <ProductImage src={product.image} theme={theme} />
        <ProductMeta product={product} matches={matches} />

        <ProductAddToCart show theme={theme} variant="contained">
          Add to Cart
        </ProductAddToCart>
      </Product>
    </>
  );
}
