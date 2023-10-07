import { AddBox, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import { Mail as MailIcon } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import zuck from "../assets/zuck.png"
import React, { useState } from 'react'

export default function Navbar() {

  const [open, setIsOpen] = useState(false)

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  })

  const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }))

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: ".8rem",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }))

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    // gap: ".8rem",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }))

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography
          variant='h6'
          sx={{
            display: {
              xs: "none",
              sm: "block",
            }

          }}
        >
          LAMA DEV
        </Typography>
        <Pets
          sx={{
            display: {
              xs: "block",
              sm: "none",
            }
          }}
        />
        <Search
          sx={{
            backgroundColor: "background.default",
            color: "text.primary",
          }}
        ><InputBase
            placeholder='Search...'
          /></Search>
        <Icons>
          <Badge badgeContent={1} color='error'>
            <MailIcon color='white' />
          </Badge>
          <Badge badgeContent={1} color='error'>
            <NotificationsIcon color='white' />
          </Badge>
          <Avatar
            alt="user"
            src={zuck}
            sx={{
              width: 30,
              height: 30,
            }}
            onClick={() => setIsOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar alt="user" src={zuck} sx={{ width: 30, height: 30 }} onClick={() => setIsOpen(true)} />
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
} 
