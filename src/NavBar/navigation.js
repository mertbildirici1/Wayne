import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function Navigation() {
  return (
    <Navbar>
      <NavList>
        <NavItem>
          <NavLink to="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/members">MEMBERS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/photos">PHOTOS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/rush">RUSH FORM</NavLink>
        </NavItem>
        {/* Add more links as needed */}
      </NavList>
    </Navbar>
  );
}

export default Navigation;
