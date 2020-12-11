import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//   showcase: {
//     backgroundColor: 'black', 
//     width: 100,
//     height: 100,
//   }
// }))

const HomePage = (props) => {
  // const classes = useStyles();
  return (
    <main>
      <div className="homepage">
          <div className="left-side">
            <header className="homepage-header">
              Investing for Greater Good
            </header>
            <div className="homepage-text">
              Commission-free investing, No regret! You are next Bill and Steve.
            </div>
          </div>
          <img className="home-gif" src={window.images.homeGif} />
      </div>
    </main>
  );
};

export default HomePage;
