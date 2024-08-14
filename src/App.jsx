import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";
import Test from "./Test.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallex from "./components/parallax/Parallex.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import {Toaster} from "sonner";

function App() {

  return (
      <>
          {/*<Test/>*/}
          <section id="Homepage">
              <Navbar/>
              <Hero/>
          </section>
          <section id="Services">
              <Parallex type="services"/>
          </section>
          <section>
              <Services/>
          </section>
          <section id="Portfolio">
              <Parallex type="portfolio"/>
          </section>
          <Portfolio/>
          <section id="Contact">
              <Contact/>
          </section>
          <Toaster richColors />
      </>
  )
}

export default App
