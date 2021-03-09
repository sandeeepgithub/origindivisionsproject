import React, { useState } from  'react'
import NavbarComponent from './components/NavbarComponent'
import HomeComponent from './components/HomeComponent'
import FooterComponent from './components/FooterComponent'
import './Main.css'

function Main() {

    const [position, setPosition] = useState(null)

    if(position !== null) {
        setInterval(() => {
            setPosition(null)
        }, 1000);
    }

    return(
        <div>
            <NavbarComponent setPosition={setPosition} />
            <HomeComponent position={position} />
            <FooterComponent />
        </div>
    )
}

export default Main