import React from "react";
import { GlobalFonts } from "./assets/styles/fonts";
import { GlobalResetStyle } from "./assets/styles/cssReset";
import "./Library.scss";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalResetStyle />
      <Home />
    </>
  );
}

export default App;
