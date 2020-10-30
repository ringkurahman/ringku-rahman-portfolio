import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const ModalFormContainer = ({ children }) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    { children }
                </Col>
            </Row>
        </Container>
    );
};

export default ModalFormContainer;