import React, { useState } from "react";
import { AreaMap, DialogImage, Sidebar } from "../components";
import { areas1Andar } from "../constants/areas";

export default function PrimeiroAndar() {
  const [space, setSpace] = useState({
    name: "Térreo",
    image: ["/terreo"],
  });
  const [url, setUrl] = useState(["/primeiro_andar.png"]);
  const [alt, setAlt] = useState("generic");
  const [open, setOpen] = useState(false);

  const handleOnClick = (e, idArea) => {
    e.preventDefault();

    const area = areas1Andar
      .map((area) => (area.id === idArea ? area : null))
      .filter((area) => area !== null);

    if (idArea === "cafeteria") {
      console.log(area);
      setSpace(area[0]);
      setOpen(true);
    } else if (idArea === "entrada") {
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

      <AreaMap areas={areas1Andar} alt={alt} url={url} handleOnClick={handleOnClick} title="Primeiro Andar" />

      <DialogImage handleClose={handleClose} open={open} space={space} />
    </>
  );
}
