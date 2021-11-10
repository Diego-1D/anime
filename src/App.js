import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import FeatureAnime from './components/FeatureAnime';
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <Hero /> */}
      <FeatureAnime/>
    </Router>
  );
}

export default App;
