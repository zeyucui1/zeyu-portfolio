import React, { useState } from 'react'
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
import { motion, useAnimation } from 'framer-motion'

const Navbar = ({ darkMode, setDarkMode }) => {
  const handleDarkModeChange = () => {
    setDarkMode((isDarkMode) => !isDarkMode)
  }

  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()

  const hoverAnimation = {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  }

  const logoAnimation = useAnimation()
  const spanAnimation = useAnimation()

  // Start the animation on component mount
  React.useEffect(() => {
    logoAnimation.start({
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    })

    spanAnimation.start({
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    })
  }, [logoAnimation, spanAnimation])

  return (
    <Nav>
      <NavbarContainer
        as={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <NavLogo to="/">
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20',
              cursor: 'pointer',
            }}
            onClick={() => {
              window.scrollTo(0, 0)
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div animate={logoAnimation}>
              <DiCssdeck size="3rem" />
            </motion.div>
            <motion.div animate={spanAnimation}>
              <Span>Zeyu's Portfolio</Span>
            </motion.div>
          </motion.div>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          />
        </MobileIcon>
        <NavItems
          as={motion.div}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          {[
            'About',
            'Skills',
            'Experience',
            'Projects',
            'Education',
            'My Blog',
          ].map((item) => (
            <motion.div
              key={item}
              whileHover={hoverAnimation}
              style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            >
              {item === 'My Blog' ? (
                <NavLink href="https://zeyu-blog.vercel.app" target="_blank">
                  {item}
                </NavLink>
              ) : (
                <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
              )}
            </motion.div>
          ))}
        </NavItems>
        <ButtonContainer
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        <DarkModeButton onClick={handleDarkModeChange}>
          {darkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
        </DarkModeButton>
        {isOpen && (
          <MobileMenu
            isOpen={isOpen}
            as={motion.div}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {[
              'About',
              'Skills',
              'Experience',
              'Projects',
              'Education',
              'My Blog',
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={hoverAnimation}
                style={{ display: 'block' }}
              >
                {item === 'My Blog' ? (
                  <MobileLink
                    href="https://zeyu-blog.vercel.app"
                    target="_blank"
                    onClick={() => {
                      setIsOpen(!isOpen)
                    }}
                  >
                    {item}
                  </MobileLink>
                ) : (
                  <MobileLink
                    href={`#${item.toLowerCase()}`}
                    onClick={() => {
                      setIsOpen(!isOpen)
                    }}
                  >
                    {item}
                  </MobileLink>
                )}
              </motion.div>
            ))}
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
