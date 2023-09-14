import {ReactNode} from "react";
import ThemeRegistry from "@style/theme/themeRegistry";
import HeaderLayout from "@/layout/header";
import FooterLayout from "@/layout/footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    const {children} = props
    return (
        <html lang="en">
        <body>
        <ThemeRegistry>
            <HeaderLayout/>
            <main>
                {children}
            </main>
            <FooterLayout/>
        </ThemeRegistry>
        </body>
        </html>
    );
};

export default Layout;
