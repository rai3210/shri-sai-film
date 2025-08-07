import Header from "./Component/Header.js"
import About from "./Component/About.js" 
import Contact from "./Component/Contact.js"; 
import Footer from "./Component/Footer.js"; 
import Hero from "./Component/Hero.js";
import LatestReleases from "./Component/LatestReleases.js"; 
import Pricing from "./Component/Pricing.js";
import Services from "./Component/Services.js";
import Register from "./Component/Register.js";
import './App.css';

function App() {
  return (
   <>
    <h1>Hello from react app</h1>
    <Header/>
    <Register/>
      <Hero />
      <LatestReleases />
      <Services />
      <Pricing />
      <About />
      <Contact />
      <Footer />
   
    

   </>
  );
}

export default App;