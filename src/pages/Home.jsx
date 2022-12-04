import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Sidebar } from "../components";
import { drawerWidth } from "../constants/areas";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Box paddingLeft={drawerWidth / 7} paddingTop={4}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Seja Bem Vindo!
        </Typography>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box spacing={2} paddingTop={2}>
              <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                Conheça n
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
