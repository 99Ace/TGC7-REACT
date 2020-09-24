import React from 'react';
// import react router stuff
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import bootstrap
import "bootstrap/dist/css/bootstrap.css";
import './styles/main.css'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import ContactFormSubmitted from "./pages/ContactFormSubmitted";


function App() {
  return (
    <Router>
        <nav>
            <ul className='d-flex justify-content-end ml-auto mr-0 '>
                <li className='my-3 mx-2 list-unstyled'> <Link to="/" className='text-decoration-none text-light btn btn-dark'>Home</Link> </li>
                <li className='my-3 mx-2 list-unstyled'> <Link to="/about" className='text-decoration-none text-light btn btn-dark'>About Us</Link> </li>
                <li className='my-3 mx-2 list-unstyled'> <Link to="/contact" className='text-decoration-none text-light btn btn-dark'>Contact</Link> </li>
            </ul>
        </nav>
        <Switch>
            <Route exact path='/'>
                <HomePage/>
            </Route>
            <Route exact path='/about'>
                <AboutUs/>
            </Route>
            <Route exact path='/contact'>
                <ContactUs/>
            </Route>
            <Route exact path="/form-submitted">
              <ContactFormSubmitted/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
