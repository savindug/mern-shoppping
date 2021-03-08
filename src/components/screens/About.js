import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export const About = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to MERN CART!</h1>
        <p>
          This is a MERN Full Stack Application Build using React | Redux
          Front-end + Node Express | MongoDB Backend
        </p>
        <p>
          This App use Github Actions for CI & CD on Firebase Hosting Platform
        </p>
        <p>
          <a
            href="https://github.com/savindug/mern-shoppping"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            Got to GitHub Repo &nbsp;<i class="fas fa-external-link-alt"></i>
          </a>
        </p>

        <p>
          <Button variant="primary" href="/">
            Explore
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};
