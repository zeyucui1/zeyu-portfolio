import React from 'react'
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  DarkModeButton,
} from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di'
import { FaBars } from 'react-icons/fa'
import { Bio } from '../../data/constants'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'
import { useTheme } from 'styled-components'
import { useState } from 'react'

const Navbar = ({ darkMode, setDarkMode }) => {
  const handleDarkModeChange = () => {
    setDarkMode((isDarkMode) => !isDarkMode)
  }
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20;',
              cursor: 'pointer',
            }}
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Zeyu's Portfolio</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        <DarkModeButton onClick={handleDarkModeChange}>
          {darkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
        </DarkModeButton>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: `${theme.primary}`,
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
