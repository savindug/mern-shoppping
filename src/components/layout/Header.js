import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form inline>
            <Button href="/login" variant="outline-info" className="mx-1">
              Login
            </Button>
            <Button href="/cart" variant="info">
              <i className="fas fa-shopping-cart"></i>
              <text className="mx-1"></text>
              <span className="badge badge-danger">0</span>
            </Button>
          </Form>
        </div>
      </Navbar>
      <br />
    </>
  );
};
