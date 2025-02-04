
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/about";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

