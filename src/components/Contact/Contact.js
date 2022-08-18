import React from 'react'
import {
  ContactContainer,
  ContactPartOne,
  ContactButton,
  ContactTitle,
  ContactForm,
  InputName,
  ContactPartTwo,
  ContactWrapper,
  ContactDiv,
  ContactH3,
  ContactP,
  ContactMedia,
  ContactFollow,
  SocialMedia,
  Facebook,
  Instagram

} from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer>
      <ContactPartOne>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactForm>
          <InputName type='text' placeholder='Name' />
          <InputName type='email' placeholder='Email' />
          <InputName type='text' placeholder='Phone' />
          <InputName type='text' placeholder='Message' />
          <ContactButton>Send Message</ContactButton>
        </ContactForm>
      </ContactPartOne>
      <ContactPartTwo>
        <ContactWrapper>
          <ContactDiv>
            <ContactH3>Our Adress</ContactH3>
            <ContactP>123, sai kung, Hong Kong</ContactP>
          </ContactDiv>
          <ContactDiv>
            <ContactH3>Our Contact</ContactH3>
            <ContactP>info@thedojo.com +123-456-789</ContactP>
          </ContactDiv>
          <ContactMedia>
            <ContactFollow>Follow Us -------</ContactFollow>
            <SocialMedia>
              <Facebook />
              <Instagram />
            </SocialMedia>
          </ContactMedia>
        </ContactWrapper>
      </ContactPartTwo>
    </ContactContainer>
  )
}

export default Contact
