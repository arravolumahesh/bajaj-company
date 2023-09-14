"use client";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export type LogoCardProps = {
  data: {
    img: string;
  };
};

const data = {
  img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
};

export const LogoCard = (props: LogoCardProps) => {
  return (
    <Card
      sx={{
        height: "113px",
        background: `url(${data.img})`,
        backgroundSize: "cover",
      }}
    ></Card>
  );
};
