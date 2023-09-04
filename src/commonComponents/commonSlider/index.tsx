import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Button, Stack, Typography } from "@mui/material";
import SpotlightSliderData from "./spotlightSliderData";

const CommonSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {SpotlightSliderData.map((item, idx) => {
        const { achivment, title, date, subtitle, button } = item;
          return (
            <SwiperSlide key={idx}>
              <Stack direction={"row"}>
                <Box>
                  <Typography>{achivment}</Typography>
                  <Typography>{title}</Typography>
                  <Typography>{date}</Typography>
                  <Typography>{subtitle}</Typography>
                  <Button>{button}</Button>
                </Box>
                <Box>Image</Box>
              </Stack>
            </SwiperSlide>
          );
      })}
    </Swiper>
  );
};
export default CommonSlider;
