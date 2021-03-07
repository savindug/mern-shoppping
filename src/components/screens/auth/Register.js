import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import style from '../../../styles/login.module.css';

export const Register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [c_pwd, setCpwd] = useState(null);
  const [validated, setValidated] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [btnClasses, seBtnClasses] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    console.log(
      `username: ${username}, email: ${email}, pwd: ${pwd}, c_pwd: ${c_pwd}`
    );
    setValidated(true);
  };

  const onToggle = (event) => {
    setToggle(event.target.checked);
  };

  useEffect(() => {
    const toogleSubmit = () => {
      if (toggle === true) {
        seBtnClasses(' active');
      } else {
        seBtnClasses(' disabled');
      }
    };
    toogleSubmit();
  }, [toggle]);

  // const getClasses = (e) => {
  //   console.log(`btn-class => ${e.target.className}`);
  // };

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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Control
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
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

          <Form.Group controlId="formC_Password">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setCpwd(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="switch"
              label="I Accept Terms & Conditions"
              onChange={onToggle}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            // onClick={(e) => getClasses(e)}
            className={'w-100 btn btn-lg btn-primary' + btnClasses}
          >
            Register
          </Button>

          <Form.Group className="mt-3 text-center">
            <Link className="text-decoration-none" to="/login">
              Already an User?
            </Link>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
