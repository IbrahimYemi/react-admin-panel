import { Box, Typography } from '@mui/material'
import React from 'react'
import UsersTable from './UsersTable';
import UserStatus from '../analytics/UserStatus';

export default function Dashboard() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant='h5'> Users </Typography>
      <UserStatus />
      <Box sx={styles.userTable} >
        <UsersTable number={10} />
      </Box>
    </Box>
  )
}


/** @type {import("@mui/material").SxProps} */

const styles = {
  pageTitle: {
    mb:2,
    fontWeight:700,
    color: "#fff",
  },
  columnContainer: {
    columns: '280px 3',
    maxWidth:1400,
    mb:3
  },
  columnChart: {
    columns: '350px 2',
    maxWidth:1400,
    mb:3
  },
  userTable: {
    width: '100%'
  }
};