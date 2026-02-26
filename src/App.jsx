import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/utils/ScrollToTop"

import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import ProjectDetails from "./pages/ProjectDetails"
import Professions from "./pages/Professions"
import Contact from "./pages/Contact"
import P1 from "./pages/project/p1"
import P2 from "./pages/project/p2"
import P3 from "./pages/project/p3"
import P4 from "./pages/project/p4"
import P5 from "./pages/project/p5"
import P6 from "./pages/project/p6"
import P7 from "./pages/project/p7"
import P8 from "./pages/project/p8"
import P9 from "./pages/project/p9"
import P10 from "./pages/project/p10"

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/nos-metiers" element={<Professions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/aménagement-commercial" element={<P1 />} />
        <Route path="/project/transformation-de-bureau" element={<P2 />} />
        <Route path="/project/rénovation-hôtelière" element={<P3 />} />
        <Route path="/project/rénovation-restauration" element={<P4 />} />
        <Route path="/project/rénovation-intérieure" element={<P5 />} />
        <Route path="/project/aménagement-de-salle-de-sport" element={<P6 />} />
        <Route path="/project/elégance-et-modernité" element={<P7 />} />
        <Route path="/project/ravalement-de-façade" element={<P8 />} />
        <Route path="/project/renovation-de-façade-2" element={<P9 />} />
        <Route path="/project/renovation-résidentielle" element={<P10 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
