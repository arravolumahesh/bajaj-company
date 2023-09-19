import {
  Card,
  CardContent,
  CardProps,
  SxProps,
  Typography,
} from "@mui/material";
import React from "react";

type SmallTitleCardProps = {
  data: {
    img: string;
    title: string;
  };
  sx?: SxProps;
  restProps?: CardProps;
};

export const SmallTitleCard = (props: SmallTitleCardProps) => {
  const { sx, ...restProps } = props;
  const { img, title } = props.data;
  return (
    <Card
      sx={{
        display: "flex",
        position: "relative",
        width: 328,
        height: 316,
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 34.18%), url(${img}), lightgray -133.577px -1.973px / 181.45% 101.249% no-repeat`,
        backgroundSize: "cover",
        borderRadius: 0,
        ...sx,
      }}
      {...restProps}
    >
      <CardContent
        sx={{
          alignSelf: "flex-end",
          pb: "16px !important",
        }}
      >
        <Typography variant='h5' fontWeight={400} color={"white"}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
