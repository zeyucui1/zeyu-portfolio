import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Snackbar } from '@mui/material'

// Keyframes for the glowing cursor
const blink = keyframes`
  0% {
    border-right: 2px solid transparent;
  }
  50% {
    border-right: 2px solid ${({ theme }) => theme.primary};
  }
  100% {
    border-right: 2px solid transparent;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  overflow: hidden; /* Ensure overflow is hidden */
  position: relative;
`

const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden; /* Hide overflowing content */
  position: relative;
  height: 30px; /* Adjust the height to match the title's height */
`

const MarqueeTitle = styled(motion.div)`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
  position: absolute;
  left: 0;
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    animation: ${blink} 1s step-end infinite;
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    animation: ${blink} 1s step-end infinite;
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;

  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`

const Contact = () => {
  const [open, setOpen] = React.useState(false)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_tox7kqs',
        'template_nv7k7mj',
        form.current,
        'SybVGsYS52j2TfLbi'
      )
      .then(
        (result) => {
          setOpen(true)
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <MarqueeWrapper>
            <MarqueeTitle
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 5,
                ease: 'linear',
              }}
            >
              Email Me 🚀
            </MarqueeTitle>
          </MarqueeWrapper>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact
