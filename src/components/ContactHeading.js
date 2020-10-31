import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ContactHeading = () => {
    return (
        <Container className='my-5' id='contact'>
            <Row>
                <Col>
                    <h2 className="display-4 text-uppercase text-center">Contact Me</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactHeading