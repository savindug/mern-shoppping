import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
export const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">MERN Cart</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link
              className="text-light"
              href="https://github.com/savindug/mern-shoppping"
              target="_blank"
            >
              <i class="fab fa-github">&nbsp;GitHub</i>
            </Nav.Link>
            <Button href="/cart" variant="outline-secondary text-light">
              <i className="fas fa-shopping-cart">&nbsp;</i>
              <span className="badge badge-danger sm">{getCartCount()}</span>
            </Button>
            <Button href="/login" variant="info" className="mx-1">
              Login
            </Button>
          </Form>
        </div>
      </Navbar>
      <br />
    </>
  );
};
