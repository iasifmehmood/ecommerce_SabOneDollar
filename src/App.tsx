import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ background: "#fff" }} maxWidth="xl">
        <Appbar />
        <Banner />
        <Promotions />
      </Container>
    </ThemeProvider>
  );
}

export default App;
