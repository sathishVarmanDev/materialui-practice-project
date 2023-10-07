import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react'

export default function Sidebar({ mode, setMode }) {
  
  const handleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light")
  }
  return (
    <Box flex={1} sx={{
      padding: 2,
      // backgroundColor: "#bbdefb",
      display: {
        xs: "none",
        sm: "block",
      }
    }}>

      <Box sx={{
        position: "fixed",
      }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#group">
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#events">
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#darkMode">
            <ListItemIcon>
              <DarkModeIcon />
            </ListItemIcon>
              <Switch
                defaultChecked
                onChange={() => handleMode()}
              />
          </ListItemButton>
        </ListItem>
        </List>
      </Box>
    </Box>
  )
}
