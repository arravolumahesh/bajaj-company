"use client";
import {
  alpha,
  Button,
  ButtonProps,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
  MenuProps,
  Theme,
} from "@mui/material";
import MLink, { MLinkProps } from "@cc/m-link";
import { MouseEvent, useCallback, useMemo, useState } from "react";
import {
  ArrowRightRounded,
  ExpandMoreRounded,
  NavigateNextRounded,
} from "@mui/icons-material";
import { sxArrayUtil } from "@util/sx-helpers";

export interface NavItemProps extends Omit<ButtonProps, "children"> {
  data: {
    title: string;
    href?: MLinkProps["href"];
    children?: NavItemProps["data"][];
  };
  MLinkProps?: Omit<MLinkProps, "href" | "children">;
}

const NavItem = (props: NavItemProps) => {
  const { data, MLinkProps, sx, ...restButtonProps } = props;
  const { title, href, children } = data;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const itemProps: Omit<ButtonProps & MLinkProps, "href"> = useMemo(() => {
    return {
      onClick: handleClick,
      children: title,
      sx: [
        (theme: Theme) => ({
          color: alpha(theme.palette.primary.contrastText, 0.8),
          borderRadius: 0,
          borderColor: alpha(theme.palette.primary.contrastText, 0.3),
          background: anchorEl ? theme.palette.background.paper : "transparent",
          "&:hover": {
            background: alpha(theme.palette.background.paper, 0.5),
          },
        }),
        ...sxArrayUtil(sx),
      ],
    };
  }, [handleClick, anchorEl, sx, title]);

  return (
    <>
      {href && !children ? (
        <MLink href={href} {...itemProps} {...MLinkProps} />
      ) : (
        <Button
          {...itemProps}
          endIcon={<ExpandMoreRounded />}
          {...restButtonProps}
        />
      )}
      {children && children.length > 0 && (
        <Menu
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClick={handleClose}
          onClose={handleClose}
          slotProps={{
            paper: menuPaperProps,
          }}
          MenuListProps={{
            sx: {
              py: 1.5,
            },
          }}
          BackdropProps={{
            sx: {
              backdropFilter: "blur(0px)",
              background: "transparent",
            },
          }}
        >
          {children.map((child, index) => {
            const { title } = child;
            return (
              <MenuItem
                key={`${title}-${index}`}
                onClick={handleClose}
                sx={{
                  px: 4,
                  py: 1.5,
                }}
              >
                <NavItem
                  data={child}
                  endIcon={<ArrowRightRounded />}
                  MLinkProps={{
                    disableRipple: true,
                    variant: "text",
                  }}
                />
                <ListItemSecondaryAction>
                  <NavigateNextRounded
                    sx={{
                      color: "primary.contrastText",
                    }}
                  />
                </ListItemSecondaryAction>
              </MenuItem>
            );
          })}
        </Menu>
      )}
    </>
  );
};
export default NavItem;

const menuPaperProps: Required<MenuProps>["slotProps"]["paper"] = {
  elevation: 0,
  sx: {
    width: "260px",
    borderRadius: 0,
    overflow: "visible",
    mt: 2,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};
