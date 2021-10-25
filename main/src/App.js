import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    
    <Router>
       
        { window.location.pathname !==  "/" ? <Header />:""}
        <Route exact path="/">
         <Home />
        </Route> 
        <Route exact path="/about">
         <About />
        </Route>
        <Route exact path="/portfolio">
         <Portfolio />
        </Route> 
        <Route exact path="/contact" >
         <Contact />
        </Route> 
        <Route exact path="/resume" >
         <Resume />
        </Route> 
        { window.location.pathname !==  "/" ? <Footer />:""}  
    </Router>
    
    
  );
}

export default App;
