import React, { Component } from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import './FooterComponent.css'

class FooterComponent extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.demoHandler = this.demoHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    demoHandler(e) {
        e.target.name == "demo" ? alert('Thanks for booking a demo. Hope you enjoy it !!!') : alert('Thank You for applyng an interview. Wish you Good Luck !!!')
    }

    clickHandler(e) {

        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({
            [name]: value,
        })
    }

    submitHandler(event) {

        this.state.name == '' || this.state.email == '' || this.state.message == '' ? alert('Error !! Please provide all the details.') : alert(`Your name: ${this.state.name}. \n Email: ${this.state.email}.\n Text: ${this.state.message}`)

        event.preventDefault()

    }
    
    render(){

        return(
            <footer>
                <section className="above-footer">
                    <ul>
                        <li>
                            <h5>Planning to Buy?</h5>
                            <p>Take a look to know more about our products before making a purchase.</p>
                            <button name="demo" onClick={this.demoHandler}>Book a demo</button>
                        </li>
                        <li>
                            <h5>Engineer?</h5>
                            <p>Talk to our team about joining Origin Divisions today.</p>
                            <button name="interview" onClick={this.demoHandler}>Book an interview</button>
                        </li>
                    </ul>
                </section>
                <section className="main-footer ">
                    <form onSubmit={this.submitHandler}> 
                        <label htmlFor="name" /> Name: 
                        <input type="text" id="name" name="name" placeholder="Name" onChange={this.clickHandler} /> <br />
                        <label htmlFor="email" /> Email: 
                        <input type="email" id="email" name="email" placeholder="Email" onChange={this.clickHandler} /> <br />
                        <span className="message">
                        <label htmlFor="message" /> Text: 
                        <textarea id="message" name="message" rows="3" placeholder="Message" onChange={this.clickHandler} /> <br />
                        </span>
                        <button type="submit" value="submit">Send</button> 
                    </form>
                    <ul> 
                        <p>SOLUTIONS</p>
                        <li><span>Repairs</span></li>
                        <li><span>Customer Support</span></li>
                        <li><span>Need help?</span></li>
                        <li><span>FAQ's</span></li>
                    </ul>
                    <ul> 
                        <p>COMPANY</p>
                        <li><span>Careers</span></li>
                        <li><span>Leadership</span></li>
                    </ul>
                </section>
                <small>Copyright <AiOutlineCopyrightCircle /> </small>
            </footer>
        )
    }
}

export default FooterComponent;