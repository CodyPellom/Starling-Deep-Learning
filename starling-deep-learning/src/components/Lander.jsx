
import React, { Component } from 'react'
import Styled from 'styled-components';

const LanderStyler = Styled.div`
background-color: grey;
font-family: 'Raleway';
color: white; 
#Slogan {
    padding-bottom: 200px;
    font-size: 30px;
}
#Slogan-Top {
    font-size: 50px;
}
#Starling-Rough-Logo {
    height: 250px;
    width: 250px;
}
`

export default class componentName extends Component {
    render() {
        return (
            <LanderStyler>
                
   
   <img id="Starling-Rough-Logo" src="https://i.imgur.com/HmyKxRV.gif" alt="logo"/>
   <h1 id="Slogan-Top">Starling Deep Learning</h1>
   <h4 id="Slogan">Living better. Now.</h4>
 </LanderStyler>
        )
    }
}
