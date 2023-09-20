import { MotionTypography } from "@/commonComponents/motion-elements";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import React from "react";

const Impact = () => {
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "primary.main",
      }}
      py={{ xs: 7, md: 12 }}
    >
      <Stack>
        <MotionTypography
          variant='h1'
          component='h3'
          color={"white"}
          fontWeight={400}
        >
          DRIVING A LASTING IMPACT
        </MotionTypography>
        <MotionTypography color={"white"}>
          These are not mere numbers. They’re a testament to our relentless
          dedication towards making a tangible impact in communities across the
          nation.
        </MotionTypography>
      </Stack>
    </SectionWrapper>
  );
};

export default Impact;
