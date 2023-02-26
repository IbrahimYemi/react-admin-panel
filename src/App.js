import React from "react";
// components
import Dashboard from "./views/dashboard/dashboard";
import Contents from "./views/contents/contents";
import Users from "./views/users/users";
import Analytics from "./views/analytics/analytics";
// necessity
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentCard from "./views/contents/PerContents";
import UserDetailPage from "./views/users/PerUser";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ProSidebarProvider>
            <CssBaseline />
            <Header />
            <Box sx={styles.container}>
              <SideNav />
              <Box sx={styles.main} component={"main"}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/contents" element={<Contents />} />
                  <Route path="/analytics" element={<Analytics />} />
                  {/* individual details card */}
                  <Route path="/content/details" element={<ContentCard />} />
                  <Route path="/user/details" element={<UserDetailPage />} />
                </Routes>
              </Box>
            </Box>
          </ProSidebarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

/** @type {import("@mui/material").SxProps} */

const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
    height: "calc(100%-64px)",
  },
  main: {
    p: 4,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};

export default App;
