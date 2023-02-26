import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({ name, value, image }) {
  return (
    <Box sx={{ minWidth: 275, mb:2 }}>
      <Card variant="outlined">
        <CardContent
          sx={{display:'flex', alignItems:'center', justifyContent:'center', textAlign: "left", background: "#FEFFEF", color: "blueGrey" }}
        >
          <Box sx={{width:'50px', height:'50px', borderRadius:3, mr:4}} component={'img'} src={image} />
          <Typography variant="h5" component="div">
            <Box
              component="span"
              sx={{ fontWeight: 650, transform: "scale(0.8)" }}
            >
              {name}
            </Box>
            <Typography sx={{ mt: 0.5, fontWeight: 650 }}>{value}</Typography>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
