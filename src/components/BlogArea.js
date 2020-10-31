import React from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap'
import ReactImage from '../images/react.png'
import JavaScriptImage from '../images/javascript.jpeg'
import NodeJsImage from '../images/nodejs.jpg'



const BlogArea = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={ReactImage} />
                            <Card.Body>
                            <Card.Title>A Complete Guide to useEffect</Card.Title>
                            <Card.Text>
                                You wrote a few components with Hooks. Maybe even a small app. You’re mostly satisfied. You’re comfortable with the API and picked up a few tricks along the way.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted mr-2">Last updated 2 days ago</small>
                                <a href="#" class="card-link">Read More</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={JavaScriptImage} />
                            <Card.Body>
                            <Card.Title>Top 10 JavaScript Frameworks to Learn in 2020</Card.Title>
                            <Card.Text>
                                There is no doubt that JavaScript is now the #1 programming language in the world and also the king of web development. If you want to become a web developer...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted mr-2">Last updated 7 days ago</small>
                                <a href="#" class="card-link">Read More</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={NodeJsImage} />
                            <Card.Body>
                            <Card.Title>What's New for Node.js in 2020</Card.Title>
                            <Card.Text>
                                There are lots of interesting features being explored for the next major releases of Node.js. In this post I’ll explore some of the most significant updates the Node.js community can expect in 2020.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted mr-2">Last updated 5 days ago</small>
                                <a href="#" class="card-link">Read More</a>
                            </Card.Footer>
                        </Card>
                        </CardDeck>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogArea;