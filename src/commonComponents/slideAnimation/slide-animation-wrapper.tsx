import { Box, Stack, SxProps } from "@mui/material";
import React from "react";
import Arrow from "./Group 427321826.svg";
import {
  MotionBox,
  MotionBoxProps,
  MotionImage,
  MotionImageProps,
  MotionTypography,
  MotionTypographyProps,
} from "../motion-elements";
import AnimatedButton from "../animated-button";
import { MotionProps, motion } from "framer-motion";

type SlideAnimationWrapper = {
  prefix?: string;
  title: string;
  subtitle: string;
  btnText?: string;
  textColor: string;
  titleTypographyprops?: MotionTypographyProps;
  btnProps?: SxProps;
  children: any;
};

const SlideAnimationWrapper = (props: SlideAnimationWrapper) => {
  const {
    prefix,
    title,
    subtitle,
    btnText,
    textColor,
    titleTypographyprops,
    btnProps,
    children,
  } = props;
  return (
    <>
      <Stack
        direction='row'
        alignItems={"center"}
        //   justifyContent={"center"}
        //   width={{ xs: 1, md: 354, lg: 528, large: 651 }}
      >
        <MotionBox
          sx={{
            position: "relative",
            width: { xs: 255, md: 255, lg: 644, large: 644 },
            height: { xs: 277, md: 300, lg: 443, large: 443 },
            clipPath: "polygon(0% 0%, 84% 0%, 100% 50%, 84% 100%, 0% 100%)",
          }}
          {...boxTransition}
        >
          {children}
        </MotionBox>
        <Box
          sx={{
            position: "relative",
            ml: { xs: "-80px", lg: "-85px" },
            width: { xs: 111, md: 117, lg: 171, large: 171 },
            height: { xs: 350, md: 350, lg: 443, large: 443 },
          }}
        >
          <MotionImage
            src={Arrow}
            alt='Bajaj Beyond Logo'
            fill
            {...imageTransition}
          />
        </Box>
      </Stack>
      <Stack
        component={motion.div}
        variants={staggerDiv}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        maxWidth={448}
        rowGap={3}
      >
        {prefix && (
          <MotionTypography
            variant='body1'
            color={textColor}
            variants={staggerChildren}
          >
            {prefix}
          </MotionTypography>
        )}
        <MotionTypography
          variant='h3'
          fontWeight={400}
          color={textColor}
          variants={staggerChildren}
          {...titleTypographyprops}
        >
          {title}
        </MotionTypography>
        <MotionTypography
          variant='body1'
          color={textColor}
          variants={staggerChildren}
        >
          {subtitle}
        </MotionTypography>
        <AnimatedButton
          variant='outlined'
          href={"/"}
          color='primary'
          sx={{
            width: { xs: "100%", md: "171px" },
            fontSize: { xs: "18px", md: "24px !important" },
            ...btnProps,
          }}
          variants={staggerChildren}
        >
          {btnText ? btnText : "Learn More"}
        </AnimatedButton>
      </Stack>
    </>
  );
};

export default SlideAnimationWrapper;

const boxTransition: MotionBoxProps = {
  initial: {
    x: "-111%",
  },
  whileInView: {
    x: 0,
  },
  transition: {
    duration: 0.8,
    delay: 0.2,
    ease: "easeOut",
  },
  viewport: {
    once: true,
  },
  // onTransitionEnd: () => setTextTransition(true),
};
const imageTransition: Omit<MotionImageProps, "src" | "alt"> = {
  initial: {
    x: "-460%",
  },
  whileInView: {
    x: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
  viewport: {
    once: true,
  },
  // onTransitionEnd: () => setTextTransition(true),
};

const staggerDiv: MotionProps["variants"] = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.6,
    },
  },
};
const staggerChildren: MotionProps["variants"] = {
  initial: {
    opacity: 0,
    x: "30%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};
