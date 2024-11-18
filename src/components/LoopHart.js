import { Col, Row } from "react-bootstrap";
import Ring from "../assets/img/hart.webp";

export const LoopHart = () => {
    return (
        <Col lg={12}>
            <div className="loophart-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Introducing our LoopHart</h3>
                        <p>the HRV and Recovery Tracker</p>
                    </Col>
                    <Col md={6} xl={7}>
                        <div className="hrv-image-bx">
                            <img src={Ring} alt="HRV Tracker" style={{ width: '150px', height: '150px' }} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
