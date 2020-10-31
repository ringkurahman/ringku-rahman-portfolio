import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ProjectsHeading = () => {
    return (
        <Container className='my-5' id='projects'>
            <Row>
                <Col>
                    <h2 className="display-4 text-uppercase text-center">Projects</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectsHeading