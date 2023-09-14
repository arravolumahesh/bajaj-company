"use client";
import { AppBar, SxProps, Theme } from "@mui/material";
import Logo from "@cc/Logo";
import SectionWrapper from "@cc/section-wrapper";

const Header = () => {
  return (
    <AppBar sx={appbarSx} elevation={0}>
      <SectionWrapper>
        <Logo />
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
