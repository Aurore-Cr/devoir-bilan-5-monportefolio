import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Mentions from "./components/Mentions";
import Portefolio from "./components/Portefolio";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Other components and content can go here */}
      <main>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li>
              <BrowserRouter>
                <Routes>
                  <Route path="/" component={Home} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/portefolio" component={Portefolio} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/mentions" component={Mentions} />
                </Routes>
              </BrowserRouter>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </div>
  );
}

export default App;
