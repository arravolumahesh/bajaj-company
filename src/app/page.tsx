import SectionWrapper from "@/commonComponents/section-wrapper";
import Hero from "@/components/home/hero";
import AboveProfits from "@/components/home/above-pofits";
import KeyFocus from "@/components/home/key-focus";

const HomePage = () => {
  return (
    <>
      <SectionWrapper
        py={0}
        SectionProps={{
          sx: {
            background: "radial-gradient(circle,  #326ccf 0%,  #0C1220 97%)",
          },
        }}
      >
        <Hero />
      </SectionWrapper>
      <SectionWrapper
        SectionProps={{
          sx: {
            background:
              "linear-gradient(180deg, #0C1425 0%, #162B52 17.68%, #1F3F78 35.36%, #254F98 53.05%, #2B5CB0 70.73%, #2F65C1 89.77%, #316ACB 110.17%, #326CCF 136.02%)",
            position: "relative",
            overflow: "hidden",
            "&:before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              background:
                "url(http://localhost:3000/Group%20427321804.svg) repeat-x",
              animation: "slideIn 5s infinite linear",
              "@keyframes slideIn": {
                "0%": {
                  left: "-100%",
                },
                "100%": {
                  left: "100%",
                },
              },
            },
          },
        }}
        py={{ xs: 7, md: 12 }}
      >
        <AboveProfits />
      </SectionWrapper>
      <SectionWrapper
        pt={{ xs: 7, md: 4 }}
        pb={{ xs: 7, md: 8 }}
        rowGap={{ xs: 6, md: 8 }}
        SectionProps={{
          bgcolor: "common.white",
        }}
        overflow={"hidden"}
      >
        <KeyFocus />
      </SectionWrapper>
    </>
  );
};

export default HomePage;
