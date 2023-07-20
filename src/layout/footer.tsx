import { Box, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";

export default function FooterLayout(): JSX.Element {
    return (
        <>
            <Box component={'section'}>
                <Container maxWidth={"lg"}>
                    <Stack
                        direction={{xs:'column',lg:'row'}}
                        gap={2} 
                        justifyContent={'space-between'}
                    >
                        <Box>
                            Logo Box
                        </Box>
                        <Box>
                            <Typography variant="h4" >Our Business</Typography>
                            <Divider color="#fff" />
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
                            <Typography variant="h4">Charitable Trusts</Typography>
                            <Divider color="#fff" />
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
                            <Divider color="#fff" />
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
                            <Divider color="#fff" />
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