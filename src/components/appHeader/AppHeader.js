import { useState } from "react";
import { useDispatch, useSelector, useEffect } from "react-redux";
import { setSearchByName } from "../appFilters/filtersSlice";
import { setSwitcher } from "../appFiltersByName/filtersByNameSlice";

import {
  fetchMovies,
  fetchTvShows,
  fetchCollections,
  fetchCompanies,
  fetchKeywords,
  fetchMulties,
  fetchPersons,
} from "../appFiltersByName/filtersByNameSlice";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./AppHeader.scss";

const AppHeader = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  // const Employee = useSelector(state => state.movies.objectOfEmployees);

  // useEffect(() => {
  //     dispatch()
  // }, [])

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
                  <NavDropdown.Item href="/movies/popular">
                    Popular
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/movies/now_playing">
                    Now Playing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/movies/upcoming">
                    Upcoming
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/movies/top_rated">
                    Top Rated
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Series"
                  id="navbarScrollingDropdown"
                  style={{ fontSize: "20px" }}
                >
                  <NavDropdown.Item href="/tv/popular">
                    Popular
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/tv/top_rated">
                    Top Rated
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/movies/upcoming">
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
              <Form
                // id="my_id_111"
                className="d-flex"
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(setSwitcher(""));
                  dispatch(setSearchByName(searchValue));

                  // dispatch(fetchMovies(searchValue));
                  // dispatch(fetchTvShows(searchValue));
                  // dispatch(fetchCollections(searchValue));
                  // dispatch(fetchCompanies(searchValue));
                  // dispatch(fetchKeywords(searchValue));
                  // dispatch(fetchMulties(searchValue));
                  if (
                    window.location.href !==
                    "http://localhost:3000/search/search"
                  ) {
                    window.location.href =
                      "http://localhost:3000/search/search";
                  }
                }}
              >
                <Form.Control
                  id="37Eh8sh"
                  name="search"
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    localStorage.setItem("37Eh8sh", e.target.value);
                    setSearchValue(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      e.preventDefault();
                      document.querySelector(".submit-button").click();
                    }
                  }}
                />
                <Button
                  type="submit"
                  className="submit-button"
                  // href="/search/search"
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
