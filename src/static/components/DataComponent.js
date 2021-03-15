import React from 'react'
import windenergy from  '../css/images/wind-energy.jpg' ;
import ai from  '../css/images/ai.jpg' ;
import solar from  '../css/images/solar.jpg' ;
import girl from  '../css/images/girl.jpg' ;
import teen from  '../css/images/teen.jpg' ;
import man from  '../css/images/man.jpg' ;
import logo from  '../css/images/logo.png' ;
import logo_transparent from  '../css/images/logo_transparent.png' ;
import {BsHeartFill} from 'react-icons/bs'
import {FaCarSide} from 'react-icons/fa'
import {FaPiggyBank} from 'react-icons/fa'


export const NavImages = [

    {
        image: logo
    },
    {
        image: logo_transparent
    }
]

export const Goals = [

    {   
        image: <BsHeartFill />,
        name: "animated-image",
        value: "Sustainable habitat, clean air and a nourishable place for the humans of the world."
    },
    {   
        image: <FaCarSide />,
        name: "animated-image",
        value: "Creating product that go from manually doing all the tedious tasks to completing them on auto-pilot."
    },
    {   
        image: <FaPiggyBank />,
        name: "animated-image",
        value: "Help navigate people from high cost energy usage to low cost self reliant outcomes."
    }
]

export const Sectors = [

    {
        key: 1,
        image: windenergy,
        name: ' Energy Sector',
        value: {
            "one": "Reduces pollution",
            "two": "Saves Coal use of 1% each year",
            "three": "From vanishing resources to renewable"
        }
    },
    {
       key: 2,
       image: ai, 
       name: 'Artificial Intelligence',
       value: {
        "one": "Next Generation Technology",
        "two": "Featured in Top 10 products last year",
        "three": "Conditioned for enhancing Human Life simplicity"
    } 
    },
    {
        key: 3,
        image: solar,
        name: ' Solar Power',
        value: {
            "one": "Most important part of us",
            "two": "Reduces energy consumption by 10%",
            "three": "Providing better environment to the future"
        } 
     }
]

export const Reviews = [
    {

        key: 0,
        classname: "review-1",
        image: girl, 
        name: "Natasha",
        value: "I have been with them since 2014. They are the best in their product management."
    },
    {
        key: 1,
        classname: "review-2",
        image: teen,
        name: "Peter",
        value: "The virtual assistant I brought is easily one of the best items I own in my house."
    },
    {
        key: 2,
        classname: "review-3",
        image: man,
        name: "Nick",
        value: "Keep it simple and innovative. They seem to be pretty strict about that motto." 
    }
]



