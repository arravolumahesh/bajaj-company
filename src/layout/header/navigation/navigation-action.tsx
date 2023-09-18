import { alpha, Stack, SxProps, Theme } from "@mui/material";
import LanguageToggleButton from "@/layout/header/navigation/language-toggle-button";
import SearchDrawerToggler from "@/layout/header/navigation/search-drawer";
import { HeaderProps } from "@/layout/header";
import NavigationDrawer from "@/layout/header/navigation/navigation-drawer";

export interface NavigationActionsProps {
  routes: HeaderProps["routes"];
}

const NavigationActions = (props: NavigationActionsProps) => {
  const { routes } = props;
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={{
        xs: 3,
        lg: 2,
      }}
      height={"inherit"}
    >
      <SearchDrawerToggler sx={navigationActionBtnSx} />
      <NavigationDrawer routes={routes} sx={navigationActionBtnSx} />
      <LanguageToggleButton
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
        }}
      />
    </Stack>
  );
};

export default NavigationActions;

const navigationActionBtnSx: SxProps<Theme> = (theme) => {
  return {
    color: "inherit",
    border: "1px solid",
    borderColor: alpha(theme.palette.primary.contrastText, 0.3),
    p: 0.375,
  };
};
