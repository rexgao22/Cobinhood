import React from "react";


const HomePage = (props) => {
  return (
    <main>
      <div className="homepage">
        <div className="left-side">
          <header className="homepage-header">
            Investing for Greater Good
          </header>
          <div className="homepage-text">
            Commission-free investing, plus the tools you need to put your money
            in motion. Sign up and get your first stock for free. Certain
            limitations apply.
          </div>
        </div>
        <img className="home-gif" src={window.images.CobVid} />
      </div>
    </main>
  );
};

export default HomePage;
