import { Box } from '@mui/material'
import React from 'react'
import OutlinedCard from '../dashboard/Card';
import users from "../../store/users";

export default function UserStatus() {
  return (
    <Box sx={styles.columnContainer}>
      <OutlinedCard
        name={"ACTIVE USERS"}
        value={activeUsers}
        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"}
      />
      <OutlinedCard
        name={"INACTIVE USERS"}
        value={inactiveUsers}
        image={"https://thumbs.dreamstime.com/b/check-marks-red-cross-icon-simple-vector-illustration-140098693.jpg"}
      />
      <OutlinedCard
        name={"SUSPENDED USERS"}
        value={suspendedUsers}
        image={"https://thumbs.dreamstime.com/b/caution-sign-icon-isolated-vector-illustration-yellow-white-background-warning-symbol-flat-style-157731844.jpg"}
      />
    </Box>
  )
}

// variables
const activeUsers = filterUsers(users, "active");
const inactiveUsers = filterUsers(users, "inactive");
const suspendedUsers = filterUsers(users, "suspended");

// functions
function filterUsers(users, status) {
  return users.filter(user => user.status === status).length;
}

/** @type {import("@mui/material").SxProps} */

const styles = {
    columnContainer: {
      columns: '280px 3',
      maxWidth:1400,
      mb:3
    }
  };