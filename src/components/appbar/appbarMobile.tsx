import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./actions";
import SearchIcon from "@mui/icons-material/Search";

export default function AppbarMobile({ matches }: { matches: any }) {
  // https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign="center" variant="h4">
        Sab One Dollar
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
