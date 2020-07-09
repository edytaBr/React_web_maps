import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo2.png';



class Header extends Component {
    render () {
        return (
<header>
          <div className ="logo">
          <img src={logo}style={styles}/>
      </div>
      <nav>
          <ul>
                 <li className="First">
                 <Link to ="/">Homepage</Link>
                </li>
                <li>
                  <Link to ="/Products">Noe</Link>
                </li>
                <li className="First">
                 <Link to ="/Sidebar">Poland on maps</Link>
                </li>
                <li className="Last">
                  <a href='#'>Contact</a>
                </li>
                <li className="Last">
                  <a href='#'>MAPY</a>
                </li>


          </ul>
          
      </nav>
  </header>

        );
    }
}
const styles ={

      width: '30%',
      height: '30%',
    
};

export default Header;