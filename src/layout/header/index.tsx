"use client";
import { AppBar, SxProps, Theme } from "@mui/material";
import Logo from "@cc/logo";
import SectionWrapper from "@cc/section-wrapper";
import Navigation from "@/layout/header/navigation";

const Header = () => {
  return (
    <AppBar sx={appbarSx} elevation={0}>
      <SectionWrapper direction={"row"} alignItems={"center"}>
        <Logo />
        <Navigation
          sx={{
            ml: "auto",
          }}
        />
      </SectionWrapper>
    </AppBar>
  );
};

export default Header;

const appbarSx: SxProps<Theme> = (theme) => {
  return {
    background: theme.palette.gradient.primary,
    color: "primary.contrastText",
  };
};
