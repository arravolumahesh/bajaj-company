import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import MainLayout from '@/layout/layout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


const inter = Inter({ subsets: ['latin'] })

type Props = {
  initialData: any;
  fullData: any;
  
}

export default function Home( _props: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const { t } = useTranslation(['common', 'home-page'])

  return (
    <>
      <MainLayout>          
        {t('home-page:title')}

        {/* <h1>{_props?.initialData}</h1>

        {JSON.stringify(_props?.fullData)} */}
      </MainLayout>
    </>
  )
}


export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {  
  
  const fetchUrl = locale === 'hi' ? 'https://jsonplaceholder.typicode.com/users' : 'https://jsonplaceholder.typicode.com/posts'
  const res = await fetch(fetchUrl);
  const initialData = await res.json();

  
 return {
  props: {
    ...(await serverSideTranslations(locale ?? 'hi', [
      'home-page',
      'common',
    ])),
    initialData:fetchUrl,
    fullData:initialData
  },
}

}