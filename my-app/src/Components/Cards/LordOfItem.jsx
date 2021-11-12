/** @format */

import { Button, Card, Row, Col, Container } from "react-bootstrap";

const LordOfItem = ({LordOfData }) => (
  <div className="d-flex">
    {LordOfData.map((data) => (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.Poster} />
      </Card>
    ))}
  </div>
);

export default LordOfItem;