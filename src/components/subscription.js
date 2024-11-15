import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Subscription = () => {
    return (
        <section className="subscription" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Plans and Subscriptions</h2>
                                    <Row className="subscription-plans">
                                        <Col md={4}>
                                            <div className="plan-card">
                                                <h3>Basic Plan</h3>
                                                <p className="price">$19/month</p>
                                                <ul>
                                                    <li>Access to standard workouts</li>
                                                    <li>Weekly progress tracking</li>
                                                    <li>Limited diet plans</li>
                                                </ul>
                                                <button className="subscribe-btn">Subscribe</button>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="plan-card">
                                                <h3>Premium Plan</h3>
                                                <p className="price">$49/month</p>
                                                <ul>
                                                    <li>Access to all workouts</li>
                                                    <li>Personalized diet plans</li>
                                                    <li>Daily progress tracking</li>
                                                    <li>Exclusive fitness challenges</li>
                                                </ul>
                                                <button className="subscribe-btn">Subscribe</button>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="plan-card">
                                                <h3>VIP Plan</h3>
                                                <p className="price">$99/month</p>
                                                <ul>
                                                    <li>Access to all workouts & personal coaching</li>
                                                    <li>24/7 progress tracking & consultations</li>
                                                    <li>Exclusive VIP fitness events</li>
                                                    <li>Priority support</li>
                                                </ul>
                                                <button className="subscribe-btn">Subscribe</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
