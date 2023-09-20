import { Stack, StackProps } from "@mui/material";

interface SectionWrapperProps extends StackProps {
  SectionProps: Omit<StackProps, "children">;
}

const SectionWrapper = (props: SectionWrapperProps) => {
    const { children, SectionProps, ...rest } = props;
    return (
      <Stack
        component={"section"}
        alignItems={"center"}
        height={1}
        {...SectionProps}
      >
        <Stack
          px={{
            xs: 3,
            md: 5,
            xl: 8,
          }}
          py={3.5}
          width={1}
          maxWidth={(theme) => theme.breakpoints.values.xxl}
          height={"inherit"}
          {...rest}
        >
          {children}
        </Stack>
      </Stack>
    );
};

export default SectionWrapper;
