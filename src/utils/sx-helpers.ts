import { SxProps, Theme } from "@mui/material";

export const sxArrayUtil = (arr: SxProps<Theme> | undefined) => {
  return Array.isArray(arr) ? arr : [arr];
};
