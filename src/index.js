import React from "react";

import Logo from "./components/Logo"
import Photo from "./components/Photo";

const Main = () => {
  return (
      <>
      <Logo />
      <Photo count={10} file={require("./assets/images/Gatão.jpg")}/>
      <Photo count={13} file={require("./assets/images/Gatinho.jpg")}/>
      </>
  ) 
}

export default Main;