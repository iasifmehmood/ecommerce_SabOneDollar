import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
  BannerImage,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches: any = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer matches={matches} theme={theme}>
      <BannerImage src="/images/banner/banner.png" />

      <BannerContent>
        <Typography variant="h6">Banner Content</Typography>
        <BannerTitle matches={matches} theme={theme} variant="h2">
          New Bags
        </BannerTitle>

        <BannerDescription matches={matches} theme={theme}>
          You will buy all things in only $1 from anywhere and everywhere
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
