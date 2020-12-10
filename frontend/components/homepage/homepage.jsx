import React from "react";
import HomeNavBar from "../nav_bar/home_nav_bar"

const HomePage= (props) => {
  return (
    <main>
      <HomeNavBar />
      <div className="homepage">
        <header className="homepage-header">Investing for Greater Good</header>
        <img className="home-gif" src={window.images.homeGif} />
        <div className="homepage-text">
          Commission-free investing, No regret! You are next Bill and Steve.
        </div>
      </div>
    </main>
  );
};

export default HomePage;
