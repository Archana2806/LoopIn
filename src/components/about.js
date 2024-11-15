import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import per1 from "../assets/img/per1.jpg";
import per2 from "../assets/img/per2.webp";
import per3 from "../assets/img/per3.jpg";
import per4 from "../assets/img/per4.jpg";
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="about_head" id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="about-bx">
                            <h2>
                                About Us
                            </h2>
                            <p>Our mission is to inspire and support individuals in achieving their health and wellness goals, regardless of their fitness level or background.
                            We pride ourselves on having a team of dedicated and experienced coaches who are committed to helping you succeed. 
                            We believe that everyone deserves to live a healthy and active lifestyle, and we are here to help you make that a reality.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="about-slider">
                                <div className="item">
                                    <img src={per1}  />
                                    <h5>Meditation</h5>
                                </div>
                                <div className="item">
                                    <img src={per2}  />
                                    <h5>HIIT</h5>
                                </div>
                                <div className="item">
                                     <img src={per3}  />
                                    <h5>Cardio</h5>
                                </div>
                                <div className="item">
                                    <img src={per4}  />
                                    <h5>Self Defense</h5>
                                </div>
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />

        </section>
    );
}