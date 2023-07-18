import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import MainLayout from '@/layout/layout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


type Props = {
  
}

export default function About() {
  const { t } = useTranslation(['common', 'second-page'])
  return (
    <>
      <MainLayout>
        <h1>{t('common:h1')}</h1>
      </MainLayout>
    </>
  )
}


export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {  
  return {
   props: {
     ...(await serverSideTranslations(locale ?? 'hi', [
       'second-page',
       'common',
     ])),
   },
 }
}