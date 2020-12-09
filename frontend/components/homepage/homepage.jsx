import React from "react";
import HomeNavBar from "../nav_bar/home_nav_bar"

const HomePage= (props) => {
  return (
    <main>
      <HomeNavBar />
      <div>
        <header>Investing for Greater Good</header>
        <div>
          Commission-free investing, No regret!
          You are next Bill and Steve.
        </div>
      </div>
    </main>
  );
};

export default HomePage;
