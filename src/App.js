import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import PlayerControl from "./component/PlayerControls";
import MainContent from "./component/MainContent";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        const { data } = await response.json();
        setSearchResults(data.slice(0, 10));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="col-2">
            <Sidebar onSearch={handleSearch}></Sidebar>
          </Col>
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <MainContent searchResults={searchResults}></MainContent>
          </Col>
        </Row>
      </Container>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <PlayerControl></PlayerControl>
      </Container>
    </>
  );
}

export default App;
