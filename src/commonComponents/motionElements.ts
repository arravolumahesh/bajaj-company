"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import MLink from "./m-link";

export const MotionImage = motion(Image);
export const MotionTypography = motion(Typography);
export const MotionButton = motion(MLink);
