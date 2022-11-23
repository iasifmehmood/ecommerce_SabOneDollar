import React from "react";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ background: "#fff" }} maxWidth="xl">
        <Appbar />
        <Banner />
        <Promotions />
        <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
          <Typography variant="h4">Our Products</Typography>
        </Box>
        <Products />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
