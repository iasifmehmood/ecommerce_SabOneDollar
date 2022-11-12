import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material";
import Actions from "./actions";
import SearchIcon from "@mui/icons-material/Search";

export default function AppbarDesktop({ matches }: { matches: any }) {
  // https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type

  return (
    <AppbarContainer>
      <AppbarHeader>Sab One Dollar</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home"></ListItemText>
        <ListItemText primary="Categories"></ListItemText>
        <ListItemText primary="Products"></ListItemText>
        <ListItemText primary="Contact Us"></ListItemText>
        <ListItemButton>
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
