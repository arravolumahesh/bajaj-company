import React from "react";
import { ListItem, ListItemText, List, Collapse } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { menuData } from "../static/static";



  


const NestedMenu = ({MenuData}:{MenuData:any}) => {
    const [openMenu,setOpenMenu] = React.useState<number[]>([])   

    const toggleMenu = (id:number) => {
        setOpenMenu((prev) => {
            if (prev.includes(id)) {
                // Remove the item from the array
                return prev.filter((prevItem) => prevItem !== id);
            } else {
                return [...prev,id]
            }
        })
    }

    // const renderMenuItem = (menuItem: { id: number; label: string; url: string; children?: undefined; } | { id: number; label: string; children: { id: number; label: string; url: string; children: { id: number; label: string; url: string; }[]; }[]; url?: string; }) => {
    const renderMenuItem = (menuItem: any) => {
        if ((menuItem.attributes.children.data).length > 0) {
          return (
            <React.Fragment key={menuItem.id}>                
              <ListItem >
                <ListItemText primary={menuItem.attributes.title}  />
                <IconButton onClick={() => toggleMenu(menuItem.id)}>
                    {openMenu.includes(menuItem.id) ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListItem>
              <Collapse in={openMenu.includes(menuItem.id)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItem.attributes.children.data.map((childMenuItem: any) =>
                    renderMenuItem(childMenuItem)
                  )}
                </List>
              </Collapse>
            </React.Fragment>
          );
        } else {
          return (
            <ListItem  key={menuItem.id}  >
              <ListItemText primary={menuItem.attributes.title} />
            </ListItem>
          );
        }
      };


  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {MenuData?.data?.map((menuItem: any) => renderMenuItem(menuItem))}
    </List>
  );
};

export default NestedMenu;
