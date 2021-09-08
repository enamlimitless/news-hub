import React from "react";
import Category from "../Category/Category";
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
      <Category />
      <Footer />
    </div>
  );
};

export default Home;
