import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";

export const SearchBoxContainer: any = styled(Box)(
  ({ theme }: { theme: any }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "30%",
    background: Colors.black,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    zIndex: 99999,
    opacity: 0.9,
  })
);

export const SearchField: any = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },
  ".MuiInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    color: Colors.white,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
  padding: "0 0 0 40px",
}));
