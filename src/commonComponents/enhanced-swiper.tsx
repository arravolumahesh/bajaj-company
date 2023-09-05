"use client"
import {Swiper, SwiperSlide,} from "swiper/react";
import {ComponentProps, ComponentType, ReactNode} from "react";
import "../../node_modules/swiper/swiper-bundle.min.css"
import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";


export type SlideData = {
    isActive: boolean
    isPrev: boolean
    isNext: boolean
    isVisible: boolean
}

export interface EnhancedSwiperProps<T extends ComponentType<any> = ComponentType<any>, P = ComponentProps<T>> extends ComponentProps<typeof MaterialSwiper> {
    data: P[]
    SlideWrapperProps?: ComponentProps<typeof MaterialSwiperSlide>
    SlideComponent: ComponentType<P & SlideData>
    SlideComponentProps?: P
    Slots?: {
        ContainerStartChildren?: ReactNode
        ContainerStartProps?: ComponentProps<typeof Stack>
        ContainerEndChildren?: ReactNode
        ContainerEndProps?: ComponentProps<typeof Stack>
        WrapperStartChildren?: ReactNode
        WrapperEndProps?: ComponentProps<typeof Stack>
        WrapperEndChildren?: ReactNode
        WrapperStartProps?: ComponentProps<typeof Stack>
    }
}

export type EnhancedSwiperSlideData<T> = EnhancedSwiperProps<any, T>['SlideComponent']

const MaterialSwiper = styled(Swiper)(({theme}) => {
    return theme.unstable_sx({})
});
const MaterialSwiperSlide = styled(SwiperSlide)(({theme}) => {
    return theme.unstable_sx({})
});

const EnhancedSwiper = <T extends ComponentType<any>>(props: EnhancedSwiperProps<T>) => {
    const {
        data = [],
        SlideComponent,
        SlideComponentProps,
        SlideWrapperProps,
        Slots,
        ...swiperProps
    } = props;
    return (
        <MaterialSwiper
            {...swiperProps}
        >
            {data.map((item, idx) => {
                return (
                    <MaterialSwiperSlide key={idx} {...SlideWrapperProps}>
                        {(slideData) => {
                            return <SlideComponent {...SlideComponentProps} {...item} {...slideData} />
                        }}
                    </MaterialSwiperSlide>
                );
            })}
            {Slots && Object.keys(Slots).length && (() => {
                const {
                    ContainerStartChildren,
                    ContainerStartProps,
                    ContainerEndChildren,
                    ContainerEndProps,
                    WrapperStartChildren,
                    WrapperStartProps,
                    WrapperEndChildren,
                    WrapperEndProps
                } = Slots;
                return <>
                    {ContainerStartChildren && <Stack slot="container-start" {...ContainerStartProps}>
                        {ContainerStartChildren}
                    </Stack>}
                    {ContainerEndChildren && <Stack slot="container-end" {...ContainerEndProps}>
                        {ContainerEndChildren}
                    </Stack>}
                    {WrapperStartChildren && <Stack slot="wrapper-start" {...WrapperStartProps}>
                        {WrapperStartChildren}
                    </Stack>}
                    {WrapperEndChildren && <Stack slot="wrapper-end" {...WrapperEndProps}>
                        {WrapperEndChildren}
                    </Stack>}
                </>
            })()}

        </MaterialSwiper>
    );
};

export default EnhancedSwiper;

