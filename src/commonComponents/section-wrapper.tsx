import { Stack, StackProps } from "@mui/material";

interface SectionWrapperProps extends StackProps {}

const SectionWrapper = (props: SectionWrapperProps) => {
  return <Stack px={8} py={3.5} component={"section"} {...props} />;
};

export default SectionWrapper;
