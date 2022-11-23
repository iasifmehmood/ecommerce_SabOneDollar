import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle: any = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscribeTf: any = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
}));
