import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
  BannerImage,
  BannerShopButton,
} from "../../styles/banner";

export default function Banner() {
  const theme: any = useTheme();
  const matches: any = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer matches={matches} theme={theme}>
      <BannerImage src="/images/banner/decoration_banner.png" />

      <BannerContent>
        <Typography variant="h6">Banner Content</Typography>
        <BannerTitle matches={matches} theme={theme} variant="h2">
          New Bags
        </BannerTitle>

        <BannerDescription matches={matches} theme={theme}>
          You will buy all things in only $1 from anywhere and everywhere
        </BannerDescription>
        <BannerShopButton color="primary" theme={theme}>
          Shop Now
        </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
