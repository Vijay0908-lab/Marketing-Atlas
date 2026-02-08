import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../assets/images/Marketing-logo.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: #fff;
  // border-bottom: 1px solid #e5e5e5;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #e63946;
  }

  &.active {
    color: #e63946;
  }
`;

const ConnectButton = styled.button`
  background-color: var(--color-red-500);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d62839;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <img src={logoImage} alt="Logo" />
      </Logo>

      <Nav>
        <StyledNavLink to="/villa-owner">For Villa Owners</StyledNavLink>
        <StyledNavLink to="/marketing-atlas">Property Marketing</StyledNavLink>
        <StyledNavLink to="/service">Our Services</StyledNavLink>
        <StyledNavLink to="/about">About Us</StyledNavLink>
        <ConnectButton>Connect Us</ConnectButton>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
