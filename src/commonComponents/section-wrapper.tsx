import { Stack, StackProps } from "@mui/material";

interface SectionWrapperProps extends StackProps {}

const SectionWrapper = (props: SectionWrapperProps) => {
    const { children, ...rest } = props;
  return (
    <Stack component={"section"} alignItems={"center"}>
      <Stack
        px={{
          xs: 3,
          md: 5,
          xl: 8,
        }}
        py={3.5}
        width={1}
        maxWidth={(theme) => theme.breakpoints.values.xxl}
        {...rest}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default SectionWrapper;
