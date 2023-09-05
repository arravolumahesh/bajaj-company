"use client"
import {Swiper, SwiperProps, SwiperSlide, SwiperSlideProps} from "swiper/react";
import {ComponentProps, ComponentType} from "react";
import "../../node_modules/swiper/swiper-bundle.min.css"
import {styled} from "@mui/material/styles";


export interface EnhancedSwiperProps<T extends ComponentType<any>> extends SwiperProps {
    data: ComponentProps<T>[]
    SlideProps?: SwiperSlideProps
    SlideComponent: T
    SlideComponentProps?: ComponentProps<T>
}


const MaterialSwiper = styled(Swiper)({});

const EnhancedSwiper = <S extends ComponentType<any> = ComponentType<any>>(props: EnhancedSwiperProps<S>) => {
    const {data, SlideComponent, SlideComponentProps, SlideProps, ...swiperProps} = props;
    return (
        <MaterialSwiper
        >
            {data.map((item, idx) => {
                return (
                    <SwiperSlide key={idx} {...SlideProps}>
                        <SlideComponent {...SlideComponentProps} {...item} />
                    </SwiperSlide>
                );
            })}
        </MaterialSwiper>
    );
};
export default EnhancedSwiper;

interface EnhancedSwiperCardProps {
    data: {
        title: string
        description: string
    }
}

export const EnhancedSwiperCard = (props: EnhancedSwiperCardProps) => {
    return (
        <div>

        </div>
    );
};


