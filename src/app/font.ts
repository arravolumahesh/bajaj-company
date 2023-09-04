import {Roboto} from "next/font/google";

export const roboto = Roboto({
    style: 'normal',
    display: 'swap',
    subsets: ['latin'],
    weight: ['400', '700'],
    fallback: ['system-ui', 'arial']
})