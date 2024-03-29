import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

const Player = () => {
  const selectedSong = useSelector((state) => {
    return state.data;
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio-element");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <Row className="h-100 justify-content-end align-items-center">
      <Col lg={{ span: 3 }} className="text-center">
        {selectedSong && (
          <>
            <img src={selectedSong.album.cover_small} alt="Song Cover" />
            <span className="text-white ms-3">{selectedSong.title}</span>
          </>
        )}
      </Col>
      <Col lg={{ span: 6 }}>
        <Row className="h-100 flex-column justify-content-center align-items-center">
          <Col xs={6} md={6} className="playerControls">
            <div className="d-flex align-items-center">
              <a href="#">
                <img src="shuffle.png" alt="shuffle" />
              </a>
              <a href="#">
                <img src="prev.png" alt="prev" />
              </a>
              <a href="#" onClick={togglePlay}>
                {isPlaying ? (
                  <img src="pause.svg" alt="pause" id="playBtn" />
                ) : (
                  <img src="play.svg" alt="play" id="pauseBtn" />
                )}
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
          <Col className="playerControls">
            <audio
              id="audio-element"
              src={selectedSong && `${selectedSong.preview}`}
              type="audio/mpeg"
              onPlay={handlePlay}
              onPause={handlePause}
            ></audio>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Player;
