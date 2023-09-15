import MLink from "@cc/m-link";
import { Stack } from "@mui/material";
import AnimatedButton from "@cc/animated-button";
import Logo from "@cc/logo";

const HomePage = () => {
  return (
    <Stack p={4} bgcolor={"primary.main"} spacing={4}>
      <MLink href={"/"} variant={"outlined"} color={"inherit"}>
        Home Page
      </MLink>
      <Logo />
      <AnimatedButton href={"./"}>Animated Button</AnimatedButton>
    </Stack>
  );
};

export default HomePage;
