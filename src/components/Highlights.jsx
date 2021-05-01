import React from "react";
import Card from "react-bootstrap/Card";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Highlights = (props) => {
  const [
    totalConfirmed,
    totalActive,
    totalRecovered,
    totalDeceased,
  ] = props.highlightsData;

  return (
    <div className="highlights">
      <h3 className="highlights-header">{props.header}</h3>
      <div className="highlights-box-container">
        <Card
          bg={"dark"}
          style={{ width: "18rem" }}
          className="mb-2"
          text={"white"}
        >
          <Card.Header>Total Confirmed</Card.Header>
          <Card.Body>
            <Card.Title>{totalConfirmed}</Card.Title>
          </Card.Body>
        </Card>
        <Card
          bg={"dark"}
          style={{ width: "18rem" }}
          className="mb-2"
          text={"white"}
        >
          <Card.Header>Active</Card.Header>
          <Card.Body>
            <Card.Title>{totalActive}</Card.Title>
          </Card.Body>
        </Card>
        <Card
          bg={"dark"}
          style={{ width: "18rem" }}
          className="mb-2"
          text={"white"}
        >
          <Card.Header>Recovered</Card.Header>
          <Card.Body>
            <Card.Title>{totalRecovered}</Card.Title>
          </Card.Body>
        </Card>
        <Card
          bg={"dark"}
          style={{ width: "18rem" }}
          className="mb-2"
          text={"white"}
        >
          <Card.Header>Deceased</Card.Header>
          <Card.Body>
            <Card.Title>{totalDeceased}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Highlights;
