import * as React from 'react';
import Link, {LinkProps} from 'next/link';
import {Button, ButtonProps} from "@mui/material";

type MLinkProps = ButtonProps<typeof Link> & {
    href: LinkProps['href'];
}

const MLink = (props: MLinkProps) => {
    return <Button
        component={Link}
        {...props}
    />
}

export default MLink;
