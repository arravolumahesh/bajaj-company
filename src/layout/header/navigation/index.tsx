import { Stack, StackProps, SxProps, Theme } from "@mui/material";
import { sxArrayUtil } from "@util/sx-helpers";
import { HeaderProps } from "@/layout/header";
import DesktopNavigation from "@/layout/header/navigation/desktop-navigation";
import NavigationActions from "@/layout/header/navigation/navigation-action";

interface NavigationProps extends Omit<StackProps, "children"> {
  routes?: HeaderProps["routes"];
}

const Navigation = (props: NavigationProps) => {
  const { routes, sx, ...restStackProps } = props;
  return (
    <Stack sx={[navigationStackSx, ...sxArrayUtil(sx)]} {...restStackProps}>
      {routes && (
        <>
          <DesktopNavigation routes={routes} />
          <NavigationActions routes={routes} />
        </>
      )}
    </Stack>
  );
};

export default Navigation;

const navigationStackSx: SxProps<Theme> = () => {
  return {
    ml: "auto",
    height: 32,
    columnGap: 5,
    flexDirection: "row",
    alignItems: "center",
  };
};
