import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import React from "react";

export const DialogImage = ({ handleClose, open, space }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl">
      <DialogTitle>{space.name}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {space.image.map((image, index) => (
            <Grid item key={index} xs={2}>
              <img
                src={image}
                alt={index}
                width={200}
                style={{ objectFit: "cover", marginLeft: "40px" }}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
