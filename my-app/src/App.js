import React, {Component} from 'react';
import {
  BrowserRouter as Router,
   Route,
    Link
  } from 'react-router-dom';
//import components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import Products from './components/pages/product'
import Sidebar from './components/pages/sidebar'






//includes
import './Assets/css/default.min.css';
function App() {
  return (

    <Router>
    <div className="App">
      <Header/>
      <Route exact path='/' component={Homepage}/> 
      <Route exact path='/Products' component={Products}/> 
      <Route exact path='/Sidebar' component={Sidebar}/> 

    </div>
    </Router>
  );
}

export default App;
