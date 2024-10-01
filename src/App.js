// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeaderNew from './HeaderNew';
import Home from './Home/Home';
import Galary from './Galary/Galary';
import HomeNew from './HomeNew/HomeNew';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer';
import FooterNew from './FooterNew';
import TeamPage from './Team/Team';

const App = () => {
  return (
    <Router>
      <HeaderNew />
      <Routes>
        <Route path="/" element={<HomeNew />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galary" element={<Galary />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <FooterNew />
    </Router>
  );
};

export default App;
