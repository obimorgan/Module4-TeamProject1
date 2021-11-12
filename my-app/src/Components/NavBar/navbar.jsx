import React from "react";
import { Component } from "react";
// import netflix_Logo_RGB from './Components/NavBar/netflix_Logo_RGB ' ;
import { Container,Nav, Navbar, Button, NavDropdown, Dropdown, DropdownButton,Form,} from "react-bootstrap";




class NavBar extends Component{
    render (){
        return (
            <>
           <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <img
              src= "https://w7.pngwing.com/pngs/119/342/png-transparent-logo-netflix-nasdaq-nflx-brand-television-copywriter-floor-television-text-rectangle.png"
              alt=""
              width="150px"
              height="80px"
              class="pt-1 mt-1 mr-2 "
            />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Home" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">TV Shows</Nav.Link>
                <Nav.Link href="#action3">Movies</Nav.Link>
                <Nav.Link href="#action4">Recently Added</Nav.Link>
                <Nav.Link href="#action5">My List</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div class="right-icons row">
              {/* search bar is below */}
              <Form.Group controlId="exampleForm.ControlInput1" className="mr-2 mt-1">
                <Form.Control type="text" placeholder="Search"
                
                />
              </Form.Group>

              <p class="pt-2 m-1">KIDS</p>
              <i class="fas fa-bell search-icon col p-3 "></i>
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
                alt=""
                width="38px"
                height="34px"
                class="mt-1 mr-2 "
              />

              <div>
                <DropdownButton
                  align="end"
                  id="dropdown-menu-align-end"
                  variant="dark"
                  className="dropleft"
                >
                  <Dropdown.Item eventKey="1">User 1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">User 2</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </Container>
        </Navbar>
          </>
        );
    }
}
export default  NavBar;