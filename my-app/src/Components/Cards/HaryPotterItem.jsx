/** @format */

import { Button, Card, Row, Col, Container } from "react-bootstrap";

const harryPotterItem = ({harryPotterData }) => (
  <div className="d-flex">
    {harryPotterData.map((data) => (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.Poster} />
      </Card>
    ))}
  </div>
);

export default harryPotterItem;