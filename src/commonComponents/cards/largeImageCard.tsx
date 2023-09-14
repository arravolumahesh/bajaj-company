"use client";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";

type LargeImageCardProps = {
    data: {
        img?: string;
        title: string;
        description: string;
        typeStory: boolean;
    };
};

const data = {
    img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    title: "Announcing Jamnalal Bajaj Awards 2023",
    description:
        "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    typeStory: true,
    name: "Sunita Kumari",
    project: "Beneficiary - Project Hamaara Sapna",
};

export const LargeImageCard = (props: LargeImageCardProps) => {
    return (
        <Card
            sx={{
                width: data.typeStory ? "1112px" : "1208px",
                height: data.typeStory ? "543px" : "609px",
            }}
        >
            {/* <Image src={data.img} alt='' fill /> */}
            <CardMedia image={data.img} sx={{width: "100%", height: "100%"}}/>
            <CardContent
                sx={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: data.typeStory ? "469px" : "463px",
                    height: "auto",
                    bgcolor: data.typeStory ? "#000000CC" : "#FFFFFFD9",
                    pl: data.typeStory ? 5 : 2,
                    pt: data.typeStory ? 5 : 2,
                }}
            >
                {!data.typeStory && <Typography variant='h4'>{data.title}</Typography>}
                <Typography
                    mt={2}
                    color={data.typeStory ? "#FFFFFFB2" : "#000"}
                    variant={data.typeStory ? "caption" : "subtitle1"}
                >
                    {data.description}
                </Typography>
                {data.typeStory && (
                    <>
                        <Typography mt={3} variant='subtitle1' color={"#FFFFFFE5"}>
                            {data.name}
                        </Typography>
                        <Typography variant='caption' color={"#FFFFFFB2"}>
                            {data.project}
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
};
