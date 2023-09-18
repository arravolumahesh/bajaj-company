"use client";
import { AppBar, SxProps, Theme } from "@mui/material";
import Logo from "@cc/logo";
import SectionWrapper from "@cc/section-wrapper";
import Navigation from "@/layout/header/navigation";
import { MLinkProps } from "@cc/m-link";

export interface HeaderProps {
  routes: {
    title: string;
    href?: MLinkProps["href"];
    children?: HeaderProps["routes"][number][];
  }[];
}

const Header = (props: HeaderProps) => {
  const { routes } = props;
  return (
    <AppBar sx={appbarSx} elevation={0} position={"relative"}>
      <SectionWrapper direction={"row"} alignItems={"center"}>
        <Logo />
        <Navigation
          sx={{
            ml: "auto",
          }}
          routes={routes}
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
