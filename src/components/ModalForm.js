import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Recaptcha from 'react-recaptcha'
import { Button, Form, Modal } from 'react-bootstrap'
import ModalFormContainer from './ModalFormContainer'


const ModalForm = ({ handleClose, handleShow, show }) => {

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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get In Touch</Modal.Title>
        </Modal.Header>
                <Modal.Body>
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
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button type='submit' variant='primary' value='send'>Submit</Button>
                            </div>
                            <Recaptcha
                                sitekey="6Lcr-twZAAAAAC6eUnqjI8hoS8CE_fOn8nupgtYh"
                                render="explicit"
                                onloadCallback={recaptchaLoaded}
                            />
                        </Form>
                    </ModalFormContainer>
                </Modal.Body>
      </Modal>
    </>
    );
};

export default ModalForm