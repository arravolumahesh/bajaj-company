import { useRouter } from "next/router";
import { ReactNode } from "react";
import HeaderLayout from "./header";
import Container from '@mui/material/Container';
import Head from "next/head";
import FooterLayout from "./footer";


const MainLayout = ({ children }: { children: ReactNode }) => {
    const router  = useRouter()
    return (
       <>
            <Head>
                <title>Bajaj Beyond - Home Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=0.1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderLayout />
            <Container component="main" maxWidth={'lg'} sx={{pt:8,minHeight:'100vh'}}>
                {children}
            </Container>
            <FooterLayout />
        </>
    );
  };
  
  export default MainLayout;