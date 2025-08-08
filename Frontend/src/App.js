import React, { useState } from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Hero from './Components/Hero.js';
import Services from './Components/Services.js';
import Pricing from './Components/Pricing.js';
import LatestReleases from './Components/LatestReleases.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import SignIn from './Components/SignIn.js';
import SignUp from './Components/SignUp.js';
import './App.css';


const MainContent = () => (
  <>
    <Hero />
    <Services />
    <Pricing />
    <LatestReleases />
    <About />
    <Contact />
  </>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' && <MainContent />}
        {currentPage === 'signIn' && <SignIn setCurrentPage={setCurrentPage} />}
        {currentPage === 'signUp' && <SignUp setCurrentPage={setCurrentPage} />}
      </main>
      <Footer />
    </>
  );
};

export default App;