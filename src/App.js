import './App.css';
import { About } from './components/about/About';
import Certificate from './components/certificate/Certificate';
import ContactMe from './components/contactme/ContactMe';
import Education from './components/education/Education';
import { Experience } from './components/experience/Experience';
import Footer from './components/footer/Footer';
import { Home } from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { Project } from './components/projects/Project';
import Skills from './components/skills/Skills';

function App() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
     <Navbar/>
     <Home scrollToAbout={scrollToAbout}/>
     <About/>
     <Experience/>
     <Project/>
     <Skills/>
     <Education/>
     <Certificate/>
     <ContactMe/>
     <Footer/>
    </div>
  );
}

export default App;
