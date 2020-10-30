import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSpring, animated } from "react-spring";
import './ResumeArea.css'


// Card animation
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) => `scale(${s})`;

// Progress bar animation
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

const ResumeArea = () => {

    // Card animation
    const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
    }))
    
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={5}>
                    <animated.div
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                    >
                    <div class="card text-white bg-danger mb-3">
                        <div class="card-header">Personal Info</div>
                        <div class="card-body">
                            <p class="card-text lead">Name: Ringku Rahman</p>
                            <p class="card-text lead">Gender: Male</p>
                            <p class="card-text lead">Religion: Islam</p>
                            <p class="card-text lead">Nationality: Bangladeshi</p>
                            <p class="card-text lead">Address: Dhaka, Bangladesh</p>
                            <p class="card-text lead">Language: Bangla, English, Hindi, Arabic</p>
                        </div>
                        </div>
                    </animated.div>
                    <animated.div
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                    >
                    <div class="card text-white bg-danger mb-3">
                        <div class="card-header">Education</div>
                        <div class="card-body">
                            <h5 class="card-title">FRONTEND DEVELOPER, Programming Hero</h5>
                            <h5 class="card-title">DIPLOMA IN SEO, Passive Journal University</h5>
                            <h5 class="card-title">CIVIL ENGINEERING, Bhola Polytechnic Institute</h5>
                        </div>
                    </div>
                </animated.div>
                </Col>
                <Col xs={6} sm={6} md={3} className='mr-5'>
                    <Col>
                        <h2>My Skills</h2>
                        <hr className='bg-white' />
                        <span>React</span>
                        <Progress done="85" />
                        <span>JavaScript</span>
                        <Progress done="80" />
                        <span>Node JS</span>
                        <Progress done="70" />
                        <span>Express JS</span>
                        <Progress done="70" />
                        <span>Redux</span>
                        <Progress done="60" />
                        <span>MongoDB</span>
                        <Progress done="80"/>
                    </Col>
                </Col>
                <Col xs={6} sm={6} md={3}>
                    <Col>
                        <h2>My Skills</h2>
                        <hr className='bg-white' />
                        <span>Bootstrap</span>
                        <Progress done="85" />
                        <span>Material UI</span>
                        <Progress done="80" />
                        <span>CSS3</span>
                        <Progress done="90" />
                        <span>HTML5</span>
                        <Progress done="90" />
                        <span>SEO</span>
                        <Progress done="95" />
                        <span>Adobe Photoshop</span>
                        <Progress done="80"/>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default ResumeArea;