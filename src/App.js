import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home';
import SingleAnime from './pages/SingleAnime';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/singleanime/:idanime' element={<SingleAnime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
