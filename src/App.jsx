import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PrimeiroAndar from "./pages/PrimeiroAndar"
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/primeiroAndar" element={<PrimeiroAndar />} />
    </Routes>
  )
}