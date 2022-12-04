import { Chip, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { areas, drawerWidth } from "../constants/areas";

export const AreaMap = ({ alt, handleOnClick, title, url }) => {
  return (
    <Box paddingLeft={drawerWidth / 7} paddingTop={4}>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box spacing={2} paddingTop={2}>
            {areas.map((area) => (
              <Chip
                key={area.id}
                label={area.name}
                onClick={(e) => handleOnClick(e, area.id)}
                sx={{
                  margin: 1,
                }}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <img src={url} height={480} width={710} alt={alt} useMap="#workmap" />
          <map id="workmap" name="workmap">
            {areas.map((area) => (
              <area
                key={area.id}
                shape="poly"
                coords={area.coords}
                alt={area.id}
                href="#"
                onMouseOver={(e) => handleOnClick(e, area.id)}
              />
            ))}
          </map>
        </Grid>
      </Grid>
    </Box>
  );
};
