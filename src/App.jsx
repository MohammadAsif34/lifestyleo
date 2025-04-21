import React from "react";
import { Navbar } from "./component/navbar/Navbar";
import { Footer } from "./component/footer/Footer";
import { Carousel } from "./component/carousel/Carousel";
import { Categories } from "./component/categories/Categories";
import { Brands } from "./component/brands/Brands";
import { ShippingBanner } from "./component/shipping/Shipping";
import { Review } from "./component/review/Review";
import { SocialCard } from "./component/review/SocialCard";
import { Product } from "./component/product/Product";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Categories />
      <Product />
      <div className="w-full px-20">
        <Review />
      </div>
      <SocialCard />
      <ShippingBanner />
      <Brands />
      <Footer />
    </>
  );
};

export default App;
