"use client";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import MLink from "./m-link";
import { ComponentProps } from "react";

export const MotionImage = motion(Image);
export type MotionImageProps = ComponentProps<typeof MotionImage>;
export const MotionTypography = motion(Typography);
export type MotionTypographyProps = ComponentProps<typeof MotionTypography>;
export const MotionButton = motion(MLink);
export type MotionButtonProps = ComponentProps<typeof MotionButton>;
export const MotionBox = motion(Box);
export type MotionBoxProps = ComponentProps<typeof MotionBox>;

export const MotionGrid = motion(Grid);
export type MotionGridProps = ComponentProps<typeof MotionGrid>;
