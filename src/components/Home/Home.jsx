import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import Header from "../Header/Header";
import HomeArticle from "../HomeArticle/HomeArticle";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HomeArticle />
      <Footer />
    </div>
  );
};

export default Home;
