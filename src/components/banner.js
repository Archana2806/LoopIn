import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/head.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>Achieve Fitness Goals, Your Way</h1>
                                    <p>The LoopIn App helps you reach your fitness goals with expertly designed workouts from our world-class Loop Trainers. 
                                        Loop is perfect for training at home, in the gym or on the road, 
                                        with everything from bodyweight-only to full-equipment workouts for everyone at all fitness levels.</p>
                                    <button onClick={() => console.log('connect')}>Start Working <ArrowRightCircle size={25} /></button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
