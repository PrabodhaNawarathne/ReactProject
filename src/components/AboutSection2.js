import React from 'react'
import './About.css'
import bgImage from '../resources/5b370aadcc00b647201e716b2673a48aba.jpg'

export const AboutSection2 = () => {
    const listTitleStyle = { 
        color: 'rgb(2, 2, 189)',
        'font-size':'2rem', 
           
    }
    const listBodyStyle = {
        color: 'rgb(29, 28, 28)', 
        'text-align':'left',
          
    }
    // const bgImageStyle = {
    //     width: '100%',
    //     height: "400px",
    //     backgroundImage: `url(${bgImage})`
    //         }
    return (
        <div>
            <p className="designTitle" style={{opacity:0.6}}>We excel in delivering</p>
            <p className="designTitle" style={{opacity:0.6}}>optimal solutions.</p>
        <div  style={{backgroundImage: `url(${bgImage})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 'padding-bottom':'60px'}}>
            <div className="row">
                <div className="col-sm-4 offset-1">
                <br /><br /><p className="home-heading" style={listTitleStyle}>Warranty Management IT</p>
                    <p className="h5" style={listBodyStyle}>
                    Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty management.
                    </p>
                </div>
                <div className="col-sm-4 offset-2">
                <br /><br /><p className="home-heading" style={listTitleStyle}>Product Engineering & Services</p>
                    <p className="h5" style={listBodyStyle}>
                    Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.                    
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 offset-1">
                <br /><br /><p className="home-heading" style={listTitleStyle}>Quality Control System</p>
                    <p className="h5" style={listBodyStyle}>
                    It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system.                    
                    </p>
                </div>
                <div className="col-sm-4 offset-2">
                    <br /><br /><p className="home-heading" style={listTitleStyle}>Infrastructure Integration Technology</p>
                    <p className="h5" style={listBodyStyle}>
                    At Techexpozed, we have a holistic and integrated approach towards core modernization to experience technological evolution.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 offset-1">
                    <br /><br /><p className="home-heading" style={listTitleStyle}>Highly Professional Staffs</p>
                    <p className="h5" style={listBodyStyle}>
                    Having obtained the official & formal training in IT technology and technical fields, our staffs know more than what they show.
                    </p>
                </div>
                <div className="col-sm-4 offset-2">
                    <br /><br /><p className="home-heading" style={listTitleStyle}>Information Security Management</p>
                    <p className="h5" style={listBodyStyle}>
                    Information security has been a rising issue lately due to a series of scandals from big companies, rest assured, we're here.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default AboutSection2