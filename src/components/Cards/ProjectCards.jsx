import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Card = styled(motion.div)`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
`

const Image = styled(motion.img)`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`

const Tags = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`

const Tag = styled(motion.span)`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_skill};
  background-color: ${({ theme }) => theme.text_skill + 15};
  padding: 2px 8px;
  border-radius: 10px;
`

const Details = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`

const Title = styled(motion.div)`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Date = styled(motion.div)`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`

const Description = styled(motion.div)`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const Members = styled(motion.div)`
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const Avatar = styled(motion.img)`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: '0 0 50px 4px rgba(0, 0, 0, 0.6)' },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <Image src={project.image} variants={childVariants} />
      <Tags variants={childVariants}>
        {project.tags?.map((tag, index) => (
          <Tag key={index} variants={childVariants}>
            {tag}
          </Tag>
        ))}
      </Tags>
      <Details variants={childVariants}>
        <Title variants={childVariants}>{project.title}</Title>
        <Date variants={childVariants}>{project.date}</Date>
        <Description variants={childVariants}>
          {project.description}
        </Description>
      </Details>
      <Members variants={childVariants}>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} variants={childVariants} />
        ))}
      </Members>
    </Card>
  )
}

export default ProjectCards
