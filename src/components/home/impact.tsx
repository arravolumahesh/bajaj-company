import { MotionTypography } from "@/commonComponents/motion-elements";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import line from "./images/Line 1322.svg";

const Impact = () => {
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "primary.main",
      }}
      py={{ xs: 7, md: 12 }}
    >
      <Stack
        maxWidth={{ xs: 1, md: 867 }}
        textAlign='center'
        rowGap={4}
        mx={"auto"}
      >
        <MotionTypography
          variant='h1'
          component='h3'
          color={"white"}
          fontWeight={400}
        >
          DRIVING A LASTING IMPACT
        </MotionTypography>
        <MotionTypography variant='h6' color={"white"} fontWeight={400}>
          These are not mere numbers. They’re a testament to our relentless
          dedication towards making a tangible impact in communities across the
          nation.
        </MotionTypography>
      </Stack>
      <Stack
        direction={"row"}
        width={1232}
        maxWidth={1232}
        mx={"auto"}
        mt={11}
        mb={4}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack alignItems={"center"} rowGap={1}>
          <MotionTypography variant='h2' fontWeight={700} color={"white"}>
            12.4CR
          </MotionTypography>
          <MotionTypography color={"white"}>People Reached</MotionTypography>
        </Stack>
        <Image src={line} alt='' />
        <Stack alignItems={"center"} rowGap={1}>
          <MotionTypography variant='h2' fontWeight={700} color={"white"}>
            57K
          </MotionTypography>
          <MotionTypography color={"white"}>MSMEs Supported</MotionTypography>
        </Stack>
        <Image src={line} alt='' />
        <Stack alignItems={"center"} rowGap={1}>
          <MotionTypography variant='h2' fontWeight={700} color={"white"}>
            100.3K
          </MotionTypography>
          <MotionTypography color={"white"}>Women Empowered</MotionTypography>
        </Stack>
        <Image src={line} alt='' />
        <Stack alignItems={"center"} rowGap={1}>
          <MotionTypography variant='h2' fontWeight={700} color={"white"}>
            93K
          </MotionTypography>
          <MotionTypography color={"white"}>Students Educated</MotionTypography>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default Impact;
