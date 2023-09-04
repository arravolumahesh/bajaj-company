'use client'
import {Box, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CSLink from "@/commonComponents/link";

export default function FooterLayout(): JSX.Element {
    return (
        <>
            <Box component={'section'} sx={{backgroundColor: '#333', py: 4}}>
                <Container maxWidth={"lg"}>
                    <Stack
                        direction={{xs: 'column', lg: 'row'}}
                        gap={2}
                        justifyContent={'space-between'}
                    >
                        <Box>
                            Logo Box

                            <List dense={true}>
                                <ListItem>
                                    <ListItemIcon>
                                        <EmailIcon color="info"/>
                                    </ListItemIcon>
                                    <ListItemText primary="info@bajajbeyond.com"/>
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <LocalPhoneIcon color="info"/>
                                    </ListItemIcon>
                                    <ListItemText primary="1800 000 1234"/>
                                </ListItem>

                            </List>
                        </Box>
                        <Box>
                            <Typography variant="h4">Our Business</Typography>
                            <Divider color="#fff"/>
                            <List dense={true}>
                                <ListItem component={CSLink} noLinkStyle href="/">
                                    <ListItemText primary="Bajaj Auto"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Finserv"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Electricals"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Allianz"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Mukand Ltd."/>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Typography variant="h4">Charitable Trusts</Typography>
                            <Divider color="#fff"/>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemText primary="Bajaj Auto"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Finserv"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Electricals"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Allianz"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Mukand Ltd."/>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Typography variant="h4">About Us</Typography>
                            <Divider color="#fff"/>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemText primary="Bajaj Auto"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Finserv"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Electricals"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Allianz"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Mukand Ltd."/>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Typography variant="h4">News & Media</Typography>
                            <Divider color="#fff"/>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemText primary="Bajaj Auto"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Finserv"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Electricals"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Bajaj Allianz"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Mukand Ltd."/>
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                </Container>
            </Box>

        </>
    )
}