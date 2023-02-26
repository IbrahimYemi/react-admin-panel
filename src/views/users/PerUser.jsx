import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const UserDetailPage = () => {
  const details = useSelector((state) => state.userDetails.value);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        padding: "20px",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: 2,
              backgroundColor: "#e0e0e0",
            }}
          >
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Avatar
                  alt="User Avatar"
                  src="https://via.placeholder.com/150"
                  sx={{
                    width: 120,
                    height: 120,
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4">{details.name}</Typography>
                <Typography variant="body1">{details.email}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              padding: 2,
              backgroundColor: "#e0e0e0",
            }}
          >
            <Typography variant="h5">Profile</Typography>
            <Box sx={{ mt: 2, mb: 2 }}>
              <Typography variant="subtitle1">Sex: {details.sex}</Typography>
              <Typography variant="subtitle1">Age: {details.age}yrs old</Typography>
              <Typography variant="subtitle1">
                Education: {details.education_level}
              </Typography>
              <Typography variant="subtitle1">
                Marital Status: {details.marital_status}
              </Typography>
              <Typography variant="subtitle1">
                Date Joined: {details.date_joined}
              </Typography>
              <Typography variant="subtitle1">Status: {(details.status)}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              padding: 2,
              backgroundColor: "#e0e0e0",
            }}
          >
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h5">Contact Details</Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1">
                    Phone: +1 555-555-5555
                  </Typography>
                  <Typography variant="subtitle1">
                    Address: 123 Main St, Anytown USA
                  </Typography>
                  <Typography variant="subtitle1">
                    Country: {details.country}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sx={{ mt: 4 }}>
                <Typography variant="h5">Hobbies</Typography>
                <Box sx={{ mt: 2, mb: 2 }}>
                {details.hobbies.map((i, x)=>
                  <Chip
                    key={x}
                    label={i}
                    sx={{ m: 0.5, backgroundColor: "#2196f3", color: "#fff" }}
                  />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetailPage;
