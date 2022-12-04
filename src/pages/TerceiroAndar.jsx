import React, { useState } from "react";
import { AreaMap, DialogImage, Sidebar } from "../components";
import { areas } from "../constants/areas";

export default function TerceiroAndar() {
  const [space, setSpace] = useState({
    name: "Terceiro Andar",
    image: "/terceiro_andar",
  });
  const [url, setUrl] = useState("/terceiro_andar.png");
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
    <>
      <Sidebar />

      <AreaMap alt={alt} url={url} handleOnClick={handleOnClick} title="Terceiro Andar" />

      <DialogImage handleClose={handleClose} open={open} space={space} />
    </>
  );
}