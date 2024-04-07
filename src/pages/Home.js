import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Browse from "../components/Browse";
import Selling from "../components/Selling";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Main />
      <Browse />
      <Selling />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
