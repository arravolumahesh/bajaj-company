"use client";
import { Box, Card, Typography } from "@mui/material";
import { MotionProps, motion } from "framer-motion";
import Image from "next/image";
import MLink from "./m-link";
import { ComponentProps } from "react";

export const MotionImage = motion(Image);
export const MotionTypography = motion(Typography);
export const MotionButton = motion(MLink);
export const MotionBox = motion(Box);
export const MotionCard = motion(Card);

export type MotionImageProps = ComponentProps<typeof MotionImage>;
export type MotionTypographyProps = ComponentProps<typeof MotionTypography>;
export type MotionButtonProps = ComponentProps<typeof MotionButton>;
export type MotionBoxProps = ComponentProps<typeof MotionBox>;
export type MotionVariantProps = MotionProps["variants"];
export type MotionCardProps = ComponentProps<typeof MotionCard>;
