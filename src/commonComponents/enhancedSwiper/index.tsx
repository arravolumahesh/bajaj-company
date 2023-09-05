"use client"
import {Swiper, SwiperProps, SwiperSlide, SwiperSlideProps} from "swiper/react";
import {ComponentProps, ComponentType} from "react";
import "swiper/swiper-bundle.min.css";


export interface EnhancedSwiperProps<T extends ComponentType<any>> extends SwiperProps {
    data: ComponentProps<T>[]
    SlideProps?: SwiperSlideProps
    SlideComponent: T
    SlideComponentProps?: ComponentProps<T>
}

const EnhancedSwiper = <S extends ComponentType<any> = ComponentType<any>>(props: EnhancedSwiperProps<S>) => {
    const {data, SlideComponent, SlideComponentProps, SlideProps, ...swiperProps} = props;
    return (
        <Swiper
            {...swiperProps}
        >
            {data.map((item, idx) => {
                return (
                    <SwiperSlide key={idx} {...SlideProps}>
                        <SlideComponent {...SlideComponentProps} {...item} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
export default EnhancedSwiper;
