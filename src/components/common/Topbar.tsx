import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import BasicMenu from "./Menu";

const Topbar = () => {
  return (
    <AppBar 
      position="fixed"
      sx={{
        textAlign: "right",
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      <BasicMenu/>
    </AppBar>
  );
};

export default Topbar;