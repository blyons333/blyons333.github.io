import React from 'react';
import PropTypes from 'prop-types';
import FallbackComponent from '../FallbackComponent/FallbackComponent';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouteMatch, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const menuLinks = [
  {
    path: '/code',
    label: 'CODE',
  },
  {
    path: '/design',
    label: 'DESIGN',
  },
  {
    path: '/blog',
    label: 'BLOG',
  },
  {
    path: '/about',
    label: 'ABOUT',
  },
  {
    path: '/contact',
    label: 'CONTACT',
  },
  {
    path: '/resume',
    label: 'RESUME',
  },
];

const renderMenuLink = (path, label, locationPath) => {
  const isActive = locationPath === path;
  const className = isActive ? 'nav-item-active' : 'nav-item';

  return (
    <Nav.Item key={`nav-${label}`}>
      <Link to={path} className={className}>
        <h1>{label}</h1>
      </Link>
    </Nav.Item>
  );
};

const NavBar = () => {
  let { path, url } = useRouteMatch();
  const isLoading = false;
  const isReady = !isLoading;
  let returnHtml = <FallbackComponent componentName='Navigation bar' />;

  if (isLoading) {
    returnHtml = <div className='loader'>Loading...</div>;
  }

  if (isReady) {
    let navLinks = [];

    for (let menuLink of menuLinks) {
      navLinks.push(renderMenuLink(menuLink.path, menuLink.label, path));
    }

    returnHtml = (
      <Navbar bg='light'>
        <Navbar.Brand href='/'>
          <img src={logo} width='150' height='150' alt='logo' />
        </Navbar.Brand>
        {navLinks}
      </Navbar>
    );
  }

  return returnHtml;
};

NavBar.propTypes = {};

export default NavBar;
