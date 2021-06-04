import React from 'react'
import designImage from '../resources/managed-it-services-hero-bg.jpg'
import './Design.css'
import * as ReactBootstrap from 'react-bootstrap'
// import { fadeInUp } from 'react-animations'
// import Radium, {StyleRoot} from 'radium';

export const Design = () => {

    // const styles = {
    //     fadeInUp: {
    //       animation: 'x 1s',
    //       animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    //     }
    //   }
    return (
        <div>
             <img className="homepageImg" src={designImage} />
             <div className="col-sm-6 offset-3">
                <p className="designTitle">We offer flexible website services that can be customised to</p>
                <p className="designTitleBlue">suit your requirements.</p>
             </div>
             <hr/>
             <div className="row">
                <div className="col-md-3">
                     <ReactBootstrap.Card bg="secondary" style={{ width: '30rem' }}>
                        <ReactBootstrap.Card.Header className="design-card-maintitle">Phase 1</ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                        <ReactBootstrap.Card.Title className="design-card-subtitle">Design</ReactBootstrap.Card.Title>
                        <ReactBootstrap.Card.Text>
                        <br /><ol className="h5" style={{color: 'rgb(29, 28, 28)'}}>
                            <li>Information Architecture – This involves development of a Sitemap. This stage will require a sign-off by the customer.</li><br />
                            <li>Graphic Design – Including visual and functional page layout, menu design, branding, and overall website look-and-feel.</li>
                        </ol>
                        </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
                <div className="col-sm-3 offset-1">
                    <ReactBootstrap.Card bg="secondary" style={{ width: '30rem' }}>
                        <ReactBootstrap.Card.Header className="design-card-maintitle">Phase 2</ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                        <ReactBootstrap.Card.Title className="design-card-subtitle">Web Development</ReactBootstrap.Card.Title>
                        <ReactBootstrap.Card.Text>
                        <br /><ol className="h5" style={{color: 'rgb(29, 28, 28)'}}>
                            <li>Design Cut Up – Using the graphic images created in Phase 1 and polishing in a manner that allows for presentation as a website.</li><br />
                            <li>Coding – Those images and content will be incorporated into a web site layout with the necessary programming code(PHP, C#, JAVA, Python).</li>
                        </ol>
                        </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
                <div className="col-sm-3 offset-1">
                    <ReactBootstrap.Card bg="secondary" style={{ width: '30rem' }}>
                        <ReactBootstrap.Card.Header className="design-card-maintitle">Phase 3</ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                        <ReactBootstrap.Card.Title className="design-card-subtitle">Content Management</ReactBootstrap.Card.Title>
                        <ReactBootstrap.Card.Text>
                        <br /><p className="h5" style={{color: 'rgb(29, 28, 28)'}}>
                            Edit content on website, you may like to consider using a Content Management System. We have several options available.
                        </p>
                        </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
             </div>
        </div>
       
    )

}

export default Design