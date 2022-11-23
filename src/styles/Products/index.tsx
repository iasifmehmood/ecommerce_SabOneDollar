import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { slideInBottom, slideInRight } from "../../animation";
import { Colors } from "../theme";

export const Product: any = styled(Box)(({ theme }: { theme: any }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const ProductImage: any = styled("img")(
  ({ theme, src }: { theme: any; src: any }) => ({
    src: `url(${src})`,
    width: "100%",
    background: Colors.light_gray,
    padding: "10px",
    [theme.breakpoints.down["md"]]: {
      width: "80%",
      padding: "24%",
    },
  })
);

export const ProductActionButton: any = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ProductAddToCart: any = styled(Button, {
  shouldForwardProp: prop => prop !== "show",
})(({ show, theme }: { show: boolean; theme: any }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const ProductMetaWrapper: any = styled(Box)(
  ({ theme }: { theme: any }) => ({
    // not used yet
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })
);

export const ProductActionWrapper: any = styled(Box)(
  ({ show, theme }: { show: boolean; theme: any }) => ({
    [theme.breakpoints.up("md")]: {
      display: show ? "visible" : "none",
      position: "absolute",
      right: 0,
      top: "20%",
      animation:
        show &&
        `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
  })
);
