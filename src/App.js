import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import "./App.css";
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/value';
import Contact from './components/Contact/contact';
import GetStarted from './components/GetStarted/getstarted';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
    <Header/>
    <Hero />
    </div>
    <Companies />
    <Residencies />
    <Value />
    <Contact />
    <GetStarted />
    <Footer />
    </div>
  );
}

export default App;
