import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <div className="app_header">
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  href="/"
                  style={{ fontSize: "20px", color: "#d81a24" }}
                >
                  Home
                </Nav.Link>

                <NavDropdown
                  title="Movies"
                  id="navbarScrollingDropdown"
                  style={{ fontSize: "20px" }}
                >
                  <NavDropdown.Item href="movies">Popular</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Now Playing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Upcoming</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Top Rated</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Series"
                  id="navbarScrollingDropdown"
                  style={{ fontSize: "20px" }}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="TV Shows"
                  id="navbarScrollingDropdown"
                  style={{ fontSize: "20px" }}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  variant="outline-success"
                  style={{
                    "--bs-btn-border-color": "#d81a24",
                    "--bs-btn-hover-bg": "#d81a24",
                    "--bs-btn-color": "#d81a24",
                    "--bs-btn-hover-border-color": "#d81a24",
                    "--bs-btn-active-bg": "white",
                    "--bs-btn-active-border-color": "#d81a24",
                  }}
                >
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default AppHeader;
