import Navigation from "./components/navbar/Navigation";
import Heroes from "./components/heroes/Heroes";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Experiences from "./components/experience/Experiences";
import Footer from "./components/footer/Footer";
import ButtonBackToTop from "./components/btnBack/ButtonBackToTop";

function App() {
  return (
    <>
      <Navigation />
      <Heroes />
      <Profile />
      <Skills />
      <Project />
      <Experiences />
      <Footer />
      <ButtonBackToTop />
    </>
  );
}

export default App;
