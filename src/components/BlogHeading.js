import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const BlogHeading = () => {
    return (
        <Container className='my-5' id='blog'>
            <Row>
                <Col>
                    <h2 className="display-4 text-uppercase text-center">Blog</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogHeading