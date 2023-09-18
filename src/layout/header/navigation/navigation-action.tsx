import { alpha, IconButton, Stack, SxProps, Theme } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import LanguageToggleButton from "@/layout/header/navigation/language-toggle-button";
import { sxArrayUtil } from "@util/sx-helpers";
import SearchDrawerToggler from "@/layout/header/navigation/search-drawer";

const NavigationActions = () => {
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
      <IconButton
        sx={[
          ...sxArrayUtil(navigationActionBtnSx),
          {
            display: {
              lg: "none",
            },
          },
        ]}
      >
        <MenuRounded />
      </IconButton>
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
