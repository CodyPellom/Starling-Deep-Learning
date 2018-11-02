
import React, { Component } from 'react'
import Styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';

const LanderStyler = Styled.div`
background-color: black;
font-family: 'Raleway';
color: white; 
#Slogan {
    padding-bottom: 45px;
    font-size: 20px;
}
#Slogan-Top {
    font-size: 50px;
}
#Starling-Rough-Logo {
    height: 200px;
    width: 200px;
}
button {

}
`

export default class componentName extends Component {
    render() {
        return (
            <LanderStyler>     
   <Bounce>
   <img id="Starling-Rough-Logo" src="https://i.imgur.com/B3ctzcA.gif" alt="logo"/>
   </Bounce>
   <Bounce>
   <h1 id="Slogan-Top">Starling Deep Learning</h1>
   <h4 id="Slogan">Living better. Now.</h4>
   </Bounce>
   <button>Let's get started</button>
 </LanderStyler>

        )
    }
}
