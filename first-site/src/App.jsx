import "./App.css";
import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import WorkFlow from "./Components/WorkFlow";
import Price from "./Components/Price";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Features />
        <WorkFlow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
