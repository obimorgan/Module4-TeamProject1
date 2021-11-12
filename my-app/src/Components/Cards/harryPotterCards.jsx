/** @format */

import { Button, Card, Row, Col, Container } from "react-bootstrap";

const HarryPotterCards = ({ displayData }) => (
  <div className="d-flex">
    {displayData.map((data) => (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.Poster} />
        {/* <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
      </Card>
    ))}
  </div>
);

export default HarryPotterCards;
