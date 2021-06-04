import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import * as ReactBootstrap from 'react-bootstrap'
import carouselImg1 from '../../resources/Wed-Design-Work-1080x675.jpg'
import carouselImg2 from '../../resources/web-design-abudhabi.png'
import carouselImg3 from '../../resources/web-development.jpg'
import './ourServices.css'
import wallpaper from '../../resources/wall-paper.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const WebPackages = () => {

    return (
        <div style={{backgroundImage: `url(${wallpaper})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 'padding-bottom':'60px'}}>
            <p className="header-xl">Website WebPackage</p>
        <div className="col-sm-10 offset-1">
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                     style={{width: '950px', height: '550px'}}
                    src={carouselImg1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                     style={{width: '950px', height: '550px'}}
                    src={carouselImg2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    style={{width: '950px', height: '550px'}}
                    src={carouselImg3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="col-sm-12">
            <p className="design-card-maintitle" style={{'padding-bottom':'5%'}}>Affordable price plans for you!</p>
            <div className="row" style={{alignItems: 'center',}}>
                <div className="col-md-3 offset-1" style={{ }}>
                     <ReactBootstrap.Card border="primary" style={{ width: '100%', hover:' rgb(227, 204, 241)' }}>
                        <ReactBootstrap.Card.Body>
                        <ReactBootstrap.Card.Title style={{color: 'black'}}>INTRO</ReactBootstrap.Card.Title>
                        <ReactBootstrap.Card.Title style={{color: 'black'}}>$599</ReactBootstrap.Card.Title>
                        <ReactBootstrap.Button variant="outline-primary" size="lg">Get Started</ReactBootstrap.Button>
                        <ReactBootstrap.Card.Text>
                        <br /><ul className="h5" style={{color: 'rgb(29, 28, 28)', 'list-style-type': 'none', 'text-align':'left'}}>
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Single Page Website</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Responsive Design</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Static Webpage</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Google Analytics Setup</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Search Engine Optimisation</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Domain Hosting Support</li><br />
                        </ul>
                        </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
                <div className="col-md-3" style={{'margin-left':'30px'}}>
                    <ReactBootstrap.Card border="primary" style={{ width: '100%' }}>
                        <ReactBootstrap.Card.Body>
                        <ReactBootstrap.Card.Title style={{color: 'black'}}>BASIC</ReactBootstrap.Card.Title>
                        <ReactBootstrap.Card.Title style={{color: 'black'}}>$899</ReactBootstrap.Card.Title>
                        <ReactBootstrap.Button variant="outline-primary" size="lg">Get Started</ReactBootstrap.Button>
                        <ReactBootstrap.Card.Text>
                        <br /><ul className="h5" style={{color: 'rgb(29, 28, 28)', 'list-style-type': 'none', 'text-align':'left'}}>
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Upto 5 Pages Website</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Responsive Design</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Static Webpage</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Google Analytics Setup</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Search Engine Optimisation</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Domain Hosting Support</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Home page slider Setup</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Contact Form<li>(Messages sent in email)</li></li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Secure Certificate Setup<li>(https SSL)</li></li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Email Address Setup</li><br />
                        </ul>
                        </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
                <div className="col-md-3" style={{'margin-left':'30px'}}>
                    <ReactBootstrap.Card border="primary" style={{ width: '100%' }}>
                        <ReactBootstrap.Card.Body>
                        <ReactBootstrap.Card.Title style={{color: 'black'}}>PLUS</ReactBootstrap.Card.Title>
                        <ReactBootstrap.Card.Title style={{color: 'black'}}>$1199</ReactBootstrap.Card.Title>
                        <ReactBootstrap.Button variant="outline-primary" size="lg">Get Started</ReactBootstrap.Button>
                        <ReactBootstrap.Card.Text>
                        <br /><ul className="h5" style={{color: 'rgb(29, 28, 28)', 'list-style-type': 'none', 'text-align':'left'}}>
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Upto 10 Pages Website</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Responsive Design</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Static Webpage</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Google Analytics Setup</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Search Engine Optimisation</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Domain Hosting Support</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Home page slider Setup</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Contact Form<li>(Messages sent in email)</li></li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Secure Certificate Setup<li>(https SSL)</li></li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Email Address Setup</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> API Integration</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Live Chat Support</li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Social Media Support<li>(Facebook, Instagram, LinkedIn, Twitter Page)</li></li><br />
                            <li><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/> Google Adwords Setup</li><br />
                        </ul>
                        </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
            </div>
        </div>
        </div>
    )
}
export default WebPackages