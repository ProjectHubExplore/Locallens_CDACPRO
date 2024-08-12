//import logo from './logo.svg';
import './App.css';
import Contact from './component/Contact';
import Features from './component/Features';
import Footer from './component/Footer';
import Header from './component/Header';
import Mainbody from './component/Main';
import Service from './component/Services';
import Slider from './component/Slider';



function App() {
  return (
   <>
    <Header/>
    <Mainbody/>
    <Slider/>
    <Features/>
    <Service/>
    <Contact/>
    <Footer/>
   </>
  );
}

export default App;
