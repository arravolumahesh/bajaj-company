"use client"
import SectionWrapper from "@/commonComponents/section-wrapper"
import { initiativedata } from "./intermediateInitiatives"
import MLink from "@/commonComponents/m-link"

interface props{
    initiativedata: typeof initiativedata[0]
}

const CompanyInitiatives = (props:props) => {
   const {initiativedata,...rest} = props
   return (
    <>
        <SectionWrapper 
        SectionProps={{sx:{}}}
        >
            <MLink variant="menulink" href={""}>Bajaj AUTO Limited</MLink>
        </SectionWrapper>
    </>
   )

}

export default CompanyInitiatives