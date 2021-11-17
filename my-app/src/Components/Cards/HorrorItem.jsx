/** @format */

import { Button, Card, Row, Col, Container } from "react-bootstrap";

const HorrorItem = ({ horrorData }) => (
  <div className="d-flex">
    {horrorData.slice(0, 6).map((data) => (
        <Card style={{ width: "250px", maxHeight: "150px"}} className="mb-2 mx-1">
          <Card.Img style={{objectFit: "cover"}} className="img-fluid" variant="top" src={data.Poster} />
        </Card>
    ))}
  </div>
);

export default HorrorItem;
