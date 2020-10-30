import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ResumeHeading = () => {
    return (
        <Container className='my-5' id='projects'>
            <Row>
                <Col>
                    <h2 className="display-4 text-uppercase text-center">Resume</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default ResumeHeading;