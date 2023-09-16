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
        direction='row'
        alignItems={"center"}
        width={"76%"}
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
              width: "207px",
              bgcolor: "rgba(255, 255, 255, 0.10)",
              fontSize: "24px !important",
            }}
            href={"./"}
            variants={staggerChildren}
          >
            View Initiatives
          </AnimatedButton>
        </Stack>
        <Stack direction='row' alignItems={"center"} minWidth={528}>
          <Slide
            direction='right'
            in={logoAnimate}
            timeout={500}
            easing={{ enter: "cubic-bezier(.13,.47,.02,1)" }}
          >
            <Image
              src={BajajLogo}
              alt='Bajaj Beyond Logo'
              height={600}
              style={{ marginRight: "-167px", zIndex: 1 }}
            />
          </Slide>
          <Box
            sx={{
              width: 500,
              height: 542,
              overflow: "hidden",
              // clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 74% 100%, 0% 100%)",
              clipPath:
                "polygon(75% 0%, 100% 50%, 74% 100%, 0% 100%, 25% 50%, 0 0)",
            }}
          >
            <MotionImage
              src={Banner}
              alt='Video Banner'
              height={543}
              {...imageTransition}
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
