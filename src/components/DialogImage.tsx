import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

export const DialogImage = ({ handleClose, open, space }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{space.name}</DialogTitle>
        <DialogContent>
          <img src={space.image} alt={space.alt} width={400} />
        </DialogContent>
      </Dialog>
  )
}
