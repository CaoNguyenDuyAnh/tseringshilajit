"use client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/page";
import Reviews from "./reviews/page";
import FAQ from "./FAQ/page";
import Guide from "./how-to-use/page";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/how-to-use" element={<Guide />} />
      </Routes>
    </BrowserRouter>
  );
}
