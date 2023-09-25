"use client"
import { MotionTypography } from "@/commonComponents/motion-elements";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Image from "next/image";
import React,{useState,useEffect} from "react";
import { randomFillSync } from "crypto";
import { Translate } from "@mui/icons-material";

const CsrReport = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const [selectedReport, setSelectedReport] = useState('');

  const handleChangeReport = (event) => {
    setSelectedReport(event.target.value);
  }; 


  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 556) {
        setScreenSize("mobile");
      } else if (width <= 996) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };


    window.addEventListener("resize", handleResize);

    
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return(
    <SectionWrapper SectionProps={{
      bgcolor: "main.primary",
    }}
      py={{ xs: 7, md: 12 }}
      overflow={"hidden"}
    >
      <Stack 
        direction={screenSize==="mobile" ? "column" : "row"}
        justifyContent={screenSize==="mobile" ? "center" : "center"}
        alignItems={screenSize==="mobile" ? "center" : "center"}
        gap={screenSize==="mobile" ? "10px" : screenSize==="tablet" ? "60px" : screenSize==="desktop" ? "185px" : ""}
      >
         <div style={{ 
        position: 'relative', 
        height: '150px', 
        width:"50px",
      }}>
        <Image width={120} height={150}
          src="/image 43695 (2).png" 
          alt=""
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            clipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)', 
            display:screenSize==="mobile" ? "none" : "block",
          }}
        />
        </div>
        <Stack
        direction={"column"}
    >
    <MotionTypography variant="h6"
        sx={{
            display: '-webkit-box',
            width: '578px',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': 1,
            overflow: 'hidden',
            color: 'var(--White, #FFF)',
            textOverflow: 'ellipsis',
            fontFamily: 'Helvetica',
            fontSize: 48,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '128%', 
            textTransform: 'uppercase',
            paddingLeft:screenSize==="mobile" ? "110px" : "",
        }}  
        >Csr Reports</MotionTypography>
        <MotionTypography variant="body1"
        sx={{
            color:"var(--White, #FFF)",
            fontFamily:"Helvetica",
            fontSize:18,
            fontStyle:"normal",
            fontWeight:"400px",
            lineHeightStep:"128%",
            paddingTop:"20px",
            paddingLeft:screenSize==="mobile" ? "110px" : "",
        }}  
        >We are always looking forward to support you</MotionTypography> 
        <Stack gap={"10"} 
        direction={screenSize==="mobile" ? "column" : "row"} 
        marginLeft={screenSize==="mobile" ? "100px" : ""}
    >
    <div style={{
        display: "flex",
        width: "300px",
        height:"50px",
        padding: "16px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "6px",
        border: "1px solid var(--White, #FFF)",
        marginTop:"20px",
        marginRight:"10px"
    }}>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            fontFamily: "Helvetica",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400px",
            lineHeight: "200%",
            letterSpacing: "0.16px",
            backgroundColor:"var(--gradient-light-dark, linear-gradient(0deg, #0F182A 35.16%, #244A8F 100%))",
            opacity:1,
        }}
      >
        <option style={{
          fontFamily: "Helvetica",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400px",
          lineHeight: "150%",
          letterSpacing: "0.16px"
        }} value="">Select A Year</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
      <p style={{
        fontFamily: "Helvetica",
        color:" var(--White, #FFF)",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400px",
        lineHeight: "150%",
        letterSpacing: "0.16px",
        paddingTop:"20px"
      }}>Selected Year: {selectedOption}</p>
    </div>

    <div style={{
        display: "flex",
        width: "300px",
        height:"50px",
        padding: "16px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "6px",
        border: "1px solid var(--White, #FFF)",
        marginLeft:"10px",
        marginTop:screenSize==="mobile" ? "50px" : "20px"
    }}>
      <select
        value={selectedReport}
        onChange={handleChangeReport}
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            fontFamily: "Helvetica",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400px",
            lineHeight: "200%",
            letterSpacing: "0.16px",
            backgroundColor:"var(--gradient-light-dark, linear-gradient(0deg, #0F182A 35.16%, #244A8F 100%))",
            opacity:1,
        }}
      >
        <option style={{
          fontFamily: "Helvetica",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400px",
          lineHeight: "150%",
          letterSpacing: "0.16px"
        }} value="">Select A Report</option>
        <option value="Bajaj finance">Bajaj finance</option>
        <option value="IT Company">IT Company</option>
        <option value="AutoWala">AutoWala</option>
        <option value="Students">Students</option>
      </select>
      <p style={{
        fontFamily: "Helvetica",
        color:" var(--White, #FFF)",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400px",
        lineHeight: "150%",
        letterSpacing: "0.16px",
        paddingTop:"20px"
      }}>Selected Report: {selectedReport}</p>
    </div>
    </Stack>
    <Button style={{
    display: "flex",
    height: "48px",
    padding: "12px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    border: "1px solid var(--White, #FFF)",
    color: "var(--White, #FFF)",
    fontFamily: "Helvetica",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "128%",
    marginTop:"50px",
    width:screenSize==="mobile" ? "350px" : "100px",
    marginLeft:screenSize==="mobile" ? "110px" : ""
  }}variant="outlined">Download Report</Button>
        </Stack>
      </Stack>


      
    </SectionWrapper>
  )
}

export default CsrReport