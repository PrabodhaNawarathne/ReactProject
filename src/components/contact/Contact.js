import React, {useState, useEffect, Component} from 'react'
import contactus from '../../resources/best-contact-us-pages-2.png'
import phonIcon from '../../resources/call.png'
import emailIcon from '../../resources/mail.png'
import './Contact.css'
import * as ReactBootstrap from 'react-bootstrap'
import { MDBIframe } from 'mdbreact'
import Axios from 'axios'

class Contact extends Component {

//     const [personName, setPersonName ] = useState('')
//     const [emailAddress, setEmailAddress] = useState('')
//    // const [enquirySubject, setEnquirySubject] = useState('')
//     const [enquiry, setEnquiry] = useState('')

    constructor(props){
        super(props)
        this.state={
            personName:'',
            emailAddress: '',
            enquiry:''
        }
    }

    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitEnquiry = e =>{
        e.preventDefault()
        Axios.post("http://localhost:3001/api/insert", this.state).then(()=>{
            alert("successfull insert !")
        });
    };

    render(){
        const {personName, emailAddress, enquiry} = this.state
    return (
        <div>
            
            <div className="col-sm-10 offset-1">
                <p className="designTitle">Please complete the form, and we will endeavour to get back to you as soon as possible.</p><br />
            </div>
            <div className="row offset-1">

                <div className="col-sm-4">
                {/* <div className="form">
                    <input name="personName" value={personName} type="name" onchange = {(e)=>{
                            setPersonName(e.target.value)
                        }} />
                    <input name="" type="emailAddress" value={emailAddress} onchange = {(e)=>{
                            setEmailAddress(e.target.value)
                        }} />
                    <input name="" type="enquiry" value={enquiry} onchange = {(e)=>{
                            setEnquiry(e.target.value)
                        }} />
                    <button onClick={submitEnquiry}>submit</button>
                </div> */}
                
                    <ReactBootstrap.Form onSubmit={this.submitEnquiry}>
                        <ReactBootstrap.Form.Group name="personName" value={personName} onchange = {this.changeHandler}>
                            <ReactBootstrap.Form.Control size="lg" type="text"   placeholder="name" />
                        </ReactBootstrap.Form.Group>
                    </ReactBootstrap.Form>
                    <ReactBootstrap.Form>
                        <ReactBootstrap.Form.Group name="emailAddress" value={emailAddress} onchange = {this.changeHandler}>
                            <ReactBootstrap.Form.Control size="lg" type="email"  placeholder="name@example.com" />
                        </ReactBootstrap.Form.Group>
                    </ReactBootstrap.Form>
                    <ReactBootstrap.Form>
                    <ReactBootstrap.Form.Group controlId="enquirySubject">
                    <ReactBootstrap.Form.Control as="select" size="lg">
                        <option>Website Design & Development</option>
                        <option>E-commerce Website</option>
                        <option>Google Adwords</option>
                        <option>Custom Website</option>
                        <option>Mobile Apps</option>
                        <option>SEO</option>
                        <option>Social Media Marketing</option>
                        <option>IT Cleaning Services</option>
                        <option>Support</option>
                    </ReactBootstrap.Form.Control>
                    </ReactBootstrap.Form.Group>
                    </ReactBootstrap.Form>
                    
                    <ReactBootstrap.Form>
                    <ReactBootstrap.Form.Group name="enquiry" value={enquiry} onchange = {this.changeHandler} >
                        <ReactBootstrap.Form.Control as="textarea"  placeholder="Please let us know if you need guidance or how we can help" rows={3} />
                    </ReactBootstrap.Form.Group>
                    </ReactBootstrap.Form>
                    <ReactBootstrap.Button variant="primary" className="float-left" type="submit" >
                        Send Message
                    </ReactBootstrap.Button>
                </div>
                <div className="col-sm-6">
                    <img className="contactus" src={contactus} />
                </div>
            </div>
            <br /><br /><br /><br />
            <div className="row">
                <div className="col-sm-6">
                    <div id="map-container-google-1" className="z-depth-1-half map-container" >
                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                        style={{border:0}} allowfullscreen></iframe>
                                {/* <MDBIframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" /> */}

                    </div>
                </div>
                
                <div className="col-sm-6">
                    <ReactBootstrap.Card>
                        <ReactBootstrap.Card.Body>
                            <ReactBootstrap.Card.Text>
                            <img style={{width:'15%', 'padding-bottom':'65px', 'padding-right':'50px'}} src={phonIcon}/> 0800190068668
                            </ReactBootstrap.Card.Text>
                            <ReactBootstrap.Card.Text>
                            <img style={{width:'10%' }} src={emailIcon}/> support@techexpozed.co.nz
                            </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
            </div>
        </div>
    )
}
}

export default Contact;