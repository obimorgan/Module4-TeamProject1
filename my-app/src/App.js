/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar/Navbar";
import { Container } from "react-bootstrap";
import Horror from "./Components/Cards/Horror";
import HarryPotterCards from "./Components/Cards/HarryPotterCards";
import LordOfCards from "./Components/Cards/LordOfCards";
import SearchBar from "./Components/SearchBar/SearchBar";
import styled from "styled-components";
import Heading from "./Components/Heading"

const StyledBody = styled.body`
  background: rgb(14,14,14);
`

function App() {
  return (
    <StyledBody>
      <Container fluid>
        <Navbar />
        <div>
          <SearchBar />
        </div>
        <div>
          <Heading title="Horror"/>
          <Horror />
        </div>
        <div>
          <Heading title="Harry Potter"/>
          <HarryPotterCards />
        </div>
        <div>
          <Heading title="Popular"/>
          <LordOfCards />
        </div>
      </Container>
    </StyledBody>
  );
}

export default App;
