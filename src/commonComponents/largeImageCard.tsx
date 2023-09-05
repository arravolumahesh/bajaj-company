"use client";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

type LargeImageCardProps = {
  data: {
    img?: string;
    title: string;
    description: string;
  };
};

const data = {
  img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  title: "Announcing Jamnalal Bajaj Awards 2023",
  description:
    "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
};

export const LargeImageCard = (props: LargeImageCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "1208px",
        height: "609px",
        background: `url(${data.img})`,
        backgroundSize: "cover",
      }}
    >
      {/* <Image src={data.img} alt='' fill /> */}
      <CardContent
        sx={{
          width: "463px",
          height: "208px",
          bgcolor: "#FFFFFFD9",
          alignItems: "center",
          alignSelf: "flex-end",
        }}
      >
        <Typography variant='h4'>{data.title}</Typography>
        <Typography mt={2} variant={"subtitle1"}>
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
