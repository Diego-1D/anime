<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import FeatureAnime from './components/FeatureAnime';
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyles';
=======
import React from "react";
import FeatureAnime from "./components/FeatureAnime";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyles";
>>>>>>> 3f4029c136b8475a16963affdb77da645bb90ef3

function App() {
  return (
    <Router>
      <GlobalStyle />
<<<<<<< HEAD
      {/* <Hero /> */}
      <FeatureAnime/>
    </Router>
=======
      <Hero />
      <FeatureAnime />
      <div>Hello world</div>
    </>
>>>>>>> 3f4029c136b8475a16963affdb77da645bb90ef3
  );
}

export default App;
