import { useState } from "react";
import { ButtonContainer, GitHubButton, MobileIcon, MobileLink, MobileMenu, Nav, NavItems, NavLink, NavLogo, NavbarContainer, Span } from "./NavBarStyle";
import { MdPortrait } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import { useTheme } from "styled-components";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme()

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
              <MdPortrait size="3rem" /> <Span>Portfolio</Span>
            </a>
          </NavLogo>
          <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
          </NavItems>
          <ButtonContainer>
            <GitHubButton>GitHub Profile</GitHubButton>
          </ButtonContainer>
          {
                isOpen &&
                <MobileMenu isOpen={isOpen}>
                  <MobileLink href="#about" onClick={() => {
                    setIsOpen(!isOpen)
                  }}>About</MobileLink>
                  <MobileLink href='#skills' onClick={() => {
                    setIsOpen(!isOpen)
                  }}>Skills</MobileLink>
                  <MobileLink href='#experience' onClick={() => {
                    setIsOpen(!isOpen)
                  }}>Experience</MobileLink>
                  <MobileLink href='#projects' onClick={() => {
                    setIsOpen(!isOpen)
                  }}>Projects</MobileLink>
                  <MobileLink href='#education' onClick={() => {
                    setIsOpen(!isOpen)
                  }}>Education</MobileLink>
                  <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href='/' target="_blank">Github Profile</GitHubButton>
                </MobileMenu>
              }
          
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;