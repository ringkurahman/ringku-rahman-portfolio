import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Recaptcha from 'react-recaptcha'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalFormContainer from './ModalFormContainer'
import { faAt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useSpring, useTrail, animated } from 'react-spring'


    // Background animation
    const fast = { tension: 1200, friction: 40 }
    const slow = { mass: 10, tension: 200, friction: 50 }
    const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const ContactArea = () => {

    // Background animation
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))

    const [success, setSuccess] = useState('')
    const [fail, setFail] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('resume', 'template_3pvj7hq', e.target, 'user_toV7VpsuQCYFYlN1UxWA1')
            .then((result) => {
            setSuccess(result)
            console.log(result.text);
            }, (error) => {
            setFail(error)
            console.log(error.text);
        })
        e.target.reset()
    }

    // Multiple argument state
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        message: '',
    })
    
    // Form field validation
    const handleBlur = (e) => {
        let isFieldValid;
        if (e.target.name === 'name') {
            isFieldValid = e.target.value
        }
        if (e.target.name === 'email') {
            // validation email
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            // validation 1 uppercase 1 lowercase 1 number
            isFieldValid = /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[0-9]){1})\S{6,20}$/.test(
                e.target.value
            );
        }
        if (isFieldValid) {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value
        setUser(newUserInfo)
        }
    }

    const recaptchaLoaded = () => {
        console.log('recaptcha loaded')
    }

    return (
        <>
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
            <Row className='d-flex justify-content-center'>
                <Col md={6}>
                    <div className='d-flex justify-content-center mb-3'>
                        <FontAwesomeIcon className='text-info' icon={faEnvelopeOpenText} style={{fontSize: '40px'}} />
                    </div>
                    <ModalFormContainer>
                        <Form onSubmit={sendEmail}>
                            {success && <p className='text-success text-center'>Message Send Successfully</p>}
                            {fail && <p className='text-danger text-center'>Message Failed</p>}
                            <label>Your Name</label>
                            <input
                                className='form-control mb-3'
                                type="text"
                                name="name"
                                onBlur={handleBlur}
                                placeholder='Name' required />
                            <label>Email Address</label>
                            <input
                                className='form-control mb-3'
                                type="email"
                                name="email"
                                onBlur={handleBlur}
                                placeholder='Email' required />
                            <label>Subject</label>
                            <input
                                className='form-control mb-3'
                                type="text"
                                name="subject"
                                onBlur={handleBlur}
                                placeholder='Subject' required />
                            <label>Message</label>
                            <textarea
                                className='form-control'
                                name="message"
                                onBlur={handleBlur}
                                rows="3" required />
                            <div className='mt-4'>
                            <Button type='submit' variant='primary' value='send'>Submit</Button>
                            </div>
                            <Recaptcha
                                sitekey="6Lcr-twZAAAAAC6eUnqjI8hoS8CE_fOn8nupgtYh"
                                render="explicit"
                                onloadCallback={recaptchaLoaded}
                            />
                        </Form>
                    </ModalFormContainer>
                    <Col className="media-icon d-flex justify-content-center mt-5">
                        <a className='social-icon' href="mailto:mrringkurahman@gmail.com">
                            <FontAwesomeIcon className='text-warning mr-3' icon={faAt} style={{ fontSize: '30px' }} />
                        </a>
                            <a className='social-icon mr-3' href="https://www.linkedin.com/in/web-master-ringku/" target="_blank">
                            <FontAwesomeIcon className='text-warning mr-2' icon={faLinkedin} style={{ fontSize: '30px' }} />
                        </a>
                        <a className='social-icon' href="https://github.com/ringkurahman" target="_blank">
                            <FontAwesomeIcon className='text-warning' icon={faGithub} style={{fontSize: '30px'}} />
                        </a>
                        </Col>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default ContactArea