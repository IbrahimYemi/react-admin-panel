import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link, useLocation } from "react-router-dom";



export default function SideNav() {
  const { collapsed } = useProSidebar();
  const theme = useTheme();
  const location = useLocation();



  return (
    <Sidebar
      styel={{
        height: "100%",
        top: "auto",
      }}
      breakPoint="md"
      backgroundColor='#dedede'
    >
      <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt="User Dashboard"
          src="https://avatars.githubusercontent.com/u/87916230?v=4"
        />
        {!collapsed && (
          <>
            <Typography variant="body2" sx={styles.avatarName}>IBRAHIM YEMI</Typography>
            <Typography variant="overline"><i>Software developer</i></Typography>
          </>
        )}
      </Box>
      <Menu menuItemStyles={{
        button: ({active}) => {
          return {
            backgroundColor: active ? theme.pallete.secondary.main : null
          }
        }
      }}>
        <MenuItem title='Dashboard' active={location.pathname === '/'} component={<Link to='/' />} icon={<DashboardIcon />}>
          <Typography variant="body2"> Dashboards </Typography>
        </MenuItem>
        <MenuItem title='Users' active={location.pathname === '/users'} component={<Link to='/users' />} icon={<PeopleAltIcon />}>
          <Typography variant="body2"> Users </Typography>
        </MenuItem>
        <MenuItem title='Contents' active={location.pathname === '/contents'} component={<Link to='/contents' />} icon={<SourceOutlinedIcon />}>
          <Typography variant="body2"> Contents </Typography>
        </MenuItem>
        <MenuItem title='Analytics' active={location.pathname === '/analytics'} component={<Link to='/analytics' />} icon={<EqualizerIcon />}>
          <Typography variant="body2"> Analytics </Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

/** @type {import("@mui/material").SxProps} */

const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    mx: 5,
    mt:4,
    mb:2
  },
  avatar: {
    width: "5rem",
    height: "5rem",
    mt: 5,
    mx:1
  },
  avatarName: {
    mt: 1,
  },
};
