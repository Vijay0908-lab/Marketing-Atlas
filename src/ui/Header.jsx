import { NavLink , Link } from "react-router-dom";
import { Phone } from "lucide-react";
import styled from "styled-components";
import logoImage from "../assets/images/Marketing-logo.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color:#101826;
  // border-bottom: 1px solid #e5e5e5;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size:1.5rem;
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
  background-color: #e63946; /* Using your red color directly */
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Gap between icon and text */

  &:hover {
    background-color: #d62839;
  }
`
function Header() {
  return (
    <StyledHeader>
     <Link to="/">
        <Logo>
          <img src={logoImage} alt="Logo" />
        </Logo>
      </Link>

      <Nav>
        <StyledNavLink to="/villa-owner">For Villa Owners</StyledNavLink>
        <StyledNavLink to="/property-marketing">Property Marketing</StyledNavLink>
        <StyledNavLink to="/service">Our Services</StyledNavLink>
          <StyledNavLink to="/sign-up">Sign-Up</StyledNavLink>
       <a href="tel:+918591131447" style={{ textDecoration: 'none' }}>
          <ConnectButton>
            <Phone size={18} /> {/* The Call Icon */}
            Call-Us
          </ConnectButton>
        </a>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
