import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

export default function Products() {
  const theme: any = useTheme();
  const matches: any = useMediaQuery(theme.breakpoints.down("md"));
  const renderProducts = products.map((product: any) => (
    <Grid
      item
      key={product.id}
      xs={7}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} theme={theme} />
      ) : (
        <SingleProductDesktop
          product={product}
          matches={matches}
          theme={theme}
        />
      )}
    </Grid>
  ));
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columnSpacing={{ xs: 4, sm: 4, md: 4 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
