import "./App.css";
import CarrosselSection from "./components/CarrosselSection";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import FourSection from "./components/FourSection";
import Header from "./components/Header";
import SecondSection from "./components/SecondSection";
import SectionAbout from "./components/SectionAbout";
import SectionFaq from "./components/SectionFaq";
import TestimonySection from "./components/TestimonySection";
import ThirdSection from "./components/ThirdSection";
import WhatsApp from "./components/WhatsApp";


function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <CarrosselSection />
      <FourSection />
      <SectionAbout />
      <TestimonySection />
      <SectionFaq />
      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;
