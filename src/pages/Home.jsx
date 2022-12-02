import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { areas, drawerWidth, menuList } from "../constants/areas";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [space, setSpace] = useState({
    name: "Térreo",
    image: "/terreo",
  });
  const [url, setUrl] = useState("/terreo.png");
  const [alt, setAlt] = useState("generic");
  const [open, setOpen] = useState(false);

  const handleOnClick = (e, idArea) => {
    e.preventDefault();

    const area = areas
      .map((area) => (area.id === idArea ? area : null))
      .filter((area) => area !== null);

    if (idArea === "biblioteca") {
      console.log(area);
      setSpace(area[0]);
      setOpen(true);
    } else if (idArea === "auditorio") {
      setSpace(area[0]);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {menuList.map((menu) => (
              <ListItem key={menu.name} disablePadding>
                <Link to={menu.path}>
                  <ListItemButton>
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText primary={menu.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </nav>
      </Drawer>
      <Box paddingLeft={drawerWidth / 7} paddingTop={4}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Térreo
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
            <img
              src={url}
              height={480}
              width={710}
              alt={alt}
              useMap="#workmap"
            />
            <map id="workmap" name="workmap">
              {areas.map((area) => (
                <area
                  key={area.id}
                  shape="poly"
                  coords={area.coords}
                  alt={area.id}
                  href="#"
                  onClick={(e) => handleOnClick(e, area.id)}
                />
              ))}
            </map>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{space.name}</DialogTitle>
        <DialogContent>
          <img src={space.image} alt={space.alt} width={400} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
