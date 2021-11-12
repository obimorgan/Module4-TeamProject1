/** @format */

import { Button, Card, Row, Col, Container } from "react-bootstrap";

const HorrorItem = ({horrorData }) => (
  <div className="d-flex">
    {horrorData.map((data) => (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.Poster} />
      </Card>
    ))}
  </div>
);

export default HorrorItem;