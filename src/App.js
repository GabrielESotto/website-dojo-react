import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import { GlobalStyle } from './GlobalStyle';
import { servicesData, videoData } from './components/Services/data';
import VideoSection from './components/VideoSection/VideoSection';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Services data={servicesData}/>
      <VideoSection data={videoData} />
      <Faq />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
