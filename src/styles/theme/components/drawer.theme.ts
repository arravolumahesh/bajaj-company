import {Components, Theme} from "@mui/material";

/**
 * @DrawerVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Drawer component
 *
 * @see https://mui.com/material-ui/react-drawer/#customization
 */
export const DialogVariants: Components<
  Omit<Theme, "components">
>["MuiDrawer"] = {};
