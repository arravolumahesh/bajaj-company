"use client";
import AnimatedButton from "@/commonComponents/animated-button";
import { Box, Slide, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect, useRef, ComponentProps } from "react";
import BajajLogo from "./images/Graphics.svg";
import Banner from "./images/Group 427321830.svg";
import { MotionProps, motion } from "framer-motion";

const HeroSection = () => {
  const [logoAnimate, setLogoAnimate] = useState(false);
  useEffect(() => {
    setLogoAnimate(true);
  }, []);

  return (
    <Stack
      sx={{
        background: "radial-gradient(circle,  #326ccf 0%,  #0C1220 97%)", //radial-gradient(circle, rgba(50,108,207,1) 0%, rgba(48,103,197,1) 10%, rgba(12,18,32,1) 100%)
      }}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={"center"}
        width={{ xs: "87.7%", md: "80%", lg_xl: "76%" }}
        sx={{
          m: "30px auto 67px",
        }}
      >
        <Stack
          component={motion.div}
          variants={staggerDiv}
          initial={"initial"}
          animate={"animate"}
        >
          <MotionTypography
            variant='h1'
            color={"#fff"}
            sx={{ fontWeight: 400, mb: 2 }}
            variants={staggerChildren}
          >
            TURNING POTENTIAL TO PROGRESS
          </MotionTypography>
          <MotionTypography
            variant='body1'
            color={"#fff"}
            variants={staggerChildren}
          >
            The wheels of a self-reliant future are turning with equal
            opportunities for all.
          </MotionTypography>
          <AnimatedButton
            sx={{
              mt: 4,
              width: { xs: "100%", md: "207px" },
              bgcolor: "rgba(255, 255, 255, 0.10)",
              fontSize: { xs: "18px", md: "24px !important" },
            }}
            href={"./"}
            variants={staggerChildren}
          >
            View Initiatives
          </AnimatedButton>
        </Stack>
        <Stack
          direction='row'
          alignItems={"center"}
          justifyContent={"center"}
          width={{ xs: 1, md: 354, lg: 528, large: 651 }}
        >
          <Slide
            direction='right'
            in={logoAnimate}
            timeout={500}
            easing={{ enter: "cubic-bezier(.13,.47,.02,1)" }}
          >
            <Box
              sx={{
                position: "relative",
                mr: { xs: "-90px", lg: "-167px", large: "-230px" },
                zIndex: 1,
                width: { xs: 111, md: 117, lg: 221, large: 320 },
                height: { xs: 350, md: 350, lg: 600, large: 700 },
              }}
            >
              <Image src={BajajLogo} alt='Bajaj Beyond Logo' fill />
            </Box>
          </Slide>
          <Box
            sx={{
              position: "relative",
              width: { xs: 255, md: 255, lg: 475, large: 560 },
              height: { xs: 277, md: 300, lg: 543, large: 635 },
              overflow: "hidden",
              // clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 74% 100%, 0% 100%)",
              clipPath:
                "polygon(75% 0%, 100% 50%, 74% 100%, 0% 100%, 25% 50%, 0 0)",
            }}
          >
            <MotionImage
              src={Banner}
              alt='Video Banner'
              {...imageTransition}
              fill
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;

const MotionImage = motion(Image);

const MotionTypography = motion(Typography);

const imageTransition: Omit<
  ComponentProps<typeof MotionImage>,
  "src" | "alt"
> = {
  style: {
    transform: "translateX(-100%)",
  },
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const staggerDiv: MotionProps["variants"] = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1,
    },
  },
};
const staggerChildren: MotionProps["variants"] = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
