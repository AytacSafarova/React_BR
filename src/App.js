import './App.css';
import Projects from './Projects';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Map from './Map';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
        <Projects />
        <About />
        <Contact />
        <Map />
      </div>
      <Footer />
    </>


  );
}

export default App;
