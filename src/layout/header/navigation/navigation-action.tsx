import { alpha, Stack, SxProps, Theme, useMediaQuery } from "@mui/material";
import LanguageToggleButton from "@/layout/header/navigation/language-toggle-button";
import SearchDrawerToggler from "@/layout/header/navigation/search-drawer";
import { HeaderProps } from "@/layout/header";
import NavigationDrawer from "@/layout/header/navigation/navigation-drawer";
import { useState } from "react";
import { sxArrayUtil } from "@util/sx-helpers";

export interface NavigationActionsProps {
  routes: HeaderProps["routes"];
}

const NavigationActions = (props: NavigationActionsProps) => {
  const { routes } = props;
  const [isNavDrawer, setNavDrawer] = useState(false);
  const isXl = useMediaQuery<Theme>((theme) => theme.breakpoints.up("xl"));
  const isSm = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={{
        xs: 3,
        sm: 2,
      }}
      height={"inherit"}
    >
      <SearchDrawerToggler
        sx={[
          ...sxArrayUtil(navigationActionBtnSx),
          {
            display: {
              xs: isNavDrawer ? "none" : "flex",
              sm: "flex",
            },
          },
        ]}
      />
      <LanguageToggleButton
        sx={{
          display: {
            xs: isNavDrawer ? "flex" : "none",
            sm: "flex",
          },
        }}
      />
      <NavigationDrawer
        routes={routes}
        sx={[
          ...sxArrayUtil(navigationActionBtnSx),
          {
            display: {
              xs: "flex",
              xl: "none",
            },
          },
        ]}
        onToggle={setNavDrawer}
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
