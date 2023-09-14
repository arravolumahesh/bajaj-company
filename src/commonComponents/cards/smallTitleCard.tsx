"use client";
import {Card, CardContent, Typography} from "@mui/material";
import React from "react";

type SmallTitleCardProps = {
    data: {
        img?: string;
        title: string;
        description?: string;
    };
};

const data = {
    img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    title: "Community Development",
};

export const SmallTitleCard = (props: SmallTitleCardProps) => {
    return (
        <Card
            sx={{
                display: "flex",
                width: "370px",
                height: "370px",
                background: `url(${data.img})`,
                backgroundSize: "cover",
            }}
        >
            {/* <Image src={data.img} alt='' fill /> */}
            <CardContent
                sx={{
                    alignSelf: "flex-end",
                    pb: "16px !important",
                }}
            >
                <Typography variant='h5' color={"white"}>
                    {data.title}
                </Typography>
            </CardContent>
        </Card>
    );
};
