import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import { Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
const location=useLocation();
  console.log(location)
  return (
    
    <>
       
        {/* { location.pathname !==  "/" ? <Header />:"" } */}
        {/* <Route exact path="/">
         <Home />
        </Route>  */}
        <Header />
        <Route exact path="/">
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
        <Footer />
        {/* { location.pathname !==  "/" ? <Footer />:"" }   */}
    </>
    
/* <>
    <Header />
    <About />
    <Portfolio />
    <Resume />
    <Contact />
    <Footer />
</> */
    
    
  );
}

export default App;
