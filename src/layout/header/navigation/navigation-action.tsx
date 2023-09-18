import { alpha, IconButton, Stack, SxProps, Theme } from "@mui/material";
import { MenuRounded, SearchRounded } from "@mui/icons-material";
import LanguageToggleButton from "@/layout/header/navigation/language-toggle-button";

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
      <IconButton sx={navigationActionBtnSx}>
        <SearchRounded />
      </IconButton>
      <IconButton sx={navigationActionBtnSx}>
        <MenuRounded />
      </IconButton>
      <LanguageToggleButton />
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
