import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Settings from './Home/Settings';
//import Options from './Home/Options';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Option/Settings" element={<Settings/>}/>
      </Routes>
    </Router>
  );
}

// pra que serve
// tantos códigos?
// se a vida
// não é programada
// e as melhores coisas
// não tem lógica

export default App;
