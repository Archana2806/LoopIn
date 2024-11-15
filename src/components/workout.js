import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import workImg1 from "../assets/img/fea1.jpg";
import workImg2 from "../assets/img/fea2.jpg";
import workImg3 from "../assets/img/fea3.webp";
import workImg4 from "../assets/img/fea4.jpg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Workout = () => {
    const workouts = [
        {
            title: "Morning Energizing Flow",
            instructor: "Jason Crandell",
            workoutType: "Yoga",
            level: "Level 2",
            duration: "45 mins",
            category: "Yoga",
            imgUrl: workImg1,
            alt: "Morning Energizing Flow",
            description: "Start your day with a gentle, energizing flow to awaken your body and mind.",
        },
        {
            title: "Quick Morning Smile",
            instructor: "Taylor Harkness",
            workoutType: "Yoga",
            level: "Level 1-2",
            duration: "15 mins",
            category: "Yoga",
            imgUrl: workImg2,
            alt: "Quick Morning Smile",
            description: "A short, refreshing practice designed to put a smile on your face and brighten your morning.",
        },
        {
            title: "High-Intensity Burn",
            instructor: "Sarah Lee",
            workoutType: "HIIT",
            level: "Level 4",
            duration: "30 mins",
            category: "HIIT",
            imgUrl: workImg3,
            alt: "High-Intensity Burn",
            description: "Challenge yourself with this high-energy, full-body workout designed to burn calories fast.",
        },
        {
            title: "Full Body Strength Training",
            instructor: "John Doe",
            workoutType: "Strength",
            level: "Level 3",
            duration: "60 mins",
            category: "Strength",
            imgUrl: workImg4,
            alt: "Strength Training Basics",
            description: "Build strength and endurance with a comprehensive, full-body workout.",
        },
        // Add more workout objects as needed
    ];

    return (
        <section className="workout" id="workouts">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Workout Collections</h2>
                                    <p>Our mission is to inspire and empower individuals on their journey to health and wellness, no matter their fitness level, background, or goals. We believe everyone deserves the tools, guidance, and support to reach their full potential.</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="workouts-tab" defaultActiveKey="Yoga">
                            <Nav variant="pills" className="custom-nav-pills nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="Yoga">Yoga</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="HIIT">HIIT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Strength">Strength</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                {["Yoga", "HIIT", "Strength"].map((category) => (
                                    <Tab.Pane eventKey={category} key={category}>
                                        <Row>
                                            {workouts
                                                .filter(workout => workout.category === category)
                                                .map((workout, index) => (
                                                    <Col md={4} key={index}>
                                                        <ProjectCard {...workout} />
                                                    </Col>
                                                ))}
                                        </Row>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bgimage" />
        </section>
    );
}
