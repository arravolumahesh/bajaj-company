import { sxArrayUtil } from "@util/sx-helpers";
import { CloseRounded, SearchRounded } from "@mui/icons-material";
import {
  alpha,
  Button,
  Drawer,
  IconButton,
  IconButtonProps,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export interface SearchDrawerTogglerProps
  extends Omit<IconButtonProps, "children"> {}

const SearchDrawerToggler = (props: SearchDrawerTogglerProps) => {
  const { sx, ...restIconButtonProps } = props;
  const [isDrawer, setIsDrawer] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
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
          sx: (theme) => ({
            mt: "120px",
            background: alpha(theme.palette.common.white, 0.96),
          }),
        }}
      >
        <TextField
          variant={"standard"}
          fullWidth
          placeholder={"Search for initiatives, companies, and more"}
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position={"start"}
                sx={{
                  mr: 2,
                }}
              >
                <SearchRounded
                  sx={{
                    color: "grey.600",
                  }}
                />
              </InputAdornment>
            ),
            ...(searchKeyword.length > 0 && {
              endAdornment: (
                <InputAdornment
                  position={"end"}
                  onClick={() => {
                    setSearchKeyword("");
                  }}
                >
                  <IconButton>
                    <CloseRounded
                      sx={{
                        color: "grey.600",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }),
          }}
          sx={{
            px: 7.25,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 80,
            bgcolor: "common.white",
            fontSize: "24px",
          }}
        />
        <Stack
          direction={"row"}
          sx={{
            height: 92,
            py: 3,
            px: 8,
            alignItems: "center",
            justifyContent: "flex-start",
            color: "grey.600",
          }}
          spacing={2}
        >
          <Typography variant={"body2"} color={"inherit"}>
            Suggestions
          </Typography>
          <Stack direction={"row"} spacing={1}>
            {suggestions.map((item, index) => {
              return (
                <Button
                  key={`${item}-${index}`}
                  variant={"outlined"}
                  onClick={() => {
                    setSearchKeyword(item);
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};

export default SearchDrawerToggler;

const suggestions = [
  "Sustainability",
  "History of Bajaj",
  "Awards",
  "Get Involved",
  "Reports",
];
