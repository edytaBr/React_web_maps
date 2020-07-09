import React, { Component } from 'react';

import Iframe from 'react-iframe'



class Homepage extends Component {
    render () {
        return (
<div className="container-fluid">
    <h1>
       About
    </h1>
    <p>
    Corona statistic with R ratio
    </p>

    <Iframe url="https://edytabr.github.io/Covid19_maps/"
        width="100%px"
        height="100%px"
        id="myId"
        className="myClassname"
        display="initial"
        position="absolute"/>


    
</div>


        );
    }
}

export default Homepage;