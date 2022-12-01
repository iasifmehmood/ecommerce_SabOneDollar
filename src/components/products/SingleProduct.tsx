import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductImage,
} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import { Tooltip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Stack } from "@mui/system";

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
        <ProductActionWrapper>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton>
              <Tooltip placement="left" title="Click to view">
                <OpenInNewOutlinedIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>

        <ProductAddToCart show theme={theme} variant="contained">
          Add to Cart
        </ProductAddToCart>
      </Product>
    </>
  );
}
