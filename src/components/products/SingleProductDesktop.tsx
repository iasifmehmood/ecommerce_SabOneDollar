import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductImage,
} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import { Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

export default function SingleProductDesktop({
  product,
  matches,
  theme,
}: {
  product: any;
  matches: any;
  theme: any;
}) {
  const [showOptions, setshowOptions] = useState<boolean>(false);
  const handleMouseEnter: any = () => {
    setshowOptions(true);
  };
  const handleMouseLeave: any = () => {
    setshowOptions(false);
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} theme={theme} />
        {(showOptions || matches) && (
          <ProductAddToCart
            show={showOptions}
            theme={theme}
            variant="contained"
          >
            Add to cart
          </ProductAddToCart>
        )}
        <ProductActionWrapper theme={theme} show={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton>
              <Tooltip placement="left" title="Open Cart">
                <ShoppingCartOutlinedIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton>
              <Tooltip placement="left" title="Click to view">
                <OpenInNewOutlinedIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
    </>
  );
}
