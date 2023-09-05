import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const DemoCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "1208px",
        height: "609px",
        bgcolor: "black",
      }}
    >
      <CardContent
        sx={{
          width: "463px",
          height: "208px",
          bgcolor: "white",
          alignItems: "center",
          alignSelf: "flex-end",
        }}
      >
        <Typography variant='h4'>{data.cardTitle}</Typography>
        <Typography mt={2} variant={"subtitle1"}>
          {data.cardDesc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DemoCard;

const data = {
  cardTitle: "Announcing Jamnalal Bajaj Awards 2023",
  cardDesc:
    "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
};
