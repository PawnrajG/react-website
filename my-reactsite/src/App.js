import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Learn from "./components/Learn";
import Newsletter from "./components/Newsletter";
import Techcards from "./components/Techcards";
import Footer from "./components/Footer";

const App = () =>{
  return (
    <>
      <Navbar />
      <Hero />
      <Learn />
      <Newsletter />
      <Techcards />
      <Footer />
    </>
  );
}

export default App
