import { useState } from "react";
import "./App.css";
import Header from "./Components/Navbar/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const [menu, setMenu] = useState(false);
  const [inputClick, setInputClick] = useState(false);

  function handleMenu() {
    setMenu((menu) => !menu);
  }

  function handleInputClose() {
    setInputClick((prevInputClick) => !prevInputClick);
  }

  return (
    <div className="flex flex-col scroll-smooth ">
      {inputClick ? (
        <div className="bg-transparent" onClick={handleInputClose}>
          <Header menu={menu} handleClick={handleMenu} />
          <Hero />
          <Footer />
        </div>
      ) : (
        <div>
          <Header menu={menu} handleClick={handleMenu} />
          <Hero />
          <Footer />
        </div>
      )}
    </div>
  );
}
