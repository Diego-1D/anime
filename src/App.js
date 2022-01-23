import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
