import { Typography, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";

// for container
export const AppbarContainer: any = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

//for header

export const AppbarHeader: any = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "3em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));

export const MyList: any = styled(List)(({ type }: { type: any }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsContainerDesktop: any = styled(Box)(() => ({
  flexGrow: 0,
}));

export const ActionIconsContainerMobile: any = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  xIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));
