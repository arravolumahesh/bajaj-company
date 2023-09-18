import { sxArrayUtil } from "@util/sx-helpers";
import { CloseRounded, SearchRounded } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  IconButtonProps,
  Typography,
} from "@mui/material";
import { useState } from "react";

export interface SearchDrawerTogglerProps
  extends Omit<IconButtonProps, "children"> {}

const SearchDrawerToggler = (props: SearchDrawerTogglerProps) => {
  const { sx, ...restIconButtonProps } = props;
  const [isDrawer, setIsDrawer] = useState(true);
  return (
    <>
      <IconButton
        sx={[...sxArrayUtil(sx)]}
        onClick={() => {
          setIsDrawer((prev) => !prev);
        }}
        {...restIconButtonProps}
      >
        {isDrawer ? <CloseRounded /> : <SearchRounded />}
      </IconButton>
      <Drawer
        open={isDrawer}
        variant={"temporary"}
        onClose={() => {
          setIsDrawer(false);
        }}
        anchor={"top"}
        PaperProps={{
          sx: {
            mt: "120px",
          },
        }}
      >
        <Box>
          <Typography variant={"h1"}>Search</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default SearchDrawerToggler;
