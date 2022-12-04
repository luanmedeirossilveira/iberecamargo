import { Route, Routes } from "react-router-dom";
import Terreo from "./pages/Terreo";
import PrimeiroAndar from "./pages/PrimeiroAndar";
import "./App.css";
import SegundoAndar from "./pages/SegundoAndar";
import TerceiroAndar from "./pages/TerceiroAndar";
import QuartoAndar from "./pages/QuartoAndar";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terreo" element={<Terreo />} />
      <Route path="/primeiroAndar" element={<PrimeiroAndar />} />
      <Route path="/segundoAndar" element={<SegundoAndar />} />
      <Route path="/terceiroAndar" element={<TerceiroAndar />} />
      <Route path="/quartoAndar" element={<QuartoAndar />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
