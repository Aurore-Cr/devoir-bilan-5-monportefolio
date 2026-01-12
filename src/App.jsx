import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </div>
  );
}

export default App;
