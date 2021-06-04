import React from 'react'
import homePageImage from '../resources/home-services-hero-bg.jpg'
import businessTrnsImg from '../resources/mitech-processing-service-image-01-80x83.png'
import webMobileImg from '../resources/mitech-processing-service-image-04-80x83.png'
import cloudImg from '../resources/mitech-processing-service-image-02-80x83.png'
import marketingImg from '../resources/mitech-processing-service-image-06-80x83.png'

import './HomePage.css'
import * as ReactBootstrap from 'react-bootstrap'

export const HomePage = () => {
    return (
        <div>
           <img className="homepageImg" src={homePageImage} />
           <div className="row">
           <div className="col-sm-6">
                    <p className="h4" style={{'text-align': 'left', 'padding-left': '15%'}}>OUR COMPANY</p>
                    <p className="home-heading" style={{'padding-left': '15%'}}>Accelerate Your</p>
                    <p className="home-heading" style={{'padding-left': '15%'}}>Business with our</p>
                    <p className="home-heading-blue">Digital Transformation</p>
                    <p className="home-heading" style={{'padding-left': '15%'}}>plan.</p>
                    <p className="home-description">We will customise Your IT solutions so that they work in harmony to create a solid foundation for your company. With our Customised Solutions we are looking for ways to simplify operations and reduce IT costs while meeting the demands of your business.  Your business will have every chance of success with the right technology roadmap in place ensuring the solution is right for you, propelling your business forward.</p>
                    <br/>
                    <p className="home-description">Privacy - Protect your business from data breaches by extending privacy and security across your entire cloud services. Having our solutions on your side will enable you to spend more time with your customers and engaging your business.</p>

           </div>
            <div className="col-sm-6">
            <ReactBootstrap.Accordion>
                <ReactBootstrap.Card>
                    <ReactBootstrap.Accordion.Toggle className="toggle" as={ReactBootstrap.Card.Header} variant="link" eventKey="0">
                        Web & Mobile Development
                    </ReactBootstrap.Accordion.Toggle>
                    <ReactBootstrap.Accordion.Collapse eventKey="0">
                        <ReactBootstrap.Card.Body>
                        <img src={webMobileImg}/>
                        <p>Providing a fit for purpose site for your business is our drive, we will determine what you need and customise a solution for you</p>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
                <ReactBootstrap.Card>
                    <ReactBootstrap.Accordion.Toggle className="toggle" as={ReactBootstrap.Card.Header} variant="link" eventKey="1">
                        Cloud Server
                    </ReactBootstrap.Accordion.Toggle>
                    <ReactBootstrap.Accordion.Collapse eventKey="1">
                        <ReactBootstrap.Card.Body>
                        <img src={cloudImg}/>
                        <p>Providing a everything in the cloud secure service, to ensure you can work anywhere, anytime and clients can engage with your services at all times.</p>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
                <ReactBootstrap.Card>
                    <ReactBootstrap.Accordion.Toggle className="toggle" as={ReactBootstrap.Card.Header} variant="link" eventKey="2">
                        Marketing Online
                    </ReactBootstrap.Accordion.Toggle>
                    <ReactBootstrap.Accordion.Collapse eventKey="2">
                        <ReactBootstrap.Card.Body>
                         <img src={marketingImg}/>
                        <p>With many social media platforms available our team will identify the strategy that will work cross these platforms enhancing your domain profile.</p>
                         </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
                <ReactBootstrap.Card>
                    <ReactBootstrap.Accordion.Toggle className="toggle" as={ReactBootstrap.Card.Header} variant="link" eventKey="3">
                        Business Transformation
                    </ReactBootstrap.Accordion.Toggle>
                    <ReactBootstrap.Accordion.Collapse eventKey="3">
                        <ReactBootstrap.Card.Body>
                        <img src={businessTrnsImg}/>
                        <p>Transforming and realigning the uptake of technologies and finding ways to work collaboratively and effeciently.</p>   
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Accordion.Collapse>
                </ReactBootstrap.Card>
            </ReactBootstrap.Accordion>
            </div>
            </div>
            <hr/>
        </div>
    )
}

export default HomePage