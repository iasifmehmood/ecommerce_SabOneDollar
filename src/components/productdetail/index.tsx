import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {
  ProductDetailInfoWrapper,
  ProductDetailWrapper,
} from "../../styles/productdetail";
import { Product, ProductImage } from "../../styles/Products";

function SlideTransition(props: any) {
  return <Slide direction="down" {...props} />;
}

export default function ProductDetail({
  open,
  onClose,
  product,
}: {
  open: any;
  onClose: any;
  product: any;
}) {
  const theme: any = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      TransitionComponent={SlideTransition}
      //variant="permanant"
      open={open}
      fullScreen
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
          Product title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper
          display={"flex"}
          flexDirection={matches ? "column" : "row"}
        >
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle1">SKU: 123</Typography>
            <Typography variant="subtitle1">
              Availability: 5 in stock
            </Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.name}
            </Typography>
            <Typography variant="body1">
              {product.description}
              {product.description}
              {product.description}
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* <IncDec /> */}
              <Button variant="contained">Add to Cart</Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ mt: 4, color: Colors.light }}
            >
              <FavoriteIcon sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box
              sx={{
                mt: 4,
                color: Colors.dove_gray,
              }}
            >
              <FacebookIcon />
              <TwitterIcon sx={{ pl: 2 }} />
              <InstagramIcon sx={{ pl: 2 }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
