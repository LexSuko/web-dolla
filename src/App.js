import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
// import Animate from './pages/animate';

function App() {
  return (
    <Router path="/web-dolla">
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/signin" element={<SigninPage/>} exact/>
        {/* <Route path="/" element={<Animate/>} exact/> */}
      </Routes>
    </Router>
  );
}

export default App;
