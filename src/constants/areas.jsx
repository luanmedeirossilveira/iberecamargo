import { Home, Looks3, Looks4, LooksOne, LooksTwo, OtherHouses, SouthEast } from "@mui/icons-material";

export const areas = [
  {
    id: "biblioteca",
    coords: "474, 173, 489, 173, 489, 234, 474, 234, 474, 173",
    name: "Biblioteca",
    image: ["/livraria.jpeg"],
  },
  {
    id: "auditorio",
    coords: "520, 190, 563, 190, 563, 234, 520, 234, 520, 190",
    name: "Auditório",
    image: ["/auditorio.png"],
  }
];

export const areas1Andar = [
  {
    id: "cafeteria",
    coords: "245, 229, 333, 229, 333, 247, 298, 317, 228, 317, 245, 229",
    name: "Cafeteria",
    image: ["/restaurante.jpeg"],
  },
  {
    id: "entrada",
    coords: "351, 176, 594, 187, 596, 332, 351, 226, 351, 176",
    name: "Entrada do Museu",
    image: ["/entrada.jpeg"],
  }
];

export const areas2Andar = [
  {
    id: "sala1",
    coords: "245, 229, 333, 229, 333, 247, 298, 317, 228, 317, 245, 229",
    name: "Exibições",
    image: ["/ex1.jpeg", "/ex2.jpeg", "/ex3.jpeg", "/ex4.jpeg", "/ex5.jpeg"],
  },
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
    name: "Outros Andares",
    icon: <OtherHouses />,
    path: "/segundoAndar",
  },
];