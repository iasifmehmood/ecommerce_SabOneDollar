import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const PromotionsContainer: any = styled(Box)(({ theme }) => ({
  //up means to larger devices down means on smaller devices
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "50px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: Colors.secondary,
}));

export const MessageText: any = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montez","cursive"',
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  color: Colors.white,
  fontSize: "1.5rem",
}));
