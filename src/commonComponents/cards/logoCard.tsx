"use client";
import {Card} from "@mui/material";
import React from "react";

export type LogoCardProps = {
    data: {
        img: string;
    };
};

const data = {
    img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
};

export const LogoCard = (props: LogoCardProps) => {
    return (
        <Card
            sx={{
                height: "113px",
                background: `url(${data.img})`,
                backgroundSize: "cover",
            }}
        ></Card>
    );
};
