import React, { useState } from 'react'
import Typical from 'react-typical'
import { useSpring, animated } from 'react-spring'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import myImage from '../images/ringku-rahman.png'
import ModalForm from './ModalForm'

    
    // Image animation
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 240}px,${y / 240}px,0)`
    const trans2 = (x, y) => `translate3d(${x / 200}px,${y / 200}px,0)`
    const trans3 = (x, y) => `translate3d(${x / 160}px,${y / 160}px,0)`
    const trans4 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`
    const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`
    const trans6 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`
    

const HeroArea = () => {

    // Image animation
    const [props, met] = useSpring(() => ({ xy: [0, 0] }))

    // Modal state and function
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
        <section className='hero-area' id='home'>
            <Container>
                <Row className="text-center align-items-center" id="#home">
                    <Col xs={12} sm={12} md={6}>
                        <Typical
                            steps={['Frontend Developer', 5000, 'Frontend Engineer', 3500]}
                            loop={Infinity}
                            wrapper="p"
                            className="lead"
                        />

                        <h1 className="display-4 text-white">Ringku Rahman</h1>
                        <h5 className="pb-2">Web Developer | Programmer | SEO Expert</h5>
                        <p className="lead">With over three years of experience in SEO & web development, I have worked on over dozens of projects throughout my career using platforms such as JavaScript, React JS, Redux, Express JS, Node Js, MongoDB, Bootstrap, Material UI and CSS3 among others.</p>
                        <hr />
                        <Col className="media-icon">
                            <a className='social-icon mr-3' href="https://www.linkedin.com/in/web-master-ringku/" target="_blank">
                            <FontAwesomeIcon className='text-warning mr-2' icon={faLinkedin} style={{ fontSize: '30px' }} />
                        </a>
                        <a className='social-icon' href="https://github.com/ringkurahman" target="_blank">
                            <FontAwesomeIcon className='text-warning' icon={faGithub} style={{fontSize: '30px'}} />
                        </a>
                        </Col>
                        
                        <hr />
                        <a className='btn btn-secondary mr-3' href='https://drive.google.com/uc?export=download&id=1X1UkdI5VCoks15CzefgHyDHG59tyWyJF' target="_blank" rel="no-referrer">Download Resume</a>
                        <Button onClick={handleShow}>Send Message</Button>
                        <ModalForm handleShow={handleShow} handleClose={handleClose} show={show}></ModalForm>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => met({ xy: calc(x, y) })}
                            style={{
                                transform: props.xy.interpolate(trans1),
                                transform: props.xy.interpolate(trans2),
                                transform: props.xy.interpolate(trans3),
                                transform: props.xy.interpolate(trans4),
                                transform: props.xy.interpolate(trans5),
                                transform: props.xy.interpolate(trans6)
                            }}>
                            <Image className="hero-image" src={myImage} fluid />
                        </animated.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroArea




