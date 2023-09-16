import { List, ListItem, SxProps, Theme } from "@mui/material";
import NavItem from "@/layout/header/navigation/nav-item";
import { HeaderProps } from "@/layout/header";

interface DesktopNavigationProps {
  routes: HeaderProps["routes"];
}

const DesktopNavigation = (props: DesktopNavigationProps) => {
  const { routes } = props;
  return (
    <List sx={navigationListSx} disablePadding>
      {routes.map((route, index) => {
        route.title = route.title.toUpperCase();
        return (
          <ListItem
            key={`${route.title}-${index}`}
            disablePadding
            disableGutters
            sx={{
              height: "inherit",
              borderRight: (theme) =>
                `1px solid ${theme.palette.common.white} `,
            }}
          >
            <NavItem
              data={route}
              disableRipple={false}
              sx={{
                fontSize: () => ({
                  xs: 18,
                  lg: 14,
                }),
              }}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default DesktopNavigation;

const navigationListSx: SxProps<Theme> = (theme) => {
  return {
    display: "flex",
    height: "inherit",
    overflow: "hidden",
    border: `1px solid ${theme.palette.common.white}`,
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  };
};
