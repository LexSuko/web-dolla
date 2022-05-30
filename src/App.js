import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
// import Animate from './pages/animate';

function App() {
  return (
    <HashRouter ba>
      <Routes>
        <Route path="/web-dolla" element={<Home/>} exact/>
        <Route path="/signin" element={<SigninPage/>} exact/>
        {/* <Route path="/" element={<Animate/>} exact/> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
