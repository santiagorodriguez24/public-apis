import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { ROUTE_HOME } from 'routes/routes';

const locales = {
  navBarDescription:
    'PUBLIC APIs provides a collective list of free APIs for use in software and web development.',
};

const PublicNavBar = () => {
  let history = useHistory();

  return (
    <div>
      <Navbar className="navbar-app" expand="md">
        <NavbarBrand>
          <img
            src={process.env.PUBLIC_URL + '/images/public-api-logo.png'}
            alt="PL Logo"
            className="navbar-logo link"
            onClick={() => history.push(ROUTE_HOME)}
          />
        </NavbarBrand>
        <NavbarText className="navbar-description">{locales.navBarDescription}</NavbarText>
      </Navbar>
    </div>
  );
};

export default PublicNavBar;
