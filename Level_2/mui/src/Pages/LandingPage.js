import Navbar from "../components/Navbar/Navbar.js";
import Hero from "../components/HeroSection/Hero.js";
import About from "../components/About/About.js";
import Services from "../components/Services/Services.js";
import Footer from "../components/Footer/Footer.js"; 
import { dividerClasses } from "@mui/material/Divider";



function LandingPage (){
    return(

        <div>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Footer />
        </div>
        
)};
export default LandingPage;