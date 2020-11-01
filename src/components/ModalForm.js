import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Button, Form, Modal } from 'react-bootstrap'
import ModalFormContainer from './ModalFormContainer'


const ModalForm = ({ handleClose, handleShow, show }) => {

    const [success, setSuccess] = useState('')
    const [fail, setFail] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('my_resume', 'template_w9rfl1n', e.target, 'user_toV7VpsuQCYFYlN1UxWA1')
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

    return (
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get In Touch</Modal.Title>
        </Modal.Header>
                <Modal.Body>
                    <ModalFormContainer>
                        <form className="contact-form" onSubmit={sendEmail}>
                                {success && <p className='text-success text-center'>Message Send Successfully</p>}
                                {fail && <p className='text-danger text-center'>Message Failed</p>}
                                
                                <input className='form-control mb-3' type="hidden" name="number" />
                                <label>Name</label>
                                <input
                                    className='form-control mb-3'
                                    type="text"
                                    name="name"
                                    onBlur={handleBlur}
                                />
                                <label>Email</label>
                                <input
                                    className='form-control mb-3'
                                    type="email"
                                    name="email"
                                    onBlur={handleBlur}
                                />
                                <label>Subject</label>
                                <input
                                    className='form-control mb-3'
                                    type="text"
                                    name="subject"
                                    onBlur={handleBlur}
                                />
                                <label>Message</label>
                                <textarea
                                    className='form-control mb-3'
                                    name="message"
                                    onBlur={handleBlur}
                            />
                                <input className='btn btn-secondary mr-2' type="submit" value="Close" onClick={handleClose} />
                                <input className='btn btn-primary' type="submit" value="Send" />
                            </form>
                    </ModalFormContainer>
                </Modal.Body>
      </Modal>
    </>
    );
};

export default ModalForm