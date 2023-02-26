import { Box, Typography } from "@mui/material";
import React from "react";
import DoughNut from "../analytics/DoughNut";
import GraphChart from "../analytics/Graph";
import PieChartComponent from "../analytics/PieChart";
import UserStatus from "../analytics/UserStatus";
import ContentList from "../contents/contentList";
import UsersTable from "../users/UsersTable";
import users from "../../store/users";

export default function Dashboard() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Dashboard
      </Typography>
      <UserStatus />
      <Box 
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '16px',
      }}>
        <Box component={"div"} sx={styles.chart}>
          <DoughNut title='Age Differences' data={ageDifferences} />
        </Box>
        <Box component={"div"} sx={styles.chart}>
          <PieChartComponent title='Sex Differences' data={sexDifferences} />
        </Box>
        <Box component={"div"} sx={styles.chart}>
          <DoughNut title='Content Differences' data={contentDifferences} />
        </Box>
      </Box>
      <Box sx={styles.chartspace}>
        <GraphChart />
      </Box>
      <Box sx={styles.userTable}>
        <UsersTable number={5} />
      </Box>
      <Box sx={styles.userTable}>
        <ContentList number={4} />
      </Box>
    </Box>
  );
}
const maleUsers = filterMaleUsers(users, "male");
const femaleUsers = filterMaleUsers(users, "female");
const young = countUsersInRange(users, 18, 25);
const adult = countUsersInRange(users, 26, 35);
const old = countUsersInRange(users, 36, 50);

// functions
function filterMaleUsers(users, sex) {
  return users.filter(user => user.sex === sex);
}

function countUsersInRange(users, minAge, maxAge) {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
}

const sexDifferences = [
  { name: "Male", value: maleUsers.length },
  { name: "Female", value: femaleUsers.length },
];

const ageDifferences = [
  { name: "young(18-25)", value: young.length },
  { name: "adult(25-35)", value:  adult.length },
  { name: "old(35-50)", value:  old.length },
];

const contentDifferences = [
  { name: "Food", value: 20 },
  { name: "Tech", value: 15 },
  { name: "Drinks", value: 16 },
  { name: "Vegetables", value: 11 },
  { name: "Health", value: 5 },
  { name: "Finance", value: 18 },
];


/** @type {import("@mui/material").SxProps} */

const styles = {
  pageTitle: {
    mb: 2,
    fontWeight: 700,
    color: "#fff",
  },
  chartspace : {
    minHeight: '450px',
    backgroundColor: "#fff",
    my:3
  },
  columnContainer: {
    columns: "280px 3",
    maxWidth: 1400,
    mb: 3,
  },
  columnChart: {
    columns: "3",
    maxWidth: 1400,
    mb: 3,
  },
  chart: {
    backgroundColor: "#fefeee",
  },
  userTable: {
    width: "100%",
  },
};
