import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Iframe from 'react-iframe'



class Sidebar extends Component {
    render () {
        return (
<div className="container-fluid">
    <h1>
    </h1>
    <p>
    Maps with some characteristic for Poland obtained from GUS.
    </p>

<Iframe url='https://edytabr.github.io/Test1/'
        width="350px"
        height="350px"
        id="myId"
        className="myClassname"
        display="inline"
        
        caption= "After Rain (Jeshu John - designerspics.com)"
        position="relative"/>

<Iframe url='https://edytabr.github.io/Test2/'
        width="350px"
        height="350px"
        id="myId"
        className="myClassname"
        display="inline"
        position="relative"/>

<Iframe url='https://edytabr.github.io/Test2/'
        width="350px"
        height="350px"
        id="myId"
        className="myClassname"
        display="inline"
        position="relative"/>

<Iframe url='https://edytabr.github.io/Test2/'
        width="350px"
        height="350px"
        id="myId"
        className="myClassname"
        display="inline"
        position="relative"/>

<Iframe url='https://edytabr.github.io/Test1/'
        width="350px"
        height="350px"
        id="myId"
        className="myClassname"
        display="inline"
        position="relative"/>


    
</div>

        );
    }
}

export default Sidebar;