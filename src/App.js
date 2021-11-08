import React from "react";
import FeatureAnime from "./components/FeatureAnime";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <FeatureAnime />
      <div>Hello world</div>
    </>
  );
}

export default App;
