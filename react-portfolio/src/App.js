import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      
        
        { window.location.pathname !==  "/" ? <Header />:""}
        
        {/* <About /> 
          <Portfolio />  */}

        {/* <Link to="/portfolio">
          Portfolio
        </Link> */}
        {/* <Link to="/resume">
          Resume
        </Link>
        <Link to="/contact">
          Contact
        </Link>  */}
      

      
        {/* <Route path="/" exact>
          <Home />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route> 
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route> 
        {/* <Route path="/resume" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <About />
        </Route>  */}
      </div>
    </Router>
  );
}

export default App;
