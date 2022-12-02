import { MyList } from "../../styles/appbar";
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart";
import { ListItemButton, ListItemIcon, Divider } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
} from "../../styles/appbar";
import { Colors } from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/ui";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";

export default function Actions({ matches }: { matches: any }) {
  const { setShowSearchBox } = useUIContext();
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <ListItemButton>
          <ListItemIcon sx={{ justifyContent: "center" }} title="Search items">
            <SearchIcon onClick={() => setShowSearchBox(true)} />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
            title="Open Cart"
          >
            <ShoppingCardIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
            title="Order tracking"
          >
            <TroubleshootIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}
