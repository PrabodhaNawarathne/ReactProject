import React from 'react'
import aboutus from '../resources/aboutus.png'
import img1 from '../resources/mitech-box-image-style-06-image-01-120x120.png'
import img2 from '../resources/mitech-box-image-style-06-image-02-120x120.png'
import img3 from '../resources/mitech-box-image-style-06-image-03-120x120.png'

import './About.css'
import AboutSection2 from './AboutSection2'
import ScrollAnimation from 'react-animate-on-scroll'
import * as ReactBootstrap from 'react-bootstrap'
import WOW from 'react-wow';

// componentDidMount =()=> {
//     if (typeof window !== 'undefined') {
//     const wow = new WOW.WOW({
//         live: false,
//     })
//     wow.init()
//     }
// }
export const About = () => {


    const h5Style ={
        color:'black',
        opacity:'0.6',
        'text-align': 'left',
        'font-size': '1.75rem',
        'font-family': 'CerebriSans'
    }


    return (
        <div>
            <img className="aboutusImg" src={aboutus} />
            <div className="col-sm-10 offset-1">
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h4 align-self-center"> OUR COMPANY </p>
                <p className="home-heading" style={{'text-align': 'center'}}>We provide customised web solutions that vow your success</p><br /><br />
           </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}> New Zealand is well known and prominent in welcoming and promoting ethnic diversities into our neighbourhoods. As a nation, Maori welcomed the English here to safely trade and reside through a partnership contract known as Te Tiriti o Waitangi. Thenceforth, Our nation welcomed people from all corners of the world. As a result of this, the ethnic communities are increasing which makes our nation to grow and develop more ethnically diverse and multicultural neighbourhoods in our cities.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>We strongly believe in ethnic diversity which brought productive growth to our teamwork in this competitive market. Our team is accompanied by ethnically diverse people who contribute great customized solutions in IT. We work together to support and exchange innovative ideas to achieve business goals. We successfully delivered numerous projects in the areas of digital marketing, web designing and development.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}> As one of the best web design companies in New Zealand, our success has grown in our team with creative professionals from diverse ethnicities. Our team’s innovative thoughts are shown in the project’s that we are a part of. Once our client’s requirements are documented, our team use the latest techniques and technologies.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>Our diversity is the most powerful thing which we utilize to offer exceptional services to our customers. We acknowledge, celebrate and deeply value our cultural richness and strength to deliver an astounding professional experience in custom-built websites. Our team is always looking to partner with our community to provide experience to immigrants and to provide end-to-end IT solutions.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>Our team provides an all round approach based upon our incredible Māori ancestors of this land that have welcomed us. Our team encourage each other in respect of Te whare Tapa Wha - The four walls of a house, which is an integrated view of health according to Māori. By nurturing and strengthening all 4 walls, we encourage our team to look after their health and wellbeing, as well as the health and wellbeing of their whānau.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>One of these 4 walls is our Spiritual Wellbeing, this is acknowledged to be the most essential requirement for health and the life force that determines who you are. it is understood that without a spiritual awareness, an individual can be lacking in wellbeing and more prone to ill health. Our team has different views on spiritual wellbeing, but all are equally important. There is no right or wrong way to think of or experience spiritual wellbeing.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>Another is our Mental Wellbeing, it is your mind, heart, conscience, thoughts and feelings. It’s about how you feel, as well as how you communicate and think. Our team regularly check in with each other.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>Mental wellbeing is important for everyone, regardless of whether or not you’ve experienced mental illness or distress. You can express your feelings and reach out for support from our wider whānau and colleagues if you need to.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>Another is Physical Wellbeing, It is about how your body grows, feels and moves, and how you care for it. Nourishing and strengthening your physical wellbeing helps you to cope with the ups and downs and life. Feeling physically well helps you feel mentally well. We have a target to strengthen each other by making commitment to each and having a plan in place.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>Another is Famiy (Whānau), this is about extended relationships – it’s not just your immediate relatives, it’s your friends, colleagues, community and the people you care about. Everyone has a place and a role to fulfil within their whānau, and whānau contributes to your individual wellbeing and identity.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>Spending time with whānau, doing things for them and getting involved gives you a feeling of purpose, connection and wellbeing. It benefits you and strengthens your whānau. As a core source of strength, support, security and identity, whānau plays a central role in your wellbeing. This is the core of what makes the difference with the immigrants we are helping to get established and feel at home with a community of aroha and support.</p><br /><br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={50} animateOut='fadeOut'>
                <p className="h5" style={h5Style}>Our Ethnic community thrive through the practice and celebration of culture, as our team thrive and grow through the internships they find opportunities to express their culture. We are very hospitable to our interns and made to feel welcome which gives respect between different people, groups and cultures. Our team has the flexibility with their work to express themselves for all to see.</p><br /><br />
            </ScrollAnimation>
            </div>

            <div className="row">
                <div className="col-sm-3 ">
                     <ReactBootstrap.Card bg="secondary" style={{ width: '30rem' }}>
                        <ReactBootstrap.Card.Header className="design-card-maintitle">What we can do?</ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                        <img src={img1} />
                        <ReactBootstrap.Card.Text>
                        <br /><p className="h5" style={{color: 'aliceblue'}}>
                        We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.                        </p>
                        </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
                <div className="col-sm-3 offset-1">
                    <ReactBootstrap.Card bg="secondary" style={{ width: '30rem' }}>
                        <ReactBootstrap.Card.Header className="design-card-maintitle">Become our partners?</ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                        <img src={img2} />
                        <ReactBootstrap.Card.Text>
                        <br /><p className="h5" style={{color: 'aliceblue'}}>
                        Our preventive and progressive approach will help you take the lead while addressing possible threats in managing data.                        </p>
                        </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
                <div className="col-sm-3 offset-1">
                    <ReactBootstrap.Card bg="secondary" style={{ width: '30rem' }}>
                        <ReactBootstrap.Card.Header className="design-card-maintitle">Need a hand?</ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                        <img src={img3} />
                        <ReactBootstrap.Card.Text>
                        <br /> <p className="h5" style={{color: 'aliceblue'}}>
                        Our support team is available 24/7 a day, 7 days a week and can get ready for solving any of your situational rising problems.                        </p>
                        </ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                </div>
             </div>
             <AboutSection2/>
            
        </div>
    )
}

export default About;
