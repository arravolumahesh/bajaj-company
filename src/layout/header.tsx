'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CSLink from '@/commonComponents/link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {Container, ListItem} from "@mui/material";


const menuData = [
    {
        label: 'Home',
        url: '/',
        submenu: [
            {label: 'Submenu Item 1', url: '/'},
            {label: 'Submenu Item 2', url: '/'},
            {label: 'Submenu Item 3', url: '/'},
        ],
    },
    {
        label: 'About',
        url: '/about',
        submenu: [
            {label: 'Submenu Item 4', url: '/about',},
            {label: 'Submenu Item 5', url: '/about',},
        ],
    },
    {label: 'Contact', url: '/contact'},
];


export default function HeaderLayout(): JSX.Element {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [parentOpen, setParentOpen] = React.useState<string>('');

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawerWidth = 240;
    const navItems = ['Home', 'About', 'Contact'];

    const openSubmenu = (event: React.MouseEvent<HTMLElement>, parent: string) => {
        setAnchorEl(event.currentTarget);
        setParentOpen(parent)

    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseMenu = () => {

        setAnchorEl(null);
        setParentOpen('');
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                BAJAJ BEYOND
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    function renderMenuItems(menuItems: typeof menuData) {
        return menuItems.map((item: typeof menuData[0]) => {
            if (item.submenu) {
                return (
                    <MenuItem
                        key={item.label}
                        component={CSLink} noLinkStyle href={item.url} sx={{
                        color: 'primary.main',
                    }}
                    >
                        {item.label}
                        <Box component={'span'} sx={{pt: 1}}
                             onClick={(e) => openSubmenu(e, item.label)}><ArrowDropDownIcon color='primary'/></Box>
                        <Menu
                            open={parentOpen === item.label ? true : false}
                            anchorEl={anchorEl}
                            onClose={handleCloseMenu}
                        >
                            {renderMenuItems(item.submenu)}
                        </Menu>
                    </MenuItem>
                );
            }
            return <MenuItem
                key={item.label}
                component={CSLink} noLinkStyle href={item.url} sx={{
                color: 'primary.main'
            }}>{item.label}</MenuItem>;
        });
    }

    const handleChangeTranslate = (
        event: React.MouseEvent<HTMLElement>,
        newLocle: string,
    ) => {

    };


    return (
        <>
            <AppBar position="sticky">
                <Toolbar sx={{backgroundColor: 'background.paper'}}>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Container maxWidth="lg"
                               sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant="h6" noWrap component="div" color="black">
                            BAJAJ BEYOND
                        </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'flex'}, alignItems: 'center'}}>
                            {renderMenuItems(menuData)}
                            <ToggleButtonGroup
                                color="primary"
                                exclusive
                                onChange={handleChangeTranslate}
                                aria-label="Platform"
                            >
                                <ToggleButton value="en">En</ToggleButton>
                                <ToggleButton value="hi">Hi</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>

                    </Container>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </>

    );
}