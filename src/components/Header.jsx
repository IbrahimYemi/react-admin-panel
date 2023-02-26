import React from 'react'
import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useProSidebar } from 'react-pro-sidebar';


export default function Header() {
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  return (
    <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar>
            <IconButton onClick={()=>broken ? toggleSidebar() : collapseSidebar()} style={{color:'#020250cc'}} >
                <MenuIcon />
            </IconButton>
            <Box component='img' sx={styles.appLogo} src="https://www.logodesign.net/logo-new/building-on-crescent-4303ld.png" />
            <Box sx={{flexGrow:1}} />
            <IconButton title='Notification' style={{color:'#020250cc'}}>
            <Badge badgeContent={4} color="error">
                <NotificationsIcon />
            </Badge>
            </IconButton>
            <IconButton title='settings' style={{color:'#020250cc'}} >
                <SettingsIcon />
            </IconButton>
            <IconButton title='Sing Out' style={{color:'#020250cc'}} >
                <LogoutIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}


/** @type {import("@mui/material").SxProps} */

const styles = {
    appBar : {
        bgcolor: '#dedede'
    },
    appLogo : {
        borderRadius: 2,
        width: 80,
        ml: 2,
        cursor: 'pointer'
    }
}