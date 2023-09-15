import AnimatedButton from "@/commonComponents/animated-button";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import BajajLogo from "./images/Graphics.svg";
import Banner from "./images/Group 427321830.svg";

const HeroSection = () => {
  return (
    <Stack
      sx={{
        background: "radial-gradient(circle,  #326ccf 0%,  #0C1220 97%)", //radial-gradient(circle, rgba(50,108,207,1) 0%, rgba(48,103,197,1) 10%, rgba(12,18,32,1) 100%)
      }}
    >
      <Stack
        direction='row'
        alignItems={"center"}
        width={"76%"}
        sx={{
          m: "30px auto 70px",
        }}
      >
        <Stack>
          <Typography
            variant='h1'
            color={"#fff"}
            sx={{ fontWeight: 400, mb: 2 }}
          >
            TURNING POTENTIAL TO PROGRESS
          </Typography>
          <Typography variant='body1' color={"#fff"}>
            The wheels of a self-reliant future are turning with equal
            opportunities for all.
          </Typography>
          <AnimatedButton
            sx={{
              fontSize: "24px !important",
              mt: 3,
              width: "207px",
            }}
            href={"./"}
          >
            View initiatives
          </AnimatedButton>
        </Stack>
        <Stack direction='row' alignItems={"center"}>
          <Image
            src={BajajLogo}
            alt='Bajaj Beyond Logo'
            height={600}
            style={{ marginRight: "-167px" }}
          />
          <Image src={Banner} alt='Video Banner' height={543} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
