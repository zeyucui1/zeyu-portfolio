import React from 'react'
import { useState } from 'react'
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all')
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Front end to Full
          stack. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'full stack' ? (
            <ToggleButton
              active
              value="full stack"
              onClick={() => setToggle('full stack')}
            >
              FULL STACK PROJECT
            </ToggleButton>
          ) : (
            <ToggleButton
              value="full stack"
              onClick={() => setToggle('full stack')}
            >
              FULL STACK PROJECT
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'react app' ? (
            <ToggleButton
              active
              value="react app"
              onClick={() => setToggle('react app')}
            >
              REACT PROJECT
            </ToggleButton>
          ) : (
            <ToggleButton
              value="react app"
              onClick={() => setToggle('react app')}
            >
              REACT PROJECT
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'mobile app' ? (
            <ToggleButton
              active
              value="mobile app"
              onClick={() => setToggle('mobile app')}
            >
              MOBILE PROJECT
            </ToggleButton>
          ) : (
            <ToggleButton
              value="mobile app"
              onClick={() => setToggle('mobile app')}
            >
              MOBILE PROJECT
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
