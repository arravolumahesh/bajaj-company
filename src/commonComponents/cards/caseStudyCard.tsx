"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import MLink from "../m-link";

type CaseStudyCardProps = {
  data: {
    img?: string;
    header?: string;
    title: string;
    description: string;
    link: string;
  };
};

const data = {
  img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  header: "IPH-Triveni Program",
  title: "Digital Skilling for Youth",
  description:
    "Helping students learn digitally in order to keep their future and employment ready.",
  link: "#",
};

export const CaseStudyCard = (props: CaseStudyCardProps) => {
    return (
      <Card
        sx={{
          // display: "flex",
          width: "416px",
          height: "480px",
          position: "relative",
          // background: `url(${data.img})`,
          // backgroundSize: "cover",
        }}
      >
        {/* <Image src={data.img} alt='' fill /> */}
        <CardMedia image={data.img} sx={{ height: "100%" }} />
        <CardContent
          sx={{
            //   alignSelf: "flex-end",
            position: "absolute",
            bottom: 0,
          }}
        >
          <Typography color="#FFFFFFCC" variant="subtitle1">
            {data.header}
          </Typography>
          <Divider sx={{ bgcolor: "white", my: 2 }} />
          <Typography color="white" variant="h4">
            {data.title}
          </Typography>
          {data.description && (
            <Typography color="#FFFFFFB2" my={1} variant={"subtitle2"}>
              {data.description}
            </Typography>
          )}
          {data.link && <MLink href={data.link}>View Case Study</MLink>}
        </CardContent>
      </Card>
    );
};
