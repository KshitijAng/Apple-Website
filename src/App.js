import './App.css';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import PreFooter from './components/prefooter';
import Video from './components/video';

function App() {
  return (
    <>
    <Navbar />
    <Hero1 />
    <Video />
    <Hero2 />
    <Hero4 />
    <Hero5 />
    <PreFooter />
    <Footer />
</>
  );
}

export default App;
