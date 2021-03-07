import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import style from '../../../styles/login.module.css';

export const Login = () => {
  const [email, setEmail] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [validated, setValidated] = useState(false);
  const [toggle, setToggle] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false && email == null && pwd == null) {
      event.stopPropagation();
      return;
    }

    if (toggle) {
      console.log(`username: ${email}, pwd ${pwd}`);
    }

    setValidated(form.checkValidity());
  };

  const onToggle = (event) => {
    setToggle(event.target.checked);
  };

  useEffect(() => {});

  return (
    <Container className={style.form_container_flex}>
      <div className={style.form_signin}>
        <img
          className="mb-4 mx-auto d-block"
          src="/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <Form noValidate validated={validated} onSubmit={formSubmit}>
          <Form.Group controlId="formUser">
            <Form.Control
              type="text"
              placeholder="Email or Username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCheckbox">
            <Form.Check
              type="switch"
              label="Keep me signed in"
              onChange={onToggle}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 btn btn-lg btn-primary"
          >
            Login
          </Button>
          <Form.Group className="mt-3 text-center">
            <Link className="text-decoration-none" to="/register">
              A New User?
            </Link>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
