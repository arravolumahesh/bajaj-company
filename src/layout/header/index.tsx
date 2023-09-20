"use client";
import {
  AppBar,
  AppBarProps,
  Slide,
  SxProps,
  Theme,
  useScrollTrigger,
} from "@mui/material";
import Logo from "@cc/logo";
import SectionWrapper from "@cc/section-wrapper";
import Navigation from "@/layout/header/navigation";
import { MLinkProps } from "@cc/m-link";
import { Property } from "csstype";
import { ResponsiveStyleValue } from "@mui/system";
import { styled } from "@mui/material/styles";

const ReactiveAppBar = styled((props: AppBarProps) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      <AppBar elevation={0} {...props} />
    </Slide>
  );
})(({ theme }) => {
  return theme.unstable_sx(appbarSx);
});

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
    <SectionWrapper
      direction={"row"}
      alignItems={"center"}
      py={0}
      height={"inherit"}
      SectionProps={{
        component: ReactiveAppBar,
      }}
    >
      <Logo
        SvgIconProps={{
          sx: {
            width: { xs: 71, md: 91, xl: 107 },
            height: { xs: 40, md: 52, xl: 64 },
          },
        }}
      />
      <Navigation
        sx={{
          ml: "auto",
        }}
        routes={routes}
      />
    </SectionWrapper>
  );
};

export default Header;

const appbarSx: SxProps<Theme> = (theme) => {
  return {
    background: theme.palette.gradient.primary,
    color: "primary.contrastText",
    height: { xs: 64, md: 92, xl: 120 },
      boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  };
};

export const appbarHeight: ResponsiveStyleValue<Property.Height<string | number>> = {
  xs: "64px",
  md: "92px",
  xl: "120px",
};
