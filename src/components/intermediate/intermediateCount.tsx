'use client'

import {
  MotionTypography,
  MotionTypographyProps,
} from "@/commonComponents/motion-elements";
import SectionWrapper from "@/commonComponents/section-wrapper"
import { Box, Grid, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useInView } from "framer-motion"
import { useRef } from "react"

const contAnimation:MotionTypographyProps = {
    initial: {
        y: "40%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        duration: 1,        
      },
      viewport: {
        once: true,
      },
}

const IntermediateCount = () => {
    const invref = useRef(null);
    const isInView = useInView(invref,{once:true});
    console.log(invref,isInView)

    return (
        <>
            <SectionWrapper 
                SectionProps={{
                    sx:{
                        backgroundColor: 'white'
                    }
                }}
                sx={{
                    pt: 5,
                    pb: 12,
                    backgroundColor: 'white'
                }} >
                <Box
                    ref={invref}
                    sx={{
                        backgroundColor:'primary.dark',
                        px:{
                            xs:1,
                            md:5
                        },
                        py:2
                    }}
                >
                    <Grid 
                        container 
                        spacing={0}
                        sx={{
                            '& .MuiGrid-item':{
                              position:'relative',
                              '&:after':{
                                content: `""`,
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                width: '1px',
                                height: '0%',
                                backgroundColor: 'white',
                                transition: 'all 1s ease-in-out',
                                ...(isInView && {
                                    height: '100%',
                                })
                              },
                              '&:last-child':{
                                '&:after':{
                                    display:'none'
                                }
                              }
                            }
                        }}
                    
                    >
                        {count.map((item,index)=> (
                            <Grid item xs={true} key={index} sx={{
                                textAlign:'center'
                            }}>
                                <MotionTypography variant="h3" color={'white'} {...contAnimation} >{item.value}</MotionTypography>
                                <MotionTypography variant="body1" color={'white'} fontWeight={400} {...contAnimation} >{item.title}</MotionTypography>
                            </Grid>
                        ))}
                        
                    </Grid>
                </Box>
            </SectionWrapper>
        </>
    )
}

export default IntermediateCount

const count = [
    {
        value:'93k',
        title:'Students Educated'
    },
    {
        value:'300+',
        title:'Programs Conducted'
    },
    {
        value:'100+',
        title:'Training Institutions'
    },
]