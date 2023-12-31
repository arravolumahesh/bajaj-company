import { CardContent, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { EnhancedSwiperSlideData } from "@cc/enhanced-swiper";
import { MotionCard, MotionCardProps } from "@cc/motion-elements";

interface SmallTitleCardProps extends Omit<MotionCardProps, "children"> {
  img: string;
  title: string;
}

export const SmallTitleCard: EnhancedSwiperSlideData<SmallTitleCardProps> =
  forwardRef((props, ref) => {
    const {
      img,
      title,
      sx,
      index,
      isPrev,
      isActive,
      isVisible,
      isNext,
      ...restProps
    } = props;
    return (
      <MotionCard
        ref={ref}
        sx={{
          display: "flex",
          position: "relative",
          width: { xs: 200, lg: 328 },
          height: { xs: 200, lg: 316 },
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
          <Typography variant="h5" fontWeight={400} color={"white"}>
            {title}
          </Typography>
        </CardContent>
      </MotionCard>
    );
  });

SmallTitleCard.displayName = SmallTitleCard.name;
