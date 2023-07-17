import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import MainLayout from '@/layout/layout';


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <MainLayout>
        <h1>This is about</h1>
      </MainLayout>
    </>
  )
}
