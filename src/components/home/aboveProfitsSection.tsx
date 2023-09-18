import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import videoImage from "./images/Frame 111142.png";
import React from "react";
import { MotionTypography } from "@/commonComponents/motionElements";

const AboveProfitsSection = () => {
  return (
    <Stack
      sx={{
        background:
          "linear-gradient(180deg, #0C1425 0%, #162B52 17.68%, #1F3F78 35.36%, #254F98 53.05%, #2B5CB0 70.73%, #2F65C1 89.77%, #316ACB 110.17%, #326CCF 136.02%)",
      }}
      py={12}
    >
      <Stack textAlign={"center"} width={"73.5%"} m={"auto"}>
        <MotionTypography variant='h3' color='white' fontWeight={400}>
          ABOVE PROFITS. BEYOND BOTTOM LINES.
        </MotionTypography>
        <Box position={"relative"} height={513} mt={6} mb={4}>
          <Image src={videoImage} alt='Video Thumbnail' fill />
        </Box>
        <MotionTypography variant='h6' color='white' fontWeight={400}>
          Welcome to Bajaj Beyond, a holistic and integrated platform that
          combines the myriad of Bajaj Inc’s CSR initiatives to create a single
          force of good that goes beyond profits and bottom lines. We’re certain
          that our unwavering commitment towards empowering communities through
          skill development will cement India’s legacy as we walk hand in hand
          towards an equitable future.
        </MotionTypography>
      </Stack>
    </Stack>
  );
};

export default AboveProfitsSection;
