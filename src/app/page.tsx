import Hero from "@/components/home/hero";
import AboveProfits from "@/components/home/above-pofits";
import KeyFocus from "@/components/home/key-focus";
import Impact from "@/components/home/impact";
import HerosSection from "@/components/reportComponents/herosSection";
import Enquire from "@/components/reportComponents/enquire";
import Bajaj from "@/components/reportComponents/bajaj";
import CsrReport from "@/components/reportComponents/csrReport";



const HomePage = () => {
  return (
    <>
      <Hero />
      <AboveProfits />
      <KeyFocus />
      <Impact />
      <HerosSection/>
      <Enquire/>
      <Bajaj/>
      <CsrReport/>
    </>
  );
};

export default HomePage;
