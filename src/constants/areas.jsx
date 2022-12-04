import { Home, Looks3, Looks4, LooksOne, LooksTwo, SouthEast } from "@mui/icons-material";

export const areas = [
  {
    id: "biblioteca",
    coords: "474, 173, 489, 173, 489, 234, 474, 234, 474, 173",
    name: "Biblioteca",
    image: "/livraria.png",
  },
  {
    id: "auditorio",
    coords: "520, 190, 563, 190, 563, 234, 520, 234, 520, 190",
    name: "Auditório",
    image: "/auditorio.png",
  }
];


export const drawerWidth = 240;


export const menuList = [
  {
    name: "Página Inicial",
    icon: <Home />,
    path: "/",
  },
  {
    name: "Térreo",
    icon: <SouthEast />,
    path: "/terreo",
  },
  {
    name: "Primeiro Andar",
    icon: <LooksOne />,
    path: "/primeiroAndar",
  },
  {
    name: "Segundo Andar",
    icon: <LooksTwo />,
    path: "/segundoAndar",
  },
  {
    name: "Terceiro Andar",
    icon: <Looks3 />,
    path: "/terceiroAndar",
  },
  {
    name: "Quarto Andar",
    icon: <Looks4 />,
    path: "/quartoAndar",
  },
];