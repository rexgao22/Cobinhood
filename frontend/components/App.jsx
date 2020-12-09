import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignUpContainer from "./session/signup_container";
import LogInContainer from "./session/login_container";
const App = () => (
  <div>
    <GreetingContainer />
    <SignUpContainer />
    <LogInContainer />
  </div>
);

export default App;
