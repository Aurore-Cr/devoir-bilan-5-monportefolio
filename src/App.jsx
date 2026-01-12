import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portefolio from "./pages/Portefolio";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* Other components and content can go here */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portefolio" element={<Portefolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
