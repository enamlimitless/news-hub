import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import Custom from "../Header/Custom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Custom/>
      <Footer />
    </div>
  );
};

export default Home;
