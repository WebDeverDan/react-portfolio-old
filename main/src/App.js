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
      <div className="App">
      
        
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
        <Route path="/contact" exact>
        <Contact />
        </Route> 
        <Route path="/resume" exact>
        <Resume />
        </Route> 
         
        { window.location.pathname !==  "/" ? <Footer />:""}
      </div>
    </Router>
  );
}

export default App;
