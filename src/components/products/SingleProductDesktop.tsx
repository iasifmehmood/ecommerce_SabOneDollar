import { Product, ProductAddToCart, ProductImage } from "../../styles/Products";
import ProductMeta from "./ProductMeta";

import React, { useState } from "react";

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
      <Product>
        <ProductImage
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={product.image}
          theme={theme}
        />
        {showOptions && (
          <ProductAddToCart show={showOptions} theme={theme}>
            Add to Cart
          </ProductAddToCart>
        )}
      </Product>
      <ProductMeta product={product} matches={matches} />
    </>
  );
}
