import { Box, Typography } from "@mui/material";
import React from "react";
import ContentList from "./contentList";

export default function Contents() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Contents
      </Typography>
      <Box sx={styles.userTable}>
        <ContentList number={0} />
      </Box>
    </Box>
  );
}

/** @type {import("@mui/material").SxProps} */

const styles = {
  pageTitle: {
    mb: 2,
    fontWeight: 700,
    color: "#fff",
  },
  columnContainer: {
    columns: "280px 3",
    maxWidth: 1400,
    mb: 3,
  },
  columnChart: {
    columns: "350px 2",
    maxWidth: 1400,
    mb: 3,
  },
  userTable: {
    width: "100%",
  },
};
