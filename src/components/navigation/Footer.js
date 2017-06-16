import React from 'react';
import {Navbar} from "react-bootstrap"

class Footer extends React.Component {

  render() {
    return (
      <Navbar fixedBottom={true}>
        <Navbar.Header>
          <Navbar.Brand>
            I'm a footer! :)
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }

}

export default Footer;
