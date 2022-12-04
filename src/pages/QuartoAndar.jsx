import React, { useState } from "react";
import { AreaMap, DialogImage, Sidebar } from "../components";
import { areas } from "../constants/areas";

export default function QuartoAndar() {
  const [space, setSpace] = useState({
    name: "Quarto Andar",
    image: "/quarto_andar",
  });
  const [url, setUrl] = useState("/quarto_andar.png");
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

      <AreaMap alt={alt} url={url} handleOnClick={handleOnClick} title="Quarto Andar" />

      <DialogImage handleClose={handleClose} open={open} space={space} />
    </>
  );
}
