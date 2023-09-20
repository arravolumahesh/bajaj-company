"use client"
import { Stack } from "@mui/material"
import CompanyInitiatives from "./companyInitiatives"


const IntermediateInitiatives = () => {

    return (
        <>
        <Stack>
        {initiativedata && initiativedata.map((item,index)=>{
           return <CompanyInitiatives initiativedata={item} key={index} />
        })} 
        </Stack>
        </>
    )
}

export default IntermediateInitiatives

export const initiativedata = [
  {
    companyName:'Bajaj AUTO Limited',
    companyPath:'/',
    initiative:[
        {
            imageUrl: '',
            location: 'Maharashtra',
            title:'Gifting Smiles – No child left behind',
            slug:'test'
        },
        {
            imageUrl: '',
            location: 'India',
            title:'Implementing skill-based education in schools',
            slug:'test'
        },
        {
            imageUrl: '',
            location: 'Maharashtra',
            title:'Gifting Smiles – No child left behind',
            slug:'test'
        },
        {
            imageUrl: '',
            location: 'Delhi',
            title:'IPH-Triveni Program',
            slug:'test'
        },
        {
            imageUrl: '',
            location: 'Maharashtra',
            title:'Gifting Smiles – No child left behind',
            slug:'test'
        },
        {
            imageUrl: '',
            location: 'Maharashtra',
            title:'Gifting Smiles – No child left behind',
            slug:'test'
        },
    ]
},

]