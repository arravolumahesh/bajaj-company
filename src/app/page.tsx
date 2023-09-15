import { Stack } from "@mui/material";
import AnimatedButton from "@cc/animated-button";

const HomePage = () => {
  return (
    <Stack p={4} bgcolor={"primary.main"} spacing={4}>
      <AnimatedButton href={"./"}>Animated Button</AnimatedButton>
    </Stack>
  );
};

export default HomePage;
