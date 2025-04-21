import React from "react";
import { Navbar } from "./component/navbar/Navbar";
import { Footer } from "./component/footer/Footer";
import { Carousel } from "./component/carousel/Carousel";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Footer />
    </>
  );
};

export default App;
