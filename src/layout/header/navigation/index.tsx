import { List, ListItem, ListProps, SxProps, Theme } from "@mui/material";
import NavItem, { NavItemProps } from "@/layout/header/navigation/nav-item";
import { sxArrayUtil } from "@util/sx-helpers";

interface NavigationProps extends Omit<ListProps, "children"> {}

const Navigation = (props: NavigationProps) => {
  const { sx, ...restStackProps } = props;
  return (
    <List
      sx={[navigationListSx, ...sxArrayUtil(sx)]}
      disablePadding
      {...restStackProps}
    >
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
                fontSize: (theme) => ({
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

export default Navigation;

const navigationListSx: SxProps<Theme> = (theme) => {
  return {
    display: "flex",
    height: 32,
    overflow: "hidden",
    border: `1px solid ${theme.palette.common.white}`,
  };
};

const routes: NavItemProps["data"][] = [
  {
    title: "Our Companies",
    children: [
      {
        title: "Bajaj Auto Limited",
        href: "bajaj-auto-limited",
      },
      {
        title: "Bajaj Electricals Limited",
        href: "bajaj-electricals-limited",
      },
      {
        title: "Bajaj Finserv Limited",
        href: "bajaj-finserv-limited",
      },
      {
        title: "Mukand Limited",
        href: "mukand-limited",
      },
    ],
  },
  {
    title: "Charitable Trusts",
    children: [
      {
        title: "Bajaj Auto Limited",
        href: "bajaj-auto-limited",
      },
      {
        title: "Bajaj Electricals Limited",
        href: "bajaj-electricals-limited",
      },
      {
        title: "Bajaj Finserv Limited",
        href: "bajaj-finserv-limited",
      },
      {
        title: "Mukand Limited",
        href: "mukand-limited",
      },
    ],
  },
  {
    title: "About Us",
    href: "about-us",
  },
  {
    title: "News & Media",
    href: "news-media",
  },
  {
    title: "Contact Us",
    href: "contact-us",
  },
];
