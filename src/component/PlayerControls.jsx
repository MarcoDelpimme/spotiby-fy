import { Row, Col } from "react-bootstrap";

const Player = () => {
  return (
    <Row className="h-100">
      <Col lg={{ span: 10, offset: 2 }}>
        <Row className="h-100 flex-column justify-content-center align-items-center">
          <Col xs={6} md={4} className="playerControls">
            <div className="d-flex">
              <a href="#">
                <img src="shuffle.png" alt="shuffle" />
              </a>
              <a href="#">
                <img src="prev.png" alt="prev" />
              </a>
              <a href="#">
                <img src="play.png" alt="play" />
              </a>
              <a href="#">
                <img src="next.png" alt="next" />
              </a>
              <a href="#">
                <img src="repeat.png" alt="repeat" />
              </a>
            </div>
            <div className="progress mt-3" id="progress">
              <div role="progressbar"></div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Player;
