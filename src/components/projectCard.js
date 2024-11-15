import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, instructor, workoutType, level, duration, imgUrl, description }) => {
    return (
        <Col sm={6} md={4}>
            <div className="work-imgbx">
                <img src={imgUrl} alt={`${title} workout`} />
                <div className="work-txtx">
                    <h4>{title}</h4>
                    <span>{`${instructor} • ${workoutType}`}</span>
                    <p>{level} • {duration}</p>
                </div>
                {/* Description Box */}
                <div className="work-description-box">
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    );
};
