import React, { useState } from 'react'
import Typical from 'react-typical'
import { useSpring, useTrail, animated } from 'react-spring'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import myImage from '../images/ringku-rahman.png'
import ModalForm from './ModalForm'

    // Background animation
    const fast = { tension: 1200, friction: 40 }
    const slow = { mass: 10, tension: 200, friction: 50 }
    const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`
    
    // Image animation
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 240}px,${y / 240}px,0)`
    const trans2 = (x, y) => `translate3d(${x / 200}px,${y / 200}px,0)`
    const trans3 = (x, y) => `translate3d(${x / 160}px,${y / 160}px,0)`
    const trans4 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`
    const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`
    const trans6 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`
    


const HeroArea = () => {

    // Background animation
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))

    // Image animation
    const [props, met] = useSpring(() => ({ xy: [0, 0] }))

    // Modal state and function
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
        <section className='hero-area' id='home'>
                <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                    <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                    </filter>
                </svg>
                <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
                    {trail.map((props, index) => (
                    <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                    ))}
                </div>
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
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </a>
                        <a className='social-icon' href="https://github.com/ringkurahman" target="_blank">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
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

export default HeroArea;




