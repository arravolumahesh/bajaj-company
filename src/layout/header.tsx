import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CSLink, { NextLinkComposed } from '@/components/link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/router';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



const menuData = [
    {
      label: 'Home',
      url:'/',
      submenu: [
        { label: 'Submenu Item 1',url:'/' },
        { label: 'Submenu Item 2',url:'/' },
        { label: 'Submenu Item 3',url:'/' },
      ],
    },
    {
      label: 'About',
      url:'/about',
      submenu: [
        { label: 'Submenu Item 4',url:'/about', },
        { label: 'Submenu Item 5',url:'/about', },
      ],
    },
    { label: 'Contact',url:'/contact' },
  ];



export default function HeaderLayout(): JSX.Element {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [parentOpen, setParentOpen] = React.useState<string>('');
    const router = useRouter()
    const {locale,locales,asPath} = router

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const openSubmenu = (event: React.MouseEvent<HTMLElement>,parent: string) => {
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
            BAJAJ BEYOND
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
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
            color:'primary.main',
          }}
          >
            {item.label}
            <Box component={'span'} sx={{pt:1}}  onClick={(e) => openSubmenu(e,item.label)} ><ArrowDropDownIcon color='primary'/></Box>
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
        color:'primary.main'
      }}>{item.label}</MenuItem>; 
    });
  }
  
  const handleChangeTranslate = (
    event: React.MouseEvent<HTMLElement>,
    newLocle: string,
  ) => {
    router.push(asPath,undefined,{
        locale:newLocle
    })
  };



    return (
            <>
                <AppBar position="fixed">
                <Toolbar sx={{ backgroundColor: 'background.paper' }}>
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                    <Container maxWidth="lg" sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Typography variant="h6" noWrap component="div" color="black">
                            BAJAJ BEYOND
                        </Typography>                        
                        <Box sx={{ display: { xs: 'none', sm: 'flex' },alignItems:'center' }}>
                            {renderMenuItems(menuData)}                            
                            <ToggleButtonGroup
                                color="primary"
                                value={locale}
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

            </>
        
    );
  }