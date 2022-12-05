import React, { useState } from "react";
import { AreaMap, DialogImage, Sidebar } from "../components";
import { areas2Andar } from "../constants/areas";

export default function SegundoAndar() {
  const [space, setSpace] = useState({
    name: "Segundo Andar",
    image: ["/segundo_andar"],
  });
  const [url, setUrl] = useState(["/segundo_andar.png"]);
  const [alt, setAlt] = useState("generic");
  const [open, setOpen] = useState(false);

  const handleOnClick = (e, idArea) => {
    e.preventDefault();

    const area = areas2Andar
      .map((area) => (area.id === idArea ? area : null))
      .filter((area) => area !== null);

    if (idArea === "sala1") {
      console.log(area);
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

      <AreaMap
        areas={areas2Andar}
        alt={alt}
        url={url}
        handleOnClick={handleOnClick}
        title="Segundo/Terceiro/Quarto Andar"
      />

      <DialogImage handleClose={handleClose} open={open} space={space} />
    </>
  );
}
