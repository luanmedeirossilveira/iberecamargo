import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { areas } from "../constants/areas";
import { Sidebar, AreaMap, DialogImage } from "../components";

export default function Terreo(props) {
  const [space, setSpace] = useState({
    name: "Térreo",
    image: ["/terreo"],
  });
  const [url, setUrl] = useState(["/terreo.png"]);
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
      <Sidebar />

      <AreaMap areas={areas} alt={alt} url={url} handleOnClick={handleOnClick} title="Térreo" />

      <DialogImage handleClose={handleClose} open={open} space={space} />
    </div>
  );
}
