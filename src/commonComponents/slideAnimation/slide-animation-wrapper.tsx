import { Box, Stack } from "@mui/material";
import React from "react";
import Arrow from "./Group 427321826.svg";
import { MotionImage, MotionTypography } from "../motion-elements";
import AnimatedButton from "../animated-button";

type SlideAnimationWrapper = {
  children: any;
};

const SlideAnimationWrapper = (props: SlideAnimationWrapper) => {
  const { children } = props;
  return (
    <>
      <Stack
        direction='row'
        alignItems={"center"}
        //   justifyContent={"center"}
        //   width={{ xs: 1, md: 354, lg: 528, large: 651 }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: 255, md: 255, lg: 644, large: 644 },
            height: { xs: 277, md: 300, lg: 443, large: 443 },
            clipPath: "polygon(0% 0%, 84% 0%, 100% 50%, 84% 100%, 0% 100%)",
          }}
        >
          {children}
        </Box>
        <Box
          sx={{
            position: "relative",
            ml: { xs: "-80px", lg: "-85px" },
            width: { xs: 111, md: 117, lg: 171, large: 171 },
            height: { xs: 350, md: 350, lg: 443, large: 443 },
          }}
        >
          <MotionImage src={Arrow} alt='Bajaj Beyond Logo' fill />
        </Box>
      </Stack>
      <Stack maxWidth={448} rowGap={3}>
        <MotionTypography variant='h3' fontWeight={400} color={"primary.dark"}>
          SKILL DEVELOPEMENT
        </MotionTypography>
        <MotionTypography variant='body1' color='primary.dark'>
          Providing skill-based education through various programs to strengthen
          the foundation of a progressive nation.
        </MotionTypography>
        <AnimatedButton
          variant='outlined'
          href={"/"}
          color='primary'
          sx={{
            width: { xs: "100%", md: "171px" },
            fontSize: { xs: "18px", md: "24px !important" },
            borderColor: "primary.dark",
          }}
        >
          Learn More
        </AnimatedButton>
      </Stack>
    </>
  );
};

export default SlideAnimationWrapper;
