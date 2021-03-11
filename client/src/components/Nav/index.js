import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navs() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for anything"
            className="mr-sm-2"
          />
          <Button className="Searchbtn">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navs;
