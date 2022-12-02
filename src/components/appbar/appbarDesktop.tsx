import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { ListItemText } from "@mui/material";
import Actions from "./actions";

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
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
