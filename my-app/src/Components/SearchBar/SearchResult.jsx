/** @format */

import { Button, Card, Row, Col, Container } from "react-bootstrap";

const SearchResult = ({searchData }) => (
  <div className="d-flex">
    {searchData.map((data) => (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.Poster} />
      </Card>
    ))}
  </div>
);

export default SearchResult;